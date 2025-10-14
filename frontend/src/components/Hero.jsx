import React, { Suspense } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Scan, ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#23B3F0] via-blue-50 to-white overflow-hidden">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-4 sm:top-10 sm:left-5 md:top-20 md:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#2DA0FF]/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-8 right-4 sm:bottom-10 sm:right-5 md:bottom-20 md:right-10 w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#23B3F0]/20 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16">
        <div className="flex items-start justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
          {/* Center Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in duration-1000 text-center w-full max-w-5xl">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#2DA0FF]/10 to-[#0B4B80]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#2DA0FF]/30">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-[#2DA0FF]" />
                <span className="text-xs md:text-sm font-medium text-[#0B4B80]">AI-Powered Fabric Analysis</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B4B80] leading-tight px-4">
                Discover Your <span className="bg-gradient-to-r from-[#23B3F0] via-[#2DA0FF] to-[#0B4B80] bg-clip-text text-transparent">Fabric's Story</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-[#2DA0FF] leading-relaxed mx-auto max-w-3xl px-4">
                Upload any fabric image and get instant AI-powered analysis. Identify materials, quality, composition, and care instructions with revolutionary accuracy.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 justify-center items-center px-4">
              <Link to="/scan">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] hover:from-[#FFEB3F] hover:to-[#F7BA03] text-[#0B4B80] font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-200 transform hover:scale-105 group shadow-lg hover:shadow-xl"
                >
                  <Scan className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                  Start Scanning
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              {/* Downward-facing chevron under the button */}
              <div className="mt-6 animate-bounce text-[#0B4B80]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M5 9 L12 16 L19 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;