import { Button } from "./ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
      <AnimatedSection direction="fade" delay={100}>
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          Ready to ship your 
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            next big idea?
          </span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Join 100+ successful companies who chose ProductJoy to ship their products. 
          Book a call and let&apos;s make it happen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <a
            href="https://pay.productjoy.co"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group transition-all duration-300 ease-out rounded-md inline-flex items-center justify-center"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://pay.productjoy.co"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ease-out rounded-md inline-flex items-center justify-center"
          >
            Book Discovery Call
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-gray-400 text-sm sm:text-base px-4">
          <div className="flex items-center">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span>hello@productjoy.co</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span>15-min discovery calls available</span>
          </div>
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}