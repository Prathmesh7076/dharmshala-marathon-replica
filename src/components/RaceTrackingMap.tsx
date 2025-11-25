import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Runner, RunnerPosition } from "@/pages/LiveTracking";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface RaceTrackingMapProps {
  runners: Runner[];
  positions: Map<string, RunnerPosition>;
}

const RaceTrackingMap = ({ runners, positions }: RaceTrackingMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<Map<string, mapboxgl.Marker>>(new Map());
  const [mapboxToken, setMapboxToken] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [76.3192, 32.2190], // Dharamshala coordinates
        zoom: 12,
        pitch: 45,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        "top-right"
      );

      map.current.on("load", () => {
        toast.success("Map loaded successfully!");
      });

      setIsTokenSet(true);
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to initialize map. Please check your token.");
    }
  };

  useEffect(() => {
    if (!map.current || !isTokenSet) return;

    // Clear existing markers
    markers.current.forEach((marker) => marker.remove());
    markers.current.clear();

    // Add markers for runners with positions
    runners.forEach((runner) => {
      const position = positions.get(runner.id);
      if (!position) return;

      // Create custom marker element
      const el = document.createElement("div");
      el.className = "runner-marker";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      
      // Color based on race category
      const categoryColors: Record<string, string> = {
        "42km": "#FF0000",
        "21km": "#FF6B00",
        "10km": "#FFD700",
        "5km": "#00FF00",
        "3km": "#0080FF",
      };
      
      el.style.backgroundColor = categoryColors[runner.race_category] || "#FFFFFF";
      el.style.border = "3px solid white";
      el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";
      
      // Add bib number
      el.innerHTML = `<div style="color: white; font-weight: bold; font-size: 10px; display: flex; align-items: center; justify-content: center; height: 100%;">${runner.bib_number}</div>`;

      // Calculate estimated finish time
      const distanceMap: Record<string, number> = {
        "3km": 3,
        "5km": 5,
        "10km": 10,
        "21km": 21.1,
        "42km": 42.195,
      };
      
      const totalDistance = distanceMap[runner.race_category] || 0;
      const distanceCovered = position.distance_covered || 0;
      const remainingDistance = totalDistance - distanceCovered;
      const avgSpeed = position.speed || 0;
      const etaMinutes = avgSpeed > 0 ? (remainingDistance / avgSpeed) * 60 : 0;

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="color: black; font-family: system-ui;">
          <h3 style="font-weight: bold; margin-bottom: 8px;">${runner.name}</h3>
          <p style="margin: 4px 0;"><strong>Bib:</strong> ${runner.bib_number}</p>
          <p style="margin: 4px 0;"><strong>Category:</strong> ${runner.race_category.toUpperCase()}</p>
          <p style="margin: 4px 0;"><strong>Distance:</strong> ${distanceCovered.toFixed(2)} km / ${totalDistance} km</p>
          <p style="margin: 4px 0;"><strong>Speed:</strong> ${avgSpeed.toFixed(2)} km/h</p>
          ${etaMinutes > 0 ? `<p style="margin: 4px 0;"><strong>ETA:</strong> ${Math.round(etaMinutes)} min</p>` : ""}
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([position.longitude, position.latitude])
        .setPopup(popup)
        .addTo(map.current!);

      markers.current.set(runner.id, marker);
    });

    // Fit bounds to show all runners
    if (positions.size > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      positions.forEach((pos) => {
        bounds.extend([pos.longitude, pos.latitude]);
      });
      map.current?.fitBounds(bounds, { padding: 50 });
    }

    return () => {
      markers.current.forEach((marker) => marker.remove());
      markers.current.clear();
    };
  }, [runners, positions, isTokenSet]);

  return (
    <div className="space-y-4">
      {!isTokenSet && (
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <Label htmlFor="mapbox-token" className="text-white mb-2 block">
            Enter your Mapbox Public Token
          </Label>
          <p className="text-sm text-white/70 mb-4">
            Get your token from{" "}
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="flex gap-3">
            <Input
              id="mapbox-token"
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1..."
              className="flex-1 bg-white/10 border-white/20 text-white"
            />
            <Button
              onClick={initializeMap}
              disabled={!mapboxToken}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              Load Map
            </Button>
          </div>
        </div>
      )}

      <div
        ref={mapContainer}
        className="w-full h-[600px] rounded-3xl overflow-hidden border border-white/10"
        style={{ display: isTokenSet ? "block" : "none" }}
      />
      
      {!isTokenSet && (
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 flex items-center justify-center">
          <p className="text-white/70 text-center">
            Enter your Mapbox token above to view the live race map
          </p>
        </div>
      )}

      {isTokenSet && runners.length === 0 && (
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center">
          <p className="text-white/70">No active runners to display</p>
        </div>
      )}
    </div>
  );
};

export default RaceTrackingMap;
