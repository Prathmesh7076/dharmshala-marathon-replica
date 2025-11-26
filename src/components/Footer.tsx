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
      
      {/* Footer Navigation */}
      <div className="absolute bottom-32 left-0 right-0">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 text-white">
            <a href="#about" className="hover:text-accent transition-colors">About Us</a>
            <a href="#race" className="hover:text-accent transition-colors">Race</a>
            <a href="#volunteer" className="hover:text-accent transition-colors">Volunteer</a>
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#refund" className="hover:text-accent transition-colors">Refund</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms</a>
            <a href="/contact" className="hover:text-accent transition-colors">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © Copy Rights - Dharamshala Marathon 2025 | Crafted by{" "}
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

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-12 right-12 z-50 flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Back to top"
      >
        <img src={backToTop} alt="Back to top" className="w-20 h-20" />
        <span className="text-white text-xs font-medium tracking-wider opacity-90 group-hover:opacity-100">BACK TO TOP</span>
      </button>
    </footer>
  );
};

export default Footer;
