import { ChevronDown } from "lucide-react";
import marathonMotion from "@/assets/marathon-motion.jpg";

const MarathonMotion = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img 
        src={marathonMotion}
        alt="The Marathon in Motion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-8">
        <p className="text-xl mb-4">Pick your perfect run and start your adventure.</p>
        <h2 className="text-6xl md:text-7xl font-black mb-8">THE MARATHON IN MOTION</h2>
        <ChevronDown className="w-12 h-12 mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default MarathonMotion;
