import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import marathon42 from "@/assets/marathon-42km.jpg";
import halfMarathon from "@/assets/half-marathon-21km.jpg";
import race10km from "@/assets/race-10km.jpg";

const RaceDistances = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const races = [
    {
      distance: "42.195 KM",
      title: "Marathon - 6hrs",
      image: marathon42,
    },
    {
      distance: "21.1 KM",
      title: "Half Marathon - 3hrs",
      image: halfMarathon,
    },
    {
      distance: "10 KM",
      title: "1 & Half an Hour",
      image: race10km,
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
                  className={`relative flex-shrink-0 w-96 h-[500px] rounded-3xl overflow-hidden transition-all duration-500 ${
                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-40'
                  }`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <img 
                    src={race.image}
                    alt={race.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-5xl font-black mb-2">{race.distance}</p>
                    <p className="text-2xl font-bold">{race.title}</p>
                  </div>
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
