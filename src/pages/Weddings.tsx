import { Button } from "@/components/ui/button";
import { Music, Heart, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
            Experience the Magic
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
            Watch Olivia perform and imagine how she could make your special day even more memorable.
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
      <div className="bg-gradient-to-b from-[#B99976] to-[#E5D3B3] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#987554] text-center mb-6">
            Experience the Magic
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#987554] max-w-2xl mx-auto text-center">
            Watch Olivia perform and imagine how she could make your special day even more memorable.
          </p>
          
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
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

      {/* Services Section */}
      <div className="bg-[#F5DEB3] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#8B6F47] text-center mb-16">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Memorial Services Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Music className="w-12 h-12 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair text-2xl text-[#8B6F47] mb-4">
                Memorial Services
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Offering a selection of dignified and moving musical tributes for memorial 
                services. From timeless hymns to classical pieces, I provide heartfelt 
                performances that honor your loved ones with grace and reverence.
              </p>
            </div>

            {/* Celebration of Life Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Heart className="w-12 h-12 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair text-2xl text-[#8B6F47] mb-4">
                Celebration of Life
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Creating meaningful musical moments for celebration of life ceremonies. I 
                work closely with families to select pieces that celebrate and commemorate 
                their loved one's journey, bringing comfort and solace through carefully 
                chosen musical selections.
              </p>
            </div>

            {/* Religious Services Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Star className="w-12 h-12 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair text-2xl text-[#8B6F47] mb-4">
                Religious Services
              </h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Experienced in performing appropriate musical selections for various religious 
                and cultural traditions. Whether traditional hymns or classical pieces, I 
                ensure each performance respects and enhances the spiritual significance of 
                the service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#8B6F47] text-center mb-16">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <p className="text-[#8B6F47] italic mb-6 text-lg leading-relaxed">
                  Olivia's voice brought profound comfort during our difficult time. Her rendition of 'Ave Maria' was absolutely beautiful.
                </p>
                <div>
                  <h3 className="font-semibold text-[#8B6F47] text-lg">The Thompson Family</h3>
                  <p className="text-gray-500">Memorial Service</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <p className="text-[#8B6F47] italic mb-6 text-lg leading-relaxed">
                  Her performance added such dignity and grace to my mother's service. We couldn't have asked for a more perfect tribute.
                </p>
                <div>
                  <h3 className="font-semibold text-[#8B6F47] text-lg">Sarah Williams</h3>
                  <p className="text-gray-500">Celebration of Life</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <p className="text-[#8B6F47] italic mb-6 text-lg leading-relaxed">
                  The musical selections were perfectly chosen and performed with such sensitivity. Olivia helped make a difficult day more bearable.
                </p>
                <div>
                  <h3 className="font-semibold text-[#8B6F47] text-lg">Robert & Mary Johnson</h3>
                  <p className="text-gray-500">Memorial Service</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Weddings;
