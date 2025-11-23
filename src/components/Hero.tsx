import heroImage from "@/assets/hero-runner.jpg";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-wider leading-tight">
          DHARAMSHALA<br />MARATHON 2025
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 font-medium max-w-3xl">
          A High-Altitude Mountain Road Race in the<br />Shadow of the Dhauladhars
        </p>
        <button className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-white font-bold px-16 py-5 text-xl rounded-full border border-white/30 transition-all">
          Be Part of the Adventure
        </button>
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

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
