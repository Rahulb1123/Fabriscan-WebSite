"""
Fabric Image Classification - Web Application
Flask web app for uploading and analyzing fabric images
"""

import os
from flask import Flask, render_template, request, jsonify, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename
from predict import FabricClassifier
import base64
from io import BytesIO
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['SECRET_KEY'] = 'your-secret-key-here'
app.config['UPLOAD_FOLDER'] = os.path.join(BASE_DIR, 'uploads')
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'}

# Create upload folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Initialize classifier
try:
    classifier = FabricClassifier()
    MODEL_LOADED = True
except Exception as e:
    print(f"Warning: Could not load model - {e}")
    print("Please train the model first by running: python train_model.py")
    MODEL_LOADED = False

def allowed_file(filename):
    """Check if file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def get_image_base64(image_path):
    """Convert image to base64 for display"""
    with open(image_path, 'rb') as f:
        return base64.b64encode(f.read()).decode()

@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html', model_loaded=MODEL_LOADED)

@app.route('/analyze', methods=['POST'])
def analyze():
    """Analyze uploaded fabric image"""
    if not MODEL_LOADED:
        return jsonify({
            'success': False,
            'error': 'Model not loaded. Please train the model first.'
        }), 500
    
    # Check if file was uploaded
    if 'file' not in request.files:
        return jsonify({
            'success': False,
            'error': 'No file uploaded'
        }), 400
    
    file = request.files['file']
    
    # Check if file has a filename
    if file.filename == '':
        return jsonify({
            'success': False,
            'error': 'No file selected'
        }), 400
    
    # Check if file type is allowed
    if not allowed_file(file.filename):
        return jsonify({
            'success': False,
            'error': f'File type not allowed. Allowed types: {", ".join(app.config["ALLOWED_EXTENSIONS"])}'
        }), 400
    
    try:
        # Save uploaded file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Make prediction
        predictions = classifier.predict(filepath, top_k=5)
        
        # Convert image to base64 for display
        image_base64 = get_image_base64(filepath)
        
        # Format results
        results = []
        for fabric_name, confidence in predictions:
            results.append({
                'fabric': fabric_name,
                'confidence': float(confidence),
                'percentage': f"{confidence * 100:.2f}"
            })
        
        # Clean up uploaded file (optional)
        # os.remove(filepath)
        
        return jsonify({
            'success': True,
            'image': f"data:image/jpeg;base64,{image_base64}",
            'predictions': results,
            'top_prediction': {
                'fabric': results[0]['fabric'],
                'confidence': results[0]['percentage']
            }
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Error analyzing image: {str(e)}'
        }), 500

@app.route('/about')
def about():
    """About page"""
    fabric_classes = []
    if MODEL_LOADED and classifier.class_names:
        fabric_classes = sorted(classifier.class_names.values())
    
    return render_template('about.html', 
                          model_loaded=MODEL_LOADED,
                          fabric_classes=fabric_classes)

if __name__ == '__main__':
    debug_mode = os.getenv('DEBUG', 'false').lower() == 'true'
    port = int(os.getenv('PORT', '5000'))

    if debug_mode:
        print("\n" + "="*60)
        print("FABRIC IMAGE CLASSIFICATION - WEB APP")
        print("="*60)
        if MODEL_LOADED:
            print("✓ Model loaded successfully!")
            print(f"✓ {len(classifier.class_names)} fabric classes available")
        else:
            print("✗ Model not loaded!")
            print("  Please train the model first: python train_model.py")
        print(f"\nStarting web server on port {port}...")
        print("="*60 + "\n")

    app.run(debug=debug_mode, host='0.0.0.0', port=port)
