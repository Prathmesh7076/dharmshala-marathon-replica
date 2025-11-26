import { Facebook, Instagram, Twitter } from "lucide-react";
import footerMountains from "@/assets/footer-mountains.png";
import backToTop from "@/assets/back-to-top.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative h-[100vh] overflow-hidden">
      <img 
        src={footerMountains}
        alt="Mountain Landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © Dharamshala Marathon 2025 | Crafted by{" "}
            <span className="text-accent font-bold">unScripters</span> in India
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform cursor-pointer"
        aria-label="Back to top"
      >
        <img src={backToTop} alt="Back to top" className="w-16 h-16" />
      </button>
    </footer>
  );
};

export default Footer;
