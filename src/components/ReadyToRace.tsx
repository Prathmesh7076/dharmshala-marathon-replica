import readyToRace from "@/assets/ready-to-race-mountains.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const ReadyToRace = () => {
  return (
    <section className="relative h-[120vh] flex items-end justify-center overflow-hidden">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-8 pb-32 w-full">
        <Link to="/register">
          <Button 
            size="lg"
            className="bg-white/80 hover:bg-white text-gray-800 font-bold text-xl px-12 py-8 h-auto rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex flex-col items-center gap-3"
          >
            <span>Be Part of the Adventure</span>
            <ChevronDown className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyToRace;
