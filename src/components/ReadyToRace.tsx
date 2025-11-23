import readyToRace from "@/assets/ready-to-race-mountains.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import arrowDown from "@/assets/arrow-down.png";

const ReadyToRace = () => {
  return (
    <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full flex items-center h-full">
        <Link to="/register">
          <Button 
            size="lg"
            className="bg-white/90 hover:bg-white text-gray-800 font-bold text-lg md:text-xl px-10 py-6 md:px-12 md:py-8 h-auto rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex flex-col items-center gap-3"
          >
            <span>Be Part of the Adventure</span>
            <ChevronDown className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <img src={arrowDown} alt="Scroll down" className="w-16 h-16" />
      </div>
    </section>
  );
};

export default ReadyToRace;
