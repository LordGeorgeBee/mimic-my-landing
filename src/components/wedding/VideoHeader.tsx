import { Button } from "@/components/ui/button";

const VideoHeader = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-accent-dark/60">
        <div className="h-full w-full bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
          Experience the Magic
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
          Watch Olivia perform and imagine how she could make your special day even more memorable.
        </p>
        <Button 
          className="bg-accent-light hover:bg-accent text-white px-8 py-6 text-lg transition-all duration-300 flex items-center gap-2"
        >
          Get in Touch
          <span className="text-xl">→</span>
        </Button>
      </div>

      <div className="fixed top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm z-50">
        <span className="text-accent-light">Wedding</span>
        <span className="mx-2">|</span>
        <span className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors" onClick={() => window.location.href = '/funerals'}>
          Funeral
        </span>
      </div>
    </div>
  );
};

export default VideoHeader;