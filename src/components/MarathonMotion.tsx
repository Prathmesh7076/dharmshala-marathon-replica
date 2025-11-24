import { ChevronDown } from "lucide-react";
import marathonMotion from "@/assets/marathon-motion.jpg";

const MarathonMotion = () => {
  return (
    <section id="motion" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img 
        src={marathonMotion}
        alt="The Marathon in Motion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-8">
        {/* Image already contains text */}
      </div>
    </section>
  );
};

export default MarathonMotion;
