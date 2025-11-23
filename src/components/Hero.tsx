import heroImage from "@/assets/hero-runner.jpg";
import socialsImage from "@/assets/socials-hero.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-blue-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-wider">
          DHARAMSHALA<br />MARATHON 2025
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-medium">
          A High-Altitude Mountain Road Race in the<br />Shadow of the Dhauladhars
        </p>
        <Link to="/register">
          <Button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-12 py-6 text-lg rounded-full border border-white/30 transition-all">
            Be Part of the Adventure
          </Button>
        </Link>
      </div>

      {/* Social Media Icons - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10">
        <img src={socialsImage} alt="Social Media" className="w-12 h-auto opacity-80 hover:opacity-100 transition-opacity" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
