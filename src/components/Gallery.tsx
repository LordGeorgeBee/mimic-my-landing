import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#8B6F47] text-center mb-12">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for 6 images */}
          {[...Array(6)].map((_, index) => (
            <div 
              key={index}
              className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <p className="text-[#8B6F47]">Image {index + 1} coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;