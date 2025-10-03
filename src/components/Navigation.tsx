"use client";

import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo size={32} />
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 ease-out">
                Services
              </a>
              <a href="#plans" className="text-gray-300 hover:text-white transition-all duration-300 ease-out">
                Plans
              </a>
              <a href="#process" className="text-gray-300 hover:text-white transition-all duration-300 ease-out">
                Process
              </a>
              <a href="#work" className="text-gray-300 hover:text-white transition-all duration-300 ease-out">
                Work
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-all duration-300 ease-out">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://pay.productjoy.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 ease-out items-center justify-center h-10 px-4 rounded-md"
            >
              Get Started
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-all duration-300 ease-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#plans" 
                className="text-gray-300 hover:text-white transition-all duration-300 ease-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans
              </a>
              <a 
                href="#process" 
                className="text-gray-300 hover:text-white transition-all duration-300 ease-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#work" 
                className="text-gray-300 hover:text-white transition-all duration-300 ease-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-white transition-all duration-300 ease-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="https://pay.productjoy.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 ease-out inline-flex items-center justify-center h-10 px-4 rounded-md mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}