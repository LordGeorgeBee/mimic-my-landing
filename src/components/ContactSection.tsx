import { Mail, Phone, Camera, Facebook, Music } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <div className="bg-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl text-primary mb-6">
          Contact Me
        </h2>
        
        <p className="text-lg md:text-xl text-primary mb-12 max-w-3xl mx-auto">
          I understand that arranging memorial services requires sensitivity and care.
          I'm here to help you create a meaningful musical tribute for your loved one.
        </p>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Button 
            variant="secondary"
            className="bg-accent-light hover:bg-accent text-white py-6 text-lg flex items-center justify-center gap-2"
            onClick={() => window.location.href = 'mailto:contact@example.com'}
          >
            <Mail className="w-5 h-5" />
            Email Me
          </Button>
          
          <Button 
            variant="secondary"
            className="bg-accent hover:bg-accent-light text-primary py-6 text-lg flex items-center justify-center gap-2"
            onClick={() => window.location.href = 'tel:+1234567890'}
          >
            <Phone className="w-5 h-5" />
            Call Me
          </Button>
        </div>

        {/* Additional Information */}
        <h3 className="font-playfair text-3xl md:text-4xl text-primary mb-8">
          Additional Information
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="secondary"
            className="bg-secondary hover:bg-accent-light text-primary px-8 py-4 text-lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            Portfolio
          </Button>
          
          <Button 
            variant="secondary"
            className="bg-secondary hover:bg-accent-light text-primary px-8 py-4 text-lg"
          >
            <Facebook className="w-5 h-5 mr-2" />
            References
          </Button>
          
          <Button 
            variant="secondary"
            className="bg-secondary hover:bg-accent-light text-primary px-8 py-4 text-lg"
          >
            <Music className="w-5 h-5 mr-2" />
            Sample Recordings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;