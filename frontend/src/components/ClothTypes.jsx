import React from 'react';
import { mockFabrics } from '../mock/mockData';

const ClothTypes = () => {
  // Create duplicated array for seamless infinite scroll
  const duplicatedFabrics = [...mockFabrics, ...mockFabrics];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B4B80] mb-4">
            Supported Fabric Types
          </h2>
          <p className="text-xl text-[#2DA0FF] max-w-2xl mx-auto">
            Our AI can identify and analyze dozens of fabric types with incredible precision
          </p>
        </div>
      </div>

      {/* Scrolling Animation Container */}
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-scroll-right mb-8">
          {duplicatedFabrics.map((fabric, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-4 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border-2 border-[#23B3F0]/30 hover:border-[#2DA0FF] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-48 h-64">
                <div className="text-center flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {fabric.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B4B80] mb-2">
                      {fabric.name}
                    </h3>
                    <p className="text-sm text-[#2DA0FF] line-clamp-2">
                      {fabric.description}
                    </p>
                  </div>
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#23B3F0]/10 to-[#2DA0FF]/20 rounded-full text-xs font-medium text-[#0B4B80]">
                    {fabric.accuracy}% Accuracy
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-scroll-left">
          {duplicatedFabrics.slice().reverse().map((fabric, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-4 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-50/50 to-[#23B3F0]/10 rounded-2xl p-8 border-2 border-[#23B3F0]/30 hover:border-[#2DA0FF] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-48 h-64">
                <div className="text-center flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {fabric.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B4B80] mb-2">
                      {fabric.name}
                    </h3>
                    <p className="text-sm text-[#2DA0FF] line-clamp-2">
                      {fabric.description}
                    </p>
                  </div>
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#23B3F0]/10 to-[#2DA0FF]/20 rounded-full text-xs font-medium text-[#0B4B80]">
                    {fabric.accuracy}% Accuracy
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClothTypes;