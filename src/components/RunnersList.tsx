import { Runner, RunnerPosition } from "@/pages/LiveTracking";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, TrendingUp } from "lucide-react";

interface RunnersListProps {
  runners: Runner[];
  positions: Map<string, RunnerPosition>;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const RunnersList = ({
  runners,
  positions,
  onCategoryChange,
  selectedCategory,
}: RunnersListProps) => {
  const distanceMap: Record<string, number> = {
    "3km": 3,
    "5km": 5,
    "10km": 10,
    "21km": 21.1,
    "42km": 42.195,
  };

  const calculateETA = (runner: Runner, position: RunnerPosition | undefined) => {
    if (!position || !position.speed || position.speed === 0) return "N/A";

    const totalDistance = distanceMap[runner.race_category] || 0;
    const distanceCovered = position.distance_covered || 0;
    const remainingDistance = totalDistance - distanceCovered;
    const etaMinutes = (remainingDistance / position.speed) * 60;

    if (etaMinutes <= 0) return "Finishing soon";

    const hours = Math.floor(etaMinutes / 60);
    const minutes = Math.round(etaMinutes % 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      started: "default",
      finished: "secondary",
      dnf: "destructive",
    };

    return (
      <Badge variant={variants[status] || "default"}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => onCategoryChange("all")}
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
            onClick={() => onCategoryChange(category)}
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

      <div className="grid gap-4">
        {runners.length === 0 ? (
          <Card className="p-8 bg-white/5 backdrop-blur-md border-white/10 text-center">
            <p className="text-white/70">No runners in this category</p>
          </Card>
        ) : (
          runners.map((runner) => {
            const position = positions.get(runner.id);
            const totalDistance = distanceMap[runner.race_category] || 0;
            const distanceCovered = position?.distance_covered || 0;
            const progress = (distanceCovered / totalDistance) * 100;

            return (
              <Card
                key={runner.id}
                className="p-6 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-accent text-accent-foreground font-black text-xl w-12 h-12 rounded-full flex items-center justify-center">
                        {runner.bib_number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {runner.name}
                        </h3>
                        <p className="text-white/70">
                          {runner.race_category.toUpperCase()}
                        </p>
                      </div>
                      {getStatusBadge(runner.status)}
                    </div>

                    {position && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {distanceCovered.toFixed(2)} km / {totalDistance} km
                          </span>
                        </div>

                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-white/70">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{position.speed?.toFixed(2) || "0"} km/h</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>ETA: {calculateETA(runner, position)}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {!position && (
                      <p className="text-white/50 text-sm">
                        Waiting for GPS data...
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RunnersList;
