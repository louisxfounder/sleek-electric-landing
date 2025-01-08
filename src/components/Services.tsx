import { Lightbulb, Shield, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Expert installation of modern lighting systems for homes and businesses.",
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety audits and certification services.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Quick and reliable electrical maintenance and repair services.",
  },
  {
    icon: Zap,
    title: "Power Solutions",
    description: "Custom power solutions and emergency electrical services.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};