import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import marathon42 from "@/assets/marathon-42km.jpg";
import halfMarathon from "@/assets/half-marathon-21km.jpg";
import race10km from "@/assets/race-10km.jpg";
import raceCard from "@/assets/race-card-10km.jpg";

const RaceDistances = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const races = [
    {
      distance: "42.195 KM",
      title: "Marathon - 6hrs",
      image: marathon42,
      details: {
        date: "March 30, 2025",
        startLocation: "Dharamshala Stadium",
        finishLocation: "McLeod Ganj Square",
        baseAltitude: "1,457m",
        maxElevation: "2,827m",
        timing: "6:00 AM Start",
      }
    },
    {
      distance: "21.1 KM",
      title: "Half Marathon - 3hrs",
      image: halfMarathon,
      details: {
        date: "March 30, 2025",
        startLocation: "Dharamshala Stadium",
        finishLocation: "Dharamkot",
        baseAltitude: "1,457m",
        maxElevation: "2,100m",
        timing: "6:30 AM Start",
      }
    },
    {
      distance: "10 KM",
      title: "1 & Half an Hour",
      image: raceCard,
      details: {
        date: "March 30, 2025",
        startLocation: "Dharamshala Stadium",
        finishLocation: "Bhagsu Waterfall",
        baseAltitude: "1,457m",
        maxElevation: "1,800m",
        timing: "7:00 AM Start",
      }
    },
    {
      distance: "5 KM",
      title: "Fun Run - 45 mins",
      image: race10km,
      details: {
        date: "March 30, 2025",
        startLocation: "McLeod Ganj",
        finishLocation: "Dharamshala Cricket Stadium",
        baseAltitude: "1,457m",
        maxElevation: "1,650m",
        timing: "7:30 AM Start",
      }
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % races.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + races.length) % races.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-4">
          <p className="text-accent-red font-bold text-lg mb-4 uppercase tracking-wider">
            Race Distance
          </p>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            A CHALLENGE FOR EVERY SPIRIT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginners to seasoned athletes, our race distances fit all levels.<br />
            Pick your perfect run and start your adventure.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="flex items-center justify-center gap-8">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous race"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-6 overflow-hidden max-w-5xl">
              {races.map((race, index) => (
                <Card 
                  key={index}
                  className={`relative flex-shrink-0 w-96 h-[500px] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-40'
                  }`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img 
                    src={race.image}
                    alt={race.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {hoveredCard === index && index === currentIndex ? (
                    <div className="absolute inset-0 bg-black/85 p-8 text-white flex flex-col justify-between">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredCard(null);
                        }}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-accent" />
                          <p className="text-3xl font-black">{race.distance}</p>
                        </div>
                        <p className="text-2xl font-bold mb-8">{race.title}</p>
                        
                        <div className="space-y-3 text-sm">
                          <p><span className="font-bold">Date:</span> {race.details.date}</p>
                          <p><span className="font-bold">Start Location:</span> {race.details.startLocation}</p>
                          <p><span className="font-bold">Finish Location:</span> {race.details.finishLocation}</p>
                          <p><span className="font-bold">Base Altitude:</span> {race.details.baseAltitude}</p>
                          <p><span className="font-bold">Max Elevation Gain (Marathon):</span> {race.details.maxElevation}</p>
                          <p><span className="font-bold">Timing:</span> {race.details.timing}</p>
                        </div>
                      </div>
                      
                      <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold py-6 rounded-full">
                        Register Now
                      </Button>
                    </div>
                  ) : (
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-5xl font-black mb-2">{race.distance}</p>
                      <p className="text-2xl font-bold">{race.title}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next race"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {races.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex ? 'w-24 bg-stats-bg' : 'w-8 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceDistances;
