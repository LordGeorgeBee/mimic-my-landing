import { Mail, Phone, Instagram, Facebook, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5E6E0] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Section */}
        <div>
          <h3 className="font-playfair text-2xl text-[#403E43] mb-6">Contact</h3>
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Phone
            </a>
          </div>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="font-playfair text-2xl text-[#403E43] mb-6">Follow</h3>
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 5H9a4 4 0 0 0-4 4v4"/>
                <path d="M12 9v8"/>
                <path d="M9 13h6"/>
                <path d="M6 17v-4"/>
              </svg>
              TikTok
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              <Music className="w-5 h-5" />
              Spotify
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="font-playfair text-2xl text-[#403E43] mb-6">Navigation</h3>
          <div className="flex flex-col gap-4">
            <Link 
              to="/videos" 
              className="text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              Videos
            </Link>
            <Link 
              to="/services" 
              className="text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-[#403E43] hover:text-[#8B6F47] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-[#403E43]">
        <p>© 2025 Olivia Flemming Smith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;