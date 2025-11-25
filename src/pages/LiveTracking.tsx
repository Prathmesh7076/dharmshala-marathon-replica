import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RaceTrackingMap from "@/components/RaceTrackingMap";
import RunnersList from "@/components/RunnersList";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export interface Runner {
  id: string;
  bib_number: string;
  name: string;
  race_category: string;
  start_time: string | null;
  finish_time: string | null;
  status: string;
}

export interface RunnerPosition {
  id: string;
  runner_id: string;
  latitude: number;
  longitude: number;
  altitude: number | null;
  speed: number | null;
  distance_covered: number;
  timestamp: string;
}

const LiveTracking = () => {
  const [runners, setRunners] = useState<Runner[]>([]);
  const [positions, setPositions] = useState<Map<string, RunnerPosition>>(new Map());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    // Fetch initial runners data
    const fetchRunners = async () => {
      const { data, error } = await supabase
        .from("runners")
        .select("*")
        .eq("status", "started")
        .order("bib_number");

      if (error) {
        console.error("Error fetching runners:", error);
        toast.error("Failed to load runners");
        return;
      }

      setRunners(data || []);
    };

    // Fetch latest positions for all runners
    const fetchPositions = async () => {
      const { data, error } = await supabase
        .from("runner_positions")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching positions:", error);
        return;
      }

      // Keep only the latest position for each runner
      const latestPositions = new Map<string, RunnerPosition>();
      data?.forEach((pos) => {
        if (!latestPositions.has(pos.runner_id)) {
          latestPositions.set(pos.runner_id, pos);
        }
      });

      setPositions(latestPositions);
    };

    fetchRunners();
    fetchPositions();

    // Set up realtime subscription for runner updates
    const runnersChannel = supabase
      .channel("runners-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "runners",
        },
        (payload) => {
          console.log("Runner update:", payload);
          
          if (payload.eventType === "INSERT") {
            setRunners((prev) => [...prev, payload.new as Runner]);
          } else if (payload.eventType === "UPDATE") {
            setRunners((prev) =>
              prev.map((r) => (r.id === payload.new.id ? (payload.new as Runner) : r))
            );
          } else if (payload.eventType === "DELETE") {
            setRunners((prev) => prev.filter((r) => r.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    // Set up realtime subscription for position updates
    const positionsChannel = supabase
      .channel("positions-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "runner_positions",
        },
        (payload) => {
          console.log("Position update:", payload);
          const newPosition = payload.new as RunnerPosition;
          
          setPositions((prev) => {
            const updated = new Map(prev);
            updated.set(newPosition.runner_id, newPosition);
            return updated;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(runnersChannel);
      supabase.removeChannel(positionsChannel);
    };
  }, []);

  const filteredRunners = selectedCategory === "all"
    ? runners
    : runners.filter((r) => r.race_category === selectedCategory);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              LIVE RACE TRACKING
            </h1>
            <p className="text-xl text-white/80">
              Follow runners in real-time as they conquer the Himalayas
            </p>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="map" className="text-lg font-bold">
                Map View
              </TabsTrigger>
              <TabsTrigger value="list" className="text-lg font-bold">
                Runners List
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-6">
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full font-bold transition-colors ${
                    selectedCategory === "all"
                      ? "bg-accent text-accent-foreground"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  All Runners
                </button>
                {["42km", "21km", "10km", "5km", "3km"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-bold transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>

              <RaceTrackingMap
                runners={filteredRunners}
                positions={positions}
              />
            </TabsContent>

            <TabsContent value="list">
              <RunnersList
                runners={filteredRunners}
                positions={positions}
                onCategoryChange={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveTracking;
