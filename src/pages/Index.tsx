import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutRace from "@/components/AboutRace";
import RaceDistances from "@/components/RaceDistances";
import RouteMap from "@/components/RouteMap";
import MarathonMotion from "@/components/MarathonMotion";
import SchedulePreview from "@/components/SchedulePreview";
import ReadyToRace from "@/components/ReadyToRace";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBar />
      <AboutRace />
      <RaceDistances />
      <RouteMap />
      <MarathonMotion />
      <SchedulePreview />
      <ReadyToRace />
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Index;
