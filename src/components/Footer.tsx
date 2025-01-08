import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">RayTek Electric</h3>
            <p className="text-primary-light mb-4 max-w-md">
              Professional electrical services for residential and commercial properties.
              Licensed experts delivering safety and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-light hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-primary-light hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-primary-light hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-primary-light hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-light hover:text-white transition-colors">Lighting Installation</a></li>
              <li><a href="#" className="text-primary-light hover:text-white transition-colors">Safety Inspections</a></li>
              <li><a href="#" className="text-primary-light hover:text-white transition-colors">Maintenance & Repairs</a></li>
              <li><a href="#" className="text-primary-light hover:text-white transition-colors">Power Solutions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} RayTek Electric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};