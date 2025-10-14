import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  const images = ['/mobile1.png', '/mobile2.png', '/mobile3.png', '/mobile4.png','/mobile5.png','/mobile6.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageVisible(false);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setImageVisible(true);
      }, 1000); // Fade-out duration
    }, 3000); // Time each image is visible

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Fabriscan</h1>
        
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">What is Fabriscan?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Fabriscan is a revolutionary application designed to help you identify and learn about different types of fabrics. Whether you're a fashion student, a designer, or just curious about the clothes you wear, Fabriscan provides detailed information at your fingertips.
            </p>
            <p className="text-lg text-gray-700">
              Our advanced image recognition technology can analyze a picture of any fabric and provide you with its name, composition, and common uses. We are constantly updating our database to include more fabrics and improve accuracy.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/designcloth.png" alt="Fabriscan in use" className="rounded-lg"/>
          </div>
        </div>

        {/* Mobile Version Section */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Take it With You</h2>
            <p className="text-lg text-gray-700 mb-4">
              Take the power of Fabriscan with you wherever you go! Our mobile application is available for Android devices. With the mobile app, you can scan fabrics on the go, save your favorite finds, and build your own personal fabric library.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pr-8 relative">
            <img src="/bggg.png" alt="Mobile background" className="w-full h-auto rounded-lg"/>
            <img
              src={images[currentImageIndex]}
              alt="Mobile app screenshot"
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 object-contain transition-opacity duration-1000 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;
