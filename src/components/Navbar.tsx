import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-primary-dark text-xl font-bold">Robles Electric Services</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary-dark text-white">Get Quote</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-600 hover:text-primary block px-3 py-2">Home</a>
            <a href="#services" className="text-gray-600 hover:text-primary block px-3 py-2">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary block px-3 py-2">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary block px-3 py-2">Contact</a>
            <Button className="w-full bg-primary hover:bg-primary-dark text-white mt-4">Get Quote</Button>
          </div>
        </div>
      )}
    </nav>
  );
};