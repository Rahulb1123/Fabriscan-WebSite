import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageUpload from './ImageUpload';
import { CheckCircle, BookText, Palette } from 'lucide-react';

const ScanPage = () => {
  const [result, setResult] = useState(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (result && resultsRef.current) {
      const offset = 120; // account for sticky header
      const rect = resultsRef.current.getBoundingClientRect();
      const y = rect.top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [result]);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="relative inline-block mb-6">
                <video
                  src="/scan-video.mp4"
                  className="relative z-10 w-72 sm:w-80 md:w-[32rem] h-48 sm:h-56 md:h-80 object-cover mt-10 md:mt-16 ml-2 md:ml-6 rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute top-[60%] md:top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-48 sm:h-56 md:w-96 md:h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-70 z-0"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2 ml-2 md:ml-4">
                Discover Your Fabric's Story
              </h1>
              <p className="text-lg text-gray-600 mt-1 ml-2 md:ml-4">
                100% Automatically and <span className="bg-yellow-300 px-2 py-1 rounded">Free</span>
              </p>
            </div>

            {/* Right Content - Upload card */}
            <div className="w-full">
              <div className="bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.1)] p-6 sm:p-8 -mt-12 md:-mt-24 max-w-md md:max-w-lg ml-0 md:ml-8">
                <ImageUpload onResult={setResult} hideResults={true} />
              </div>
            </div>
          </div>

          {/* Results below section */}
          <div ref={resultsRef} className="mt-12">
            {result ? (
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Analysis Results</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-600 mb-1">Material</p>
                    <p className="text-2xl font-bold text-gray-800">{result.material}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-green-600 mb-1">Confidence</p>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-green-700">{result.confidence}%</div>
                      <div className="ml-4 w-full h-2 bg-green-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${result.confidence}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BookText className="h-5 w-5 text-gray-600 mr-2" />
                    <p className="text-sm font-medium text-gray-600">Description</p>
                  </div>
                  <p className="text-sm text-black">{result.description}</p>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-red-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Palette className="h-5 w-5 text-gray-800 mr-2" />
                    <p className="text-sm font-medium text-gray-800">Design Recommendations</p>
                  </div>
                  <p className="text-sm text-gray-900">{result.recommendations}</p>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                <p className="text-base text-gray-500">Upload an image to see detailed analysis results here</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScanPage;
