import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Eye, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
const mockScanPreviews = [
  { id: 1, image: '/dress1.png', fabric: 'Blue Tuxedo', composition: 'Satin Lapel, Wool Blend', quality: 'Premium' },
  { id: 2, image: '/dress2.png', fabric: 'Floral Chiffon', composition: '100% Polyester', quality: 'Luxury' },
  { id: 3, image: '/dress3.jpeg', fabric: 'White Summer Dress', composition: 'Linen & Cotton Mix', quality: 'High Quality' },
  { id: 4, image: '/dress4.jpeg', fabric: 'Boho-Chic Print', composition: 'Viscose & Rayon Blend', quality: 'Durable' },
];

const RandomScan = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockScanPreviews.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockScanPreviews.length) % mockScanPreviews.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-[#23B3F0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B4B80] mb-4">
            Recent Fabric Design
          </h2>
          <p className="text-xl text-[#2DA0FF] max-w-2xl mx-auto">
            See real-time fabric analysis results from our community of users worldwide
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mockScanPreviews.map((scan, index) => (
            <Card 
              key={scan.id}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#23B3F0]/30 hover:border-[#2DA0FF] overflow-hidden relative h-96 ${isInView ? 'animate-pop-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img src={scan.image} alt={scan.fabric} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <CardContent className="relative p-6 flex flex-col justify-end text-white h-full">
                <div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-[#FFEB3F] transition-colors">
                    {scan.fabric}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {scan.composition}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline" 
                      className="border-white/50 text-white bg-white/20"
                    >
                      {scan.quality}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-white hover:text-[#2DA0FF] hover:bg-transparent"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockScanPreviews.map((scan) => (
                <div key={scan.id} className="w-full flex-shrink-0 px-4">
                  <Card className={`group hover:shadow-xl transition-all duration-300 border-2 border-[#23B3F0]/30 hover:border-[#2DA0FF] overflow-hidden relative h-[420px] ${isInView ? 'animate-pop-up' : 'opacity-0'}`}>
                    <img src={scan.image} alt={scan.fabric} className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <CardContent className="relative p-6 flex flex-col justify-end text-white h-full">
                      <div>
                        <h3 className="font-bold text-white mb-2 text-xl group-hover:text-[#FFEB3F] transition-colors">
                          {scan.fabric}
                        </h3>
                        <p className="text-gray-200 mb-4">
                          {scan.composition}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-white/50 text-white bg-white/20">
                            {scan.quality}
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-white hover:text-[#2DA0FF] hover:bg-transparent">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-[#23B3F0] text-[#2DA0FF] hover:bg-[#2DA0FF] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {mockScanPreviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-[#2DA0FF] to-[#0B4B80]' 
                      : 'bg-[#23B3F0]/30 hover:bg-[#2DA0FF]/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-[#23B3F0] text-[#2DA0FF] hover:bg-[#2DA0FF] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RandomScan;