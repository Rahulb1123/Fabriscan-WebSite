import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import FabricDetailDialog from './FabricDetailDialog';

const categories = ['All', 'Cotton', 'Silk', 'Wool', 'Denim', 'Linen', 'Polyester', 'Rayon', 'Velvet'];

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
  {
    image: '/ic_linen.jpeg',
    category: 'Linen',
    date: 'December 5, 2024',
    title: 'Natural Linen Fabric',
    description:
      'Breathable and eco-friendly linen fabric, ideal for summer clothing and lightweight garments.',
    gradient: 'from-amber-400 to-amber-600',
    clothingImages: ['/linen2.jpg', '/linen3.jpeg', '/linen1.jpeg', '/linen4.jpg'],
  },
  {
    image: '/ic_polyester.jpg',
    category: 'Polyester',
    date: 'December 5, 2024',
    title: 'Polyester Fabric',
    description:
      'Durable and wrinkle-resistant polyester fabric, offering easy care and versatile applications.',
    gradient: 'from-purple-500 to-purple-700',
    clothingImages: ['/polyester2.jpeg', '/polyester3.jpg', '/polyester1.jpg', '/polyester4.jpg'],
  },
  {
    image: '/grey_rayon.jpg',
    category: 'Rayon',
    date: 'December 5, 2024',
    title: 'Grey Rayon Fabric',
    description:
      'Soft and flowing grey rayon fabric with a silky feel, perfect for draping and elegant designs.',
    gradient: 'from-gray-400 to-gray-600',
    clothingImages: ['/rayon2.png', '/rayon3.png', '/rayon1.jpeg', '/rayon4.jpeg'],
  },
  {
    image: '/ic_velvet.jpg',
    category: 'Velvet',
    date: 'December 5, 2024',
    title: 'Velvet Fabric',
    description:
      'Luxurious velvet fabric with a rich texture and elegant appearance, ideal for premium garments.',
    gradient: 'from-pink-500 to-pink-700',
    clothingImages: ['/velvet2.jpg', '/velvet3.jpg', '/velvet1.jpg', '/velvet4.jpg'],
  },
];

function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFabric, setSelectedFabric] = useState(null);
  const totalPages = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const filteredInsights = fabricInsights.filter(
    (insight) =>
      (selectedCategory === 'All' || insight.category === selectedCategory) &&
      (insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        insight.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 || i === totalPages) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === i
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-gray-100 hover:bg-gradient-to-br from-blue-200 to-purple-200'
            }`}
          >
            {i}
          </button>
        );
      } else if (i === 6) {
        pageNumbers.push(
          <span key="ellipsis" className="px-4 py-2 text-gray-500">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="min-h-screen flex flex-col">
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
      <Header />
      {/* Hero Section */}
      <div
        className="h-60 sm:h-72 md:h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://i.postimg.cc/13vbzMfs/forest.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">Fabric Categories</h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 hover:bg-gradient-to-br from-blue-200 to-purple-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search fabrics..."
                className="pl-10 pr-4 py-2 border rounded-full w-full md:w-[300px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto px-4 py-16">
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredInsights.map((insight, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                  animationFillMode: 'backwards',
                }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs px-3 py-1 rounded-full z-10">
                    {insight.category}
                  </div>
                  <div
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
        ) : (
          <p className="text-center text-gray-600">No fabrics match your search criteria.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="relative flex items-center justify-between px-4 py-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="text-gray-500 hover:text-blue-600 transition-colors absolute left-6"
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2 items-center justify-center mx-auto">
          {renderPageNumbers()}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-gray-500 hover:text-blue-600 transition-colors absolute right-6"
        >
          Next →
        </button>
      </div>
      <Footer />
      {selectedFabric && (
        <FabricDetailDialog 
          category={selectedFabric} 
          onClose={() => setSelectedFabric(null)} 
        />
      )}
    </div>
  );
}

export default CategoriesPage;
