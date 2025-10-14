import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import FabricDetailDialog from './FabricDetailDialog';

const fabricInsights = [
  {
    image: '/yellow_cotton.jpg',
    category: 'Cotton',
    date: 'December 5, 2024',
    title: 'Yellow Cotton Fabric',
    description:
      'Soft and breathable yellow cotton fabric, perfect for comfortable everyday wear and casual clothing.',
    gradient: 'from-yellow-400 to-yellow-600',
    clothingImages: ['/cotton2.jpg', '/cotton3.jpg', '/cotton1.jpeg', '/cotton4.jpg'],
  },
  {
    image: '/red_silk.jpg',
    category: 'Silk',
    date: 'December 5, 2024',
    title: 'Red Silk Fabric',
    description:
      'Luxurious red silk with a smooth texture and elegant sheen, ideal for formal wear and special occasions.',
    gradient: 'from-red-500 to-red-700',
    clothingImages: ['/silk3.png', '/silk1.jpg', '/silk4.jpeg', '/silk2.jpg'],
  },
  {
    image: '/blue_wool.png',
    category: 'Wool',
    date: 'December 5, 2024',
    title: 'Blue Wool Fabric',
    description:
      'Warm and cozy blue wool fabric, providing excellent insulation and durability for winter garments.',
    gradient: 'from-blue-500 to-blue-700',
    clothingImages: ['/wool2.jpg', '/wool3.jpg', '/wool1.jpeg', '/wool4.jpeg'],
  },
  {
    image: '/ic_denim.jpg',
    category: 'Denim',
    date: 'December 5, 2024',
    title: 'Classic Denim Fabric',
    description:
      'Durable and versatile denim fabric, perfect for jeans, jackets, and timeless casual wear.',
    gradient: 'from-indigo-500 to-indigo-700',
    clothingImages: ['/denim2.jpg', '/denim3.jpg', '/denim1.jpg', '/denim4.jpeg'],
  },
];

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} id="categories" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <style jsx>{`
          @keyframes zoom-in {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-zoom-in {
            animation: zoom-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B4B80] mb-4">
              Fabric Categories
            </h2>
            <p className="text-xl text-[#2DA0FF] max-w-2xl mx-auto">
              Explore our comprehensive database of fabric categories, from everyday wear to specialized textiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricInsights.map((insight, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                  animationFillMode: 'backwards'
                }}
              >
                  <div className="relative overflow-hidden aspect-video">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs px-3 py-1 rounded-full z-10">
                      {insight.category}
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    ></div>
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{insight.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{insight.description}</p>
                    <button onClick={() => setSelectedFabric(insight)} className="flex items-center text-blue-600 font-medium group text-left w-full">
                      <span className="relative">
                        Read More
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/categories" onClick={() => window.scrollTo(0, 0)}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] hover:from-[#FFEB3F] hover:to-[#F7BA03] text-[#0B4B80] font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Categories
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {selectedFabric && (
        <FabricDetailDialog 
          category={selectedFabric} 
          onClose={() => setSelectedFabric(null)} 
        />
      )}
    </>
  );
};

export default Categories;