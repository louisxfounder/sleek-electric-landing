import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for professional electrical services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-gray-50" />
                <Input placeholder="Last Name" className="bg-gray-50" />
              </div>
              <Input placeholder="Email" type="email" className="bg-gray-50" />
              <Input placeholder="Phone" type="tel" className="bg-gray-50" />
              <Textarea
                placeholder="Tell us about your project"
                className="bg-gray-50 min-h-[150px]"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-primary-dark text-white rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-primary-light">+1 (602) 628-0244</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary-light">robleselectricservicesphx@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};