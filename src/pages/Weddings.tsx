import { Button } from "@/components/ui/button";

const Weddings = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Header Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/60">
          {/* Video will be added here */}
          <div className="h-full w-full bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">
            Olivia Flemming Smith
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Timeless Vocal Elegance for Your Special Moments
          </p>
          <Button 
            className="bg-[#8B6F47] hover:bg-[#9F815A] text-white px-8 py-6 text-lg transition-all duration-300 flex items-center gap-2"
          >
            Get in Touch
            <span className="text-xl">→</span>
          </Button>
        </div>

        {/* Toggle in top right corner */}
        <div className="absolute top-4 right-4 bg-black/40 rounded-full px-4 py-2 text-sm">
          <span className="text-[#8B6F47]">Wedding</span>
          <span className="mx-2">|</span>
          <span className="text-gray-400 cursor-pointer" onClick={() => window.location.href = '/funerals'}>
            Funeral
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weddings;