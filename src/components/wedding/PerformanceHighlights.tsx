import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PerformanceHighlights = () => {
  return (
    <div className="bg-gradient-to-b from-accent to-white text-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-text-dark text-center mb-6">
          Experience the Magic
        </h2>
        <p className="text-lg md:text-xl mb-8 text-text-dark/90 max-w-2xl mx-auto text-center">
          Watch Olivia perform and imagine how she could make your special day even more memorable.
        </p>
        
        <div className="relative">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    src="/showreel-liv.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                  <p className="text-text-dark">Video content coming soon</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                  <p className="text-text-dark">Video content coming soon</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-text-light text-primary hover:bg-primary-light hover:text-text-light border-primary" />
            <CarouselNext className="bg-text-light text-primary hover:bg-primary-light hover:text-text-light border-primary" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHighlights;