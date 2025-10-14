import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Shirt, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="FabriScan Logo" 
              className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#23B3F0] via-[#2DA0FF] to-[#0B4B80] bg-clip-text text-transparent tracking-tight">FabriScan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/categories" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 font-medium">Categories</Link>
            <a href="#scan" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 font-medium">Scan Cloth</a>
            <Link to="/about" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 font-medium">About</Link>
            <Link to="/contact" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 font-medium">Contact</Link>
            <Link to="/scan">
              <Button className="bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] hover:from-[#FFEB3F] hover:to-[#F7BA03] text-[#0B4B80] font-bold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#2DA0FF]" /> : <Menu className="h-6 w-6 text-[#2DA0FF]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-200 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              <Link to="/categories" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 py-2">Categories</Link>
              <a href="#scan" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 py-2">Scan Cloth</a>
              <Link to="/about" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 py-2">About</Link>
              <Link to="/contact" className="text-[#2DA0FF] hover:text-[#0B4B80] transition-colors duration-200 py-2">Contact</Link>
              <Link to="/scan" className="w-full">
                <Button className="bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] hover:from-[#FFEB3F] hover:to-[#F7BA03] text-[#0B4B80] font-bold w-full mt-3">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;