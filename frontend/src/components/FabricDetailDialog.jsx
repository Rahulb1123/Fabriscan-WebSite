import React from 'react';
import { X } from 'lucide-react';

const FabricDetailDialog = ({ category, onClose }) => {
  if (!category) return null;

  const { clothingImages } = category;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="relative bg-white bg-opacity-80 rounded-3xl shadow-2xl w-full max-w-4xl h-[90vh] max-h-[700px] overflow-hidden transform transition-all duration-300 scale-95 animate-scale-in">
        <style jsx>{`
          @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
        `}</style>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 transition-colors z-10"
        >
          <X size={32} />
        </button>

        <div className="relative w-full h-full p-8 overflow-hidden">

          <div className="relative w-full h-full">
            {/* Fabric Image */}
            <div className="absolute top-8 left-8 w-48 h-32 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>

            {/* Description */}
            <div className="absolute top-48 left-8 w-48 h-48 bg-gray-100 rounded-2xl p-4 flex items-center justify-center">
              <p className="text-gray-700 text-sm font-serif leading-relaxed text-center">
                <strong>{category.category}</strong> is {category.description.toLowerCase()}
              </p>
            </div>

            {/* Main Dress Image */}
            <div className="absolute top-[calc(50%-10rem)] md:top-[calc(50%-12rem)] left-[calc(50%)] w-[10rem] h-[16rem] md:w-[14rem] md:h-[22rem] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img src={clothingImages[0]} alt={`${category.title} outfit 1`} className="w-full h-full object-cover" />
            </div>

            {/* Second Dress Image (Top Right) */}
            <div className="absolute top-4 right-12 w-32 h-44 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={clothingImages[1]} alt={`${category.title} outfit 2`} className="w-full h-full object-cover" />
            </div>

            {/* Handbag Image (Bottom Left of Center) */}
            <div className="absolute bottom-8 left-[calc(50%-9rem)] w-32 h-40 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={clothingImages[2]} alt={`${category.title} accessory 1`} className="w-full h-full object-cover" />
            </div>

            {/* Shoes Image (Bottom Right) */}
            <div className="absolute bottom-4 right-12 w-28 h-36 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={clothingImages[3]} alt={`${category.title} accessory 2`} className="w-full h-full object-cover" />
            </div>

            {/* Decorative Sparkles */}
            <div className="absolute top-1/4 left-[40%] text-black text-5xl opacity-80">✦</div>
            <div className="absolute bottom-0 right-1/3 text-black text-4xl opacity-80">✦</div>
            
            {/* Decorative Circles */}
            <div className="absolute top-1/2 right-28 w-4 h-4 bg-black rounded-full opacity-70"></div>
            <div className="absolute top-[55%] right-32 w-2 h-2 bg-black rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricDetailDialog;
