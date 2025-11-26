import heroImage from "@/assets/hero-runner.jpg";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-8 pb-32 text-center">
        <p className="text-xl md:text-2xl text-white mb-8 font-medium max-w-3xl">
          Embrace The Spirit Of Dhauladhar
        </p>
        <Link 
          to="/register"
          className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-white font-bold px-16 py-5 text-xl rounded-full border border-white/30 transition-all inline-block"
        >
          Join us
        </Link>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>

      {/* Social Media Icons - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-3">
        <a 
          href="#facebook" 
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Facebook"
        >
          <Facebook size={16} className="text-white" />
        </a>
        <a 
          href="#twitter" 
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Twitter"
        >
          <Twitter size={16} className="text-white" />
        </a>
        <a 
          href="#instagram" 
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Instagram"
        >
          <Instagram size={16} className="text-white" />
        </a>
      </div>

    </section>
  );
};

export default Hero;
