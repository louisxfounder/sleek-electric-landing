import { Award, Users, Clock } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
              Your Trust, Our Priority
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Roless Electric Services, we're all about dependable solutions you can trust. Our focus is delivering quality work on schedule, with clear communication at every step—keeping your home or business powered safely and efficiently.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">Certified Experts</h3>
                <p className="text-gray-600">Fully trained for every job</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">Customer-Focused</h3>
                <p className="text-gray-600">We listen and deliver</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">Rapid Service</h3>
                <p className="text-gray-600">Swift answers, faster fixes</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/30047910-b59c-4db0-aec1-0d285519e116.png"
                alt="Professional electrician giving thumbs up next to service van"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};