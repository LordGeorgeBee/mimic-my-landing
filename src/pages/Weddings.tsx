import VideoHeader from "@/components/wedding/VideoHeader";
import AboutSection from "@/components/wedding/AboutSection";
import PerformanceHighlights from "@/components/wedding/PerformanceHighlights";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Music, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Weddings = () => {
  return (
    <div className="min-h-screen">
      <VideoHeader />
      <AboutSection />
      <PerformanceHighlights />

      {/* Services Section */}
      <div className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-primary text-center mb-16">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Memorial Services Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Music className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">
                Memorial Services
              </h3>
              <p className="text-text-muted leading-relaxed">
                Offering a selection of dignified and moving musical tributes for memorial 
                services. From timeless hymns to classical pieces, I provide heartfelt 
                performances that honor your loved ones with grace and reverence.
              </p>
            </div>

            {/* Celebration of Life Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">
                Celebration of Life
              </h3>
              <p className="text-text-muted leading-relaxed">
                Creating meaningful musical moments for celebration of life ceremonies. I 
                work closely with families to select pieces that celebrate and commemorate 
                their loved one's journey, bringing comfort and solace through carefully 
                chosen musical selections.
              </p>
            </div>

            {/* Religious Services Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <Star className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">
                Religious Services
              </h3>
              <p className="text-text-muted leading-relaxed">
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
      <div className="bg-primary/20 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-text-dark text-center mb-16">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            <Card className="bg-secondary shadow-lg">
              <CardContent className="p-8">
                <p className="text-text-muted italic mb-6 text-lg leading-relaxed">
                  "Olivia's voice brought profound comfort during our difficult time. Her rendition of 'Ave Maria' was absolutely beautiful."
                </p>
                <div>
                  <h3 className="font-semibold text-primary text-lg">The Thompson Family</h3>
                  <p className="text-text-muted">Memorial Service</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary shadow-lg">
              <CardContent className="p-8">
                <p className="text-text-muted italic mb-6 text-lg leading-relaxed">
                  "Her performance added such dignity and grace to my mother's service. We couldn't have asked for a more perfect tribute."
                </p>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Sarah Williams</h3>
                  <p className="text-text-muted">Celebration of Life</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary shadow-lg">
              <CardContent className="p-8">
                <p className="text-text-muted italic mb-6 text-lg leading-relaxed">
                  "The musical selections were perfectly chosen and performed with such sensitivity. Olivia helped make a difficult day more bearable."
                </p>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Robert & Mary Johnson</h3>
                  <p className="text-text-muted">Memorial Service</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Weddings;
