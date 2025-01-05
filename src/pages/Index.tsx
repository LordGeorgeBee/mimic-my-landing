import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary px-4 py-16">
      <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary mb-8 text-center">
        Olivia Flemming Smith
      </h1>
      
      <p className="text-primary text-lg md:text-xl mb-12 text-center">
        What are you looking for?
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Button 
          className="bg-primary hover:bg-primary-hover text-white font-medium py-6 text-lg w-full transition-colors duration-300"
          onClick={() => navigate("/weddings")}
        >
          Weddings
        </Button>
        
        <Button 
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 font-medium py-6 text-lg w-full transition-colors duration-300"
          onClick={() => navigate("/funerals")}
        >
          Funerals
        </Button>
      </div>
    </div>
  );
};

export default Index;