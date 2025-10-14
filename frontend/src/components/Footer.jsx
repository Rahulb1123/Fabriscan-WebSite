import React from 'react';
import { Shirt, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0B4B80] to-[#2DA0FF] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="FabriScan Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#23B3F0] via-[#2DA0FF] to-white bg-clip-text text-transparent">FabriScan</span>
            </div>
            
            <p className="text-blue-100 leading-relaxed">
              Revolutionary AI-powered fabric analysis technology. Identify, analyze, and understand any textile with unprecedented accuracy.
            </p>
            
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-200 hover:text-white hover:bg-white/10 p-2"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-200 hover:text-white hover:bg-white/10 p-2"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-200 hover:text-white hover:bg-white/10 p-2"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Fabric Scanner</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">API Access</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Mobile App</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Enterprise Solutions</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Bulk Processing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Fabric Database</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Care Guide</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Industry Reports</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-blue-100 text-sm">
              Get the latest updates on fabric technology and industry insights.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white/40 backdrop-blur-sm"
              />
              <Button className="w-full bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] text-[#0B4B80] font-bold hover:from-[#FFEB3F] hover:to-[#F7BA03] transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 FabriScan. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;