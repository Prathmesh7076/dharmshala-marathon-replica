import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Dharamshala Marathon Logo" className="w-20 h-20 object-contain" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-primary/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
          <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-accent' : 'text-white hover:text-accent'}`}>
            Home
          </Link>
          <a 
            href="/#about" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-white/80 font-medium hover:text-white transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="/#race" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('race')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-white/80 font-medium hover:text-white transition-colors cursor-pointer"
          >
            The Race
          </a>
          <Link to="/schedule" className={`font-medium transition-colors ${location.pathname === '/schedule' ? 'text-accent' : 'text-white/80 hover:text-white'}`}>
            Schedule
          </Link>
          <Link to="/live-tracking" className={`font-medium transition-colors ${location.pathname === '/live-tracking' ? 'text-accent' : 'text-white/80 hover:text-white'}`}>
            Live Tracking
          </Link>
          <a 
            href="/#faqs" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-white/80 font-medium hover:text-white transition-colors cursor-pointer"
          >
            FAQs
          </a>
          <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-accent' : 'text-white/80 hover:text-white'}`}>
            Contact Us
          </Link>
        </div>

        <Link to="/register">
          <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold px-8 py-6 text-lg rounded-full">
            Register Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
