import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Quick, Quality Service
            <span className="text-primary block mt-2">You Can Trust</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Professional electrical services for residential and commercial properties.
            Licensed experts delivering safety and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Button className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-light text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};