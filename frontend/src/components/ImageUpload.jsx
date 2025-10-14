import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Upload, Scan, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { BookText, Palette } from 'lucide-react';

const getFabricDescription = (fabricName) => {
    switch (fabricName.toLowerCase()) {
        case "acrylic":
            return "Acrylic is a synthetic fiber known for its softness, warmth, and wool-like feel. It's lightweight, resistant to moths and chemicals, and holds color well.";
        case "artificial_fur":
            return "Artificial fur is a synthetic fabric designed to resemble real animal fur. It is widely used in fashion and home decor for its warmth and luxurious appearance without harming animals.";
        case "artificial_leather":
            return "Artificial leather, or faux leather, is a synthetic material designed to look like real leather. It's a durable, cost-effective, and vegan alternative used in clothing, upholstery, and accessories.";
        case "blended":
            return "Blended fabrics are created by combining two or more different fibers to achieve enhanced properties, such as improved strength, texture, or wrinkle resistance.";
        case "chenille":
            return "Chenille is a soft, fuzzy fabric known for its durability and plush texture. It's commonly used for upholstery, blankets, and comfortable clothing like sweaters.";
        case "corduroy":
            return "Corduroy is a durable, ridged fabric, easily recognizable by its distinct cord-like pattern. It is often used for making trousers, jackets, and shirts.";
        case "cotton":
            return "Cotton is a soft, breathable natural fiber. It is one of the most common materials for clothing and textiles due to its comfort and versatility.";
        case "crepe":
            return "Crepe is a lightweight, twisted-weave fabric with a crinkled, bumpy surface. It is often used for dresses, blouses, and evening wear.";
        case "denim":
            return "Denim is a sturdy, cotton twill fabric, most commonly used for jeans, jackets, and other workwear. It's known for its durability and classic style.";
        case "felt":
            return "Felt is a non-woven fabric made by matting, condensing, and pressing fibers together. It's used in crafts, hats, and industrial applications.";
        case "fleece":
            return "Fleece is a soft, lightweight, and warm synthetic fabric, often made from polyester. It's a popular choice for jackets, blankets, and outdoor clothing.";
        case "fur":
            return "Fur is the thick growth of hair that covers the skin of many animals. It is used in clothing for its warmth and luxurious feel, though ethical concerns are common.";
        case "leather":
            return "Leather is a durable and flexible material created by tanning animal rawhide and skins. It's widely used for footwear, clothing, and furniture.";
        case "linen":
            return "Linen is a strong, lightweight fabric made from the flax plant. It is known for its exceptional coolness and freshness in hot weather.";
        case "nylon":
            return "Nylon is a strong, lightweight, and elastic synthetic polymer. It is used in a wide variety of applications, from clothing and ropes to engineering plastics.";
        case "polyester":
            return "Polyester is a durable, wrinkle-resistant synthetic fabric that dries quickly. It is widely used in clothing, home furnishings, and industrial fabrics.";
        case "satin":
            return "Satin is a fabric with a glossy surface and a dull back, created with a specific weaving technique. It's often used for lingerie, evening gowns, and bedding.";
        case "silk":
            return "Silk is a natural protein fiber produced by silkworms. It is renowned for its softness, luster, and luxurious feel, making it a prized material for high-end clothing.";
        case "suede":
            return "Suede is a type of leather with a napped, fuzzy finish. It's softer and less durable than traditional leather, often used for jackets, shoes, and delicate accessories.";
        case "terrycloth":
            return "Terrycloth is a highly absorbent fabric with uncut loops on one or both sides. It is most commonly used for towels, robes, and bathmats.";
        case "velvet":
            return "Velvet is a soft, luxurious fabric characterized by a dense pile of evenly cut fibers. It has a distinctive soft feel and is used for clothing and upholstery.";
        case "viscose":
            return "Viscose is a semi-synthetic rayon fabric made from wood pulp. It has a silky feel and drapes well, often used as a silk substitute in clothing.";
        case "wool":
            return "Wool is a natural fiber obtained from sheep and other animals. It is known for its warmth, durability, and moisture-wicking properties.";
        default:
            return "No description available for this fabric type. This may be an unclassified or utility material.";
    }
};

const getFabricRecommendations = (fabricName) => {
    switch (fabricName.toLowerCase()) {
        case "acrylic":
            return "Printed, Jacquard, Embossed, Pleated, Knitted, Applique";
        case "artificial_fur":
            return "Embossed, Animal Print, Patchwork, Color Blocking, Shaved, Dyed";
        case "artificial_leather":
            return "Laser Cut, Embossed, Printed, Quilted, Perforated, Studded";
        case "blended":
            return "Printed, Embroidery, Jacquard, Applique, Tie-Dye, Pleated";
        case "chenille":
            return "Jacquard, Embroidery, Printed, Tufted, Pleated, Patchwork";
        case "corduroy":
            return "Embroidery, Printed, Applique, Washed, Patchwork, Ribbed";
        case "cotton":
            return "Printed, Embroidery, Applique, Tie-Dye, Smocking, Quilting";
        case "crepe":
            return "Printed, Embroidery, Digital Print, Pleated, Ruffled, Beaded";
        case "denim":
            return "Washed, Printed, Embroidery, Distressed, Patchwork, Applique";
        case "felt":
            return "Applique, Printed, Cutwork, Layered, Stitched, Beaded";
        case "fleece":
            return "Printed, Embroidery, Patchwork, Applique, Tie-Dye, Embossed";
        case "fur":
            return "Embossed, Animal Print, Patchwork, Color Blocking, Shaved, Dyed";
        case "leather":
            return "Laser Cut, Embossed, Printed, Quilted, Perforated, Studded";
        case "linen":
            return "Printed, Embroidery, Applique, Drawn Thread Work, Hemstitching, Pleated";
        case "nylon":
            return "Printed, Digital Print, Embossed, Pleated, Quilted, Heat-Set";
        case "polyester":
            return "Printed, Digital Print, Embroidery, Pleated, Sublimation, Embossed";
        case "satin":
            return "Embroidery, Printed, Jacquard, Beaded, Pleated, Ruffled";
        case "silk":
            return "Printed, Embroidery, Digital Print, Shibori, Batik, Beaded";
        case "suede":
            return "Embossed, Laser Cut, Printed, Fringed, Perforated, Stitched";
        case "terrycloth":
            return "Jacquard, Printed, Embroidery, Applique, Woven Patterns, Tie-Dye";
        case "velvet":
            return "Embroidery, Printed, Jacquard, Burnout, Devoré, Pleated";
        case "viscose":
            return "Printed, Digital Print, Embroidery, Tie-Dye, Batik, Pleated";
        case "wool":
            return "Knitted, Printed, Embroidery, Felted, Woven Patterns, Tweed";
        default:
            return "No recommendations available for this fabric type.";
    }
};

const ImageUpload = ({ onResult, hideResults = false }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setAnalysisResult(null);
      toast({
        title: "Image uploaded successfully",
        description: "Ready for analysis",
        duration: 3000,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const apiBase = process.env.REACT_APP_API_BASE || '';
      const response = await fetch(`${apiBase}/analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();

      if (data.success) {
        const fabricName = data.top_prediction.fabric;
        const result = {
          material: fabricName,
          confidence: parseFloat(data.top_prediction.confidence),
          description: getFabricDescription(fabricName),
          recommendations: getFabricRecommendations(fabricName),
        };
        if (!hideResults) {
          setAnalysisResult(result);
        }
        if (typeof onResult === 'function') {
          onResult(result);
        }
        toast({
          title: "Analysis complete!",
          description: `Fabric identified as ${result.material} with ${result.confidence}% confidence`,
          duration: 3000,
        });
      } else {
        throw new Error(data.error || 'Analysis failed');
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: error.message,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="w-full">
      {/* Upload Section */}
      <div className="space-y-6 flex flex-col h-full mb-8">
        <div
          className={`rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 flex-grow flex flex-col items-center justify-center ${
            dragOver 
              ? 'bg-blue-50' 
              : selectedFile 
                ? 'bg-green-50' 
                : 'bg-white'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {selectedFile ? (
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
              <div className="w-full sm:w-1/3 flex-shrink-0">
                <img 
                  src={URL.createObjectURL(selectedFile)} 
                  alt="Preview" 
                  className="rounded-lg max-h-32 mx-auto object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center space-y-2">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
                <div>
                  <p className="text-base font-semibold text-gray-700 break-all">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">Ready for analysis</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm"
                >
                  Change Image
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full text-lg"
                >
                  Upload Image
                </Button>
                <p className="text-sm text-gray-500 mt-2">or drop a file, paste image or <span className="underline cursor-pointer">URL</span></p>
              </div>
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept="image/*"
          className="hidden"
        />

        <Button 
          onClick={analyzeImage}
          disabled={!selectedFile || isAnalyzing}
          size="lg"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold disabled:bg-gray-300 py-3 text-base transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-gray-800 border-t-transparent rounded-full mr-3"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Scan className="h-5 w-5 mr-2" />
              Analyze Fabric
            </>
          )}
        </Button>
      </div>

      {/* Results Section (optional) */}
      {!hideResults && (
        <div className="space-y-6 h-full">
          {analysisResult ? (
            <div className="bg-white rounded-2xl p-6 shadow-lg border animate-in slide-in-from-bottom-4">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Analysis Results</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-600 mb-1">Material</p>
                  <p className="text-2xl font-bold text-gray-800">{analysisResult.material}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-600 mb-1">Confidence</p>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-green-700">{analysisResult.confidence}%</div>
                    <div className="ml-4 w-full h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${analysisResult.confidence}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <BookText className="h-5 w-5 text-gray-600 mr-2" />
                  <p className="text-sm font-medium text-gray-600">Description</p>
                </div>
                <p className="text-sm text-black">{analysisResult.description}</p>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-red-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Palette className="h-5 w-5 text-gray-800 mr-2" />
                  <p className="text-sm font-medium text-gray-800">Design Recommendations</p>
                </div>
                <p className="text-sm text-gray-900">{analysisResult.recommendations}</p>
              </div>
            </div>
          ) : (
            <div className=" p-8 text-center border-2 border-dashed border-gray-200 rounded-2xl h-full flex flex-col justify-center">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-base text-gray-500">Upload an image to see detailed analysis results here</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;