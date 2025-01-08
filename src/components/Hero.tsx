import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Illuminating Spaces with
            <span className="text-primary block mt-2">Expert Electrical Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-light max-w-2xl mx-auto mb-8">
            Professional electrical services for residential and commercial properties.
            Licensed experts delivering safety and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};