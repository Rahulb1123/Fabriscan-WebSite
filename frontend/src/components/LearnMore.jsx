import React from 'react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Floating Balls */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.floor(Math.random() * 80) + 40; // Random size between 40px and 120px
        const xPosition = Math.random() * 100; // Random horizontal position
        const yPosition = Math.random() * 100; // Random vertical position
        const delay = Math.random() * 10; // Random delay for animation
        const duration = Math.random() * 10 + 10; // Random animation duration between 10s to 20s

        return (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-float"
            style={{
              width: `${size}px` ,
              height: `${size}px` ,
              top: `${yPosition}%` ,
              left: `${xPosition}%` ,
              animationDelay: `${delay}s` ,
              animationDuration: `${duration}s` ,
            }}
          ></div>
        );
      })}

      <div className="container mx-auto px-4">
        <div className="max-w-5xl w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 relative flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="relative p-6 sm:p-8 md:p-12 flex-1">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn About Fabriscan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fabriscan revolutionizes the textile industry by providing instant, AI-powered fabric analysis. Upload an image and get detailed insights into fabric composition, quality, and potential applications in seconds.
            </p>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-8 bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
                DISCOVER MORE
              </button>
            </Link>
          </div>

          {/* Right image with enhanced fade effect */}
          <div className="relative w-full md:w-[520px] h-64 sm:h-80 md:h-[420px]">
            <img
              src="/designcloth.png"
              alt="Technology in action"
              className="w-full h-full object-cover"
            />
            {/* Enhanced fade effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-white opacity-90" 
              style={{
                backgroundImage: "linear-gradient(to left, rgba(255, 255, 255, 0) 30%, rgb(255, 255, 255) 70%, rgb(255, 255, 255) 100%)"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
