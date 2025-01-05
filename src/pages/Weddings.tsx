import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        {/* Toggle fixed to viewport */}
        <div className="fixed top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm z-50">
          <span className="text-[#8B6F47]">Wedding</span>
          <span className="mx-2">|</span>
          <span className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors" onClick={() => window.location.href = '/funerals'}>
            Funeral
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white text-[#8B6F47] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-12">About Olivia</h2>
          
          <p className="text-lg md:text-xl mb-12">
            Based in Birmingham, West Midlands, Olivia Flemming Smith is a professional wedding singer renowned 
            for her remarkable ability to adapt to various musical styles. With her extensive song knowledge and 
            stunning voice, she brings a unique versatility to every performance.
          </p>

          {/* Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <span className="text-3xl">♥</span>
            <span className="text-3xl">♪</span>
          </div>

          <p className="text-lg md:text-xl">
            Her passion lies in weddings, finding joy in sharing her talent with couples on the happiest day of their 
            lives. Whether performing a show or providing background music, Olivia creates a relaxed and romantic 
            atmosphere that perfectly complements your special moments.
          </p>
        </div>
      </div>

      {/* Performance Highlights Section */}
      <div className="bg-[#F5F1EE] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#8B6F47] text-center mb-12">
            Performance Highlights
          </h2>
          
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  {/* Placeholder for video - will be replaced later */}
                  <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                    <p className="text-[#8B6F47]">Video content coming soon</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                    <p className="text-[#8B6F47]">Video content coming soon</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                    <p className="text-[#8B6F47]">Video content coming soon</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-white text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white border-[#8B6F47]" />
              <CarouselNext className="bg-white text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white border-[#8B6F47]" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddings;