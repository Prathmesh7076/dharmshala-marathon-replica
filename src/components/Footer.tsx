import { Facebook, Instagram, Twitter } from "lucide-react";
import footerMountains from "@/assets/footer-mountains.png";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="h-[100vh] relative overflow-hidden">
        <img 
          src={footerMountains}
          alt="Mountain Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="bg-[#1a1a2e] text-white py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © Copy Rights - Dharamshala Marathon 2025 | Crafted by{" "}
            <span className="text-accent font-bold">unScripters</span> in India
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
