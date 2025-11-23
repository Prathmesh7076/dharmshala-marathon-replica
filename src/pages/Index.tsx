import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutRace from "@/components/AboutRace";
import RaceDistances from "@/components/RaceDistances";
import RouteMap from "@/components/RouteMap";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBar />
      <AboutRace />
      <RaceDistances />
      <RouteMap />
    </main>
  );
};

export default Index;
