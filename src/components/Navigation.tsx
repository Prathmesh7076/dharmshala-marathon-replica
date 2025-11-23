import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-primary">LOGO</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-primary/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
          <a href="#home" className="text-white font-medium hover:text-accent transition-colors">
            Home
          </a>
          <a href="#about" className="text-white/80 font-medium hover:text-white transition-colors">
            About
          </a>
          <a href="#race" className="text-white/80 font-medium hover:text-white transition-colors">
            The Race
          </a>
          <a href="#schedule" className="text-white/80 font-medium hover:text-white transition-colors">
            Schedule
          </a>
          <a href="#faqs" className="text-white/80 font-medium hover:text-white transition-colors">
            FAQs
          </a>
          <a href="#contact" className="text-white/80 font-medium hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold px-8 py-6 text-lg rounded-full">
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
