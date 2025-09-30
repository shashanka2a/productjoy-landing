import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
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
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 ease-out"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}