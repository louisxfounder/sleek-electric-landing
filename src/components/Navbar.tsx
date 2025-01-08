import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary-dark/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">RayTek Electric</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-primary-light hover:text-white px-3 py-2 transition-colors">Home</a>
              <a href="#services" className="text-primary-light hover:text-white px-3 py-2 transition-colors">Services</a>
              <a href="#about" className="text-primary-light hover:text-white px-3 py-2 transition-colors">About</a>
              <a href="#contact" className="text-primary-light hover:text-white px-3 py-2 transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/80 text-white">Get Quote</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-primary-light hover:text-white block px-3 py-2">Home</a>
            <a href="#services" className="text-primary-light hover:text-white block px-3 py-2">Services</a>
            <a href="#about" className="text-primary-light hover:text-white block px-3 py-2">About</a>
            <a href="#contact" className="text-primary-light hover:text-white block px-3 py-2">Contact</a>
            <Button className="w-full bg-primary hover:bg-primary/80 text-white mt-4">Get Quote</Button>
          </div>
        </div>
      )}
    </nav>
  );
};