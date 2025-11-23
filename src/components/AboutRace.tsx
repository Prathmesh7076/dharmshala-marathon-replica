import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-trail.jpg";
import raceImage from "@/assets/DM-01.png";
import arrowDown from "@/assets/arrow-down.png";

const AboutRace = () => {
  return (
    <section id="about" className="bg-dark-bg py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${aboutImage})` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={raceImage}
              alt="Trail running in Dharamshala mountains"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="text-white">
            <h2 className="text-6xl font-black mb-8 leading-tight">
              ABOUT THE RACE
            </h2>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              The Dharamshala Marathon is a high-altitude road/mountain hybrid event hosted by the Dharamshala District Administration and organised by <span className="font-bold">BigFoot Adventures India</span>.
            </p>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The course runs through the scenic valleys, ridges, pine forests and rural settlements around Dharamshala & McLeod Ganj.
            </p>

            <div className="flex gap-4">
              <Button 
                onClick={() => window.location.href = '/register'}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-6 text-lg rounded-full border-2 border-white/30"
              >
                Register Now
              </Button>
              <Button 
                onClick={() => window.location.href = '/register'}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-6 text-lg rounded-full border-2 border-white/30"
              >
                Join the Race
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <img src={arrowDown} alt="Scroll down" className="w-16 h-16" />
      </div>
    </section>
  );
};

export default AboutRace;
