import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    {
      src: "/ba54c8d5-8b27-4037-970d-655fb4c9e296_4_287746-162619334747380.webp",
      alt: "Gallery image 1"
    },
    {
      src: "/c56f1545-5466-43ad-b316-0ed3584eda8b-2_4_287746-162619336299512.webp",
      alt: "Gallery image 2"
    },
    {
      src: "/eadd193e-1202-40a1-bf25-ce99136b073e-2_4_287746-162619337021378.webp",
      alt: "Gallery image 3"
    },
    {
      src: "/f0789854-1c10-4009-8716-6e6aa8710f32_4_287746-162619335873491.webp",
      alt: "Gallery image 4"
    },
    {
      src: "/img-0671_4_287746-162702938288714.webp",
      alt: "Gallery image 5"
    },
    {
      src: "/img-0756_4_287746-162702937092683.webp",
      alt: "Gallery image 6"
    }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#8B6F47] text-center mb-12">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;