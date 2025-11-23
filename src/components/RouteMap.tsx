import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";

const RouteMap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-accent-red font-bold text-lg mb-4 uppercase tracking-wider">
            Race Course Maps & Profiles
          </p>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            THE ROUTE TO GLORY
          </h2>
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="map" className="text-lg font-bold">Map</TabsTrigger>
            <TabsTrigger value="profile" className="text-lg font-bold">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="space-y-8">
            <div className="bg-muted rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-black mb-4">DHARAMSHALA MARATHON 2025</h3>
                <div className="flex flex-wrap gap-8 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Distance</p>
                    <p className="font-bold text-lg">20.84 km</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Elevation Gain</p>
                    <p className="font-bold text-lg">491 m</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Elevation Loss</p>
                    <p className="font-bold text-lg">496 m</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Est. Moving Time</p>
                    <p className="font-bold text-lg">2:18:51</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl h-96 flex items-center justify-center text-muted-foreground">
                <p className="text-xl">Interactive map placeholder - integrate with Mapbox or similar</p>
              </div>
              
              <div className="mt-6 bg-background/50 rounded-2xl h-48 flex items-center justify-center text-muted-foreground">
                <p className="text-lg">Elevation profile chart placeholder</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="outline" className="font-bold">42 KM</Button>
                <Button className="bg-primary text-primary-foreground font-bold">21 KM</Button>
                <Button variant="outline" className="font-bold">10 KM</Button>
                <Button variant="outline" className="font-bold">5 KM</Button>
                <Button variant="outline" className="font-bold">3 KM</Button>
                
                <div className="flex-1" />
                
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="bg-muted rounded-3xl p-8 h-96 flex items-center justify-center">
              <p className="text-xl text-muted-foreground">Detailed elevation profile view</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RouteMap;
