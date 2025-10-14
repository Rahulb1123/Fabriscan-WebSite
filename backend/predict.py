"""
Fabric Image Classification - Prediction Script
This script loads a trained model and predicts fabric type from an image
"""

import os
import sys
import numpy as np
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import json

# Configuration
IMG_HEIGHT = 224
IMG_WIDTH = 224
MODEL_PATH = 'fabric_classifier_model.h5'
CLASS_INDICES_PATH = 'class_indices.txt'

class FabricClassifier:
    def __init__(self, model_path=MODEL_PATH, class_indices_path=CLASS_INDICES_PATH):
        """Initialize the fabric classifier"""
        self.model = None
        self.class_names = {}
        self.model_path = model_path
        self.class_indices_path = class_indices_path
        self.load_model()
        self.load_classes()
    
    def load_model(self):
        """Load the trained model"""
        if not os.path.exists(self.model_path):
            raise FileNotFoundError(f"Model file not found: {self.model_path}")
        
        print(f"Loading model from {self.model_path}...")
        self.model = keras.models.load_model(self.model_path)
        print("[+] Model loaded successfully!")
    
    def load_classes(self):
        """Load class names from file"""
        if not os.path.exists(self.class_indices_path):
            raise FileNotFoundError(f"Class indices file not found: {self.class_indices_path}")
        
        with open(self.class_indices_path, 'r') as f:
            for line in f:
                idx, name = line.strip().split(':')
                self.class_names[int(idx)] = name
        
        print(f"[+] Loaded {len(self.class_names)} fabric classes")
    
    def preprocess_image(self, image_path):
        """Preprocess image for prediction"""
        # Load image
        img = Image.open(image_path)
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to model input size
        img = img.resize((IMG_WIDTH, IMG_HEIGHT))
        
        # Convert to array and normalize
        img_array = np.array(img)
        img_array = img_array / 255.0
        
        # Add batch dimension
        img_array = np.expand_dims(img_array, axis=0)
        
        return img_array
    
    def predict(self, image_path, top_k=5):
        """
        Predict fabric type from image
        
        Args:
            image_path: Path to the image file
            top_k: Number of top predictions to return
        
        Returns:
            List of tuples (fabric_name, confidence)
        """
        # Preprocess image
        img_array = self.preprocess_image(image_path)
        
        # Make prediction
        predictions = self.model.predict(img_array, verbose=0)
        
        # Get top K predictions
        top_indices = np.argsort(predictions[0])[::-1][:top_k]
        
        results = []
        for idx in top_indices:
            fabric_name = self.class_names[idx]
            confidence = predictions[0][idx]
            results.append((fabric_name, confidence))
        
        return results
    
    def predict_and_display(self, image_path, top_k=5):
        """Predict and display results"""
        print(f"\n{'='*60}")
        print(f"Analyzing fabric image: {image_path}")
        print(f"{'='*60}")
        
        if not os.path.exists(image_path):
            print(f"✗ Error: Image file not found: {image_path}")
            return None
        
        # Make prediction
        results = self.predict(image_path, top_k)
        
        # Display results
        print(f"\n[?] Top {top_k} Predictions:")
        print(f"{'-'*60}")
        
        for i, (fabric_name, confidence) in enumerate(results, 1):
            bar_length = int(confidence * 40)
            bar = '#' * bar_length + '-' * (40 - bar_length)
            print(f"{i}. {fabric_name:20s} │ {bar} │ {confidence*100:6.2f}%")
        
        # Get top prediction
        top_fabric, top_confidence = results[0]
        
        print(f"\n{'='*60}")
        print(f"[OK] Predicted Fabric: {top_fabric}")
        print(f"   Confidence: {top_confidence*100:.2f}%")
        print(f"{'='*60}\n")
        
        return results

def main():
    """Main function for command-line usage"""
    if len(sys.argv) < 2:
        print("Usage: python predict.py <image_path>")
        print("Example: python predict.py test_image.jpg")
        sys.exit(1)
    
    image_path = sys.argv[1]
    
    try:
        # Create classifier
        classifier = FabricClassifier()
        
        # Make prediction
        classifier.predict_and_display(image_path)
        
    except FileNotFoundError as e:
        print(f"\n✗ Error: {e}")
        print("\nPlease ensure you have:")
        print(f"  1. Trained model file: {MODEL_PATH}")
        print(f"  2. Class indices file: {CLASS_INDICES_PATH}")
        print("\nRun 'python train_model.py' to train the model first.")
        sys.exit(1)
    except Exception as e:
        print(f"\n✗ Error during prediction: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
