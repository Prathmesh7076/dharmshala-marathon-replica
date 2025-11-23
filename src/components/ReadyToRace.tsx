import readyToRace from "@/assets/ready-to-race-mountains.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ReadyToRace = () => {
  return (
    <section className="relative h-[120vh] flex items-center justify-end overflow-hidden">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-8 pb-24 w-full">
        <Link to="/register">
          <Button 
            size="lg"
            className="bg-white/80 hover:bg-white text-gray-800 font-bold text-xl px-12 py-8 h-auto rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Be Part of the Adventure
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyToRace;
