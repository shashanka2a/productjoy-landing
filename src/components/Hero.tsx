"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Typing effect component
function TypingText({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle background elements with parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-pink-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          <TypingText text="Launch ideas that inspire," speed={80} />
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <TypingText text="design, and grow." speed={80} />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          ProductJoy is your startup&apos;s all-in-one design, development, and marketing partner — crafting brands, building products, and driving growth at startup speed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ease-out"
            onClick={() => {
              const el = document.getElementById('work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.hash = 'work';
            }}
          >
            Explore Our Work
          </Button>
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group transition-all duration-300 ease-out"
            onClick={() => window.open('https://pay.productjoy.co', '_blank')}
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center px-4">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-sm sm:text-base text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-400">Startup Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-sm sm:text-base text-gray-400">Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">48h</div>
            <div className="text-sm sm:text-base text-gray-400">Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
}