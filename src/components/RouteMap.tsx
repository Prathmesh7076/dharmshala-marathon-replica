import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const RouteMap = () => {
  const handleDownloadPDF = async () => {
    try {
      toast.loading("Generating PDF...");
      
      // Get the map container
      const mapElement = document.getElementById('mapmyfitness_route');
      if (!mapElement) {
        toast.error("Map not found");
        return;
      }

      // Create canvas from the map section
      const canvas = await html2canvas(mapElement.parentElement as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Create PDF
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('dharamshala-marathon-2025-route.pdf');
      
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  const handleWhatsAppShare = () => {
    const routeUrl = "https://www.mapmyrun.com/routes/view/6654167483";
    const message = encodeURIComponent(
      `Check out the Dharamshala Marathon 2025 route! 🏃‍♂️🏔️\n\n${routeUrl}`
    );
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp...");
  };

  return (
    <section id="route" className="py-20 bg-background">
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
              
              <div className="bg-background/50 rounded-2xl overflow-hidden">
                <iframe 
                  id='mapmyfitness_route' 
                  src='https://www.mapmyrun.com/routes/view/embedded/6654167483?width=600&height=376&elevation=true&info=true&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=TERRAIN&show_marker_every=1&last_updated=2025-11-20T13:44:49+00:00' 
                  height='679px' 
                  width='100%' 
                  frameBorder='0'
                  className="w-full rounded-2xl"
                  title="Dharamshala Marathon 2025 Route Map"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-end">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={handleWhatsAppShare}
                >
                  <Share2 className="w-4 h-4" />
                  Share on WhatsApp
                </Button>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2"
                  onClick={handleDownloadPDF}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="bg-muted rounded-3xl p-8">
              <p className="text-muted-foreground mb-4">The elevation profile is included in the map view above. Switch to the Map tab to see the complete route with elevation data.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RouteMap;
