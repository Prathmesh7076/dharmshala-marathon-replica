import readyToRace from "@/assets/ready-to-race-mountains.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import arrowDown from "@/assets/arrow-down.png";

const ReadyToRace = () => {
  const scrollToNext = () => {
    document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ready" className="relative h-[120vh] flex items-end justify-center overflow-hidden pb-32">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-8 w-full">
        <Link to="/register">
          <Button 
            size="lg"
            className="bg-white/80 hover:bg-white text-gray-800 font-bold text-xl px-12 py-8 h-auto rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Register Now
          </Button>
        </Link>
      </div>
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <img src={arrowDown} alt="Scroll down" className="w-16 h-16" />
      </button>
    </section>
  );
};

export default ReadyToRace;
