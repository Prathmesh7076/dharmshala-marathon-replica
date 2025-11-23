import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  return (
    <main className="min-h-screen bg-[#2d2d44]">
      <Navigation />
      
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-white text-center mb-16">RACE SCHEDULE</h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-white">
            {/* Race Essentials */}
            <div>
              <div className="mb-8">
                <span className="bg-accent text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  DAY - MARCH 29
                </span>
              </div>
              <h2 className="text-3xl font-black mb-6">RACE ESSENTIALS</h2>
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80" 
                alt="Race Essentials"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-2 text-sm">
                <li>• Headlamp</li>
                <li>• Hydration pack</li>
                <li>• Trail shoes</li>
                <li>• Emergency kit</li>
                <li>• GPS & tracker</li>
                <li>• Hat & sunscreen</li>
                <li>• Backup batteries</li>
              </ul>
            </div>

            {/* Safety & Medical Support */}
            <div>
              <div className="mb-8">
                <span className="bg-accent text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  DAY - MARCH 29
                </span>
              </div>
              <h2 className="text-3xl font-black mb-6">SAFETY & MEDICAL SUPPORT</h2>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                alt="Medical Support"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Have a certified first aid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Provide quality aid and food stations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Ensure emergency medical tech</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Clear critical race briefing</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-300">
                If a runner shows signs of distress, immediate support is provided.
              </p>
            </div>

            {/* Bib Pickup / Expo */}
            <div>
              <div className="mb-8">
                <span className="bg-accent text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  DAY - MARCH 28
                </span>
              </div>
              <h2 className="text-3xl font-black mb-6">BIB PICKUP / EXPO</h2>
              <img 
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80" 
                alt="Bib Pickup"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-2 text-sm mb-6">
                <li>• Venue:</li>
                <li>• Documents required:</li>
                <li>• Get ID</li>
                <li>• Parking & confirmation</li>
                <li>• Sponsor gear & race kits/goods</li>
              </ul>
              <p className="font-bold mb-2">Bib holds on race morning</p>
              <p className="text-sm text-gray-300 mb-2">—Dec 05 8AM - MARCH 28</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Bib - MARCH PASS</li>
                <li>• BIB + Timing chip</li>
                <li>• Events</li>
                <li>• Official goodies</li>
                <li>• Expo organization</li>
                <li>• Reservation with QR</li>
              </ul>
            </div>

            {/* Race Day - What to Expect */}
            <div>
              <div className="mb-8">
                <span className="bg-accent text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  DAY - MARCH 30
                </span>
              </div>
              <h2 className="text-3xl font-black mb-6">RACE DAY - WHAT TO EXPECT</h2>
              <img 
                src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80" 
                alt="Race Day"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-6">
                <div>
                  <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Before Start
                  </span>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Set your goal and enjoy</li>
                    <li>• Reach at the pre-starting time</li>
                    <li>• Race Hearing</li>
                    <li>• To the Start Shooting point</li>
                  </ul>
                </div>

                <div>
                  <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                    During Race
                  </span>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Stay on the Assigned route taking</li>
                    <li>• Use Aids Station efficiently</li>
                  </ul>
                </div>

                <div>
                  <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                    After Race
                  </span>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Hydration</li>
                    <li>• Chat the Race with others</li>
                    <li>• Revisit kits</li>
                    <li>• Release party</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel & Stay */}
            <div>
              <h2 className="text-3xl font-black mb-6">TRAVEL & STAY</h2>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" 
                alt="Travel & Stay"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Nearest Airport: Kangra (10-70 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Bus or Private Line (1.5hrs) airport - karwahia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Hotel Options:</span>
                </li>
                <li className="ml-6 space-y-1 text-sm">
                  <p>- Cafes</p>
                  <p>- Guest Houses</p>
                  <p>- Homestays</p>
                  <p>- Luxe properties</p>
                  <p>- Mountain inns</p>
                </li>
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold w-full">
                Best Ac: Book Your Accomation Here
              </Button>
              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                <li>• Medical facility</li>
                <li>• Right of every transport</li>
                <li>• Camping options</li>
              </ul>
            </div>

            {/* Community & Sustainability */}
            <div>
              <h2 className="text-3xl font-black mb-6">COMMUNITY & SUSTAINABILITY</h2>
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
                alt="Community"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Use bi-made eco-gear solely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Mountain work or by trail is required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Eco-friendly camping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Work with local NGOs for trail care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Supporting organized low-end local products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Schedule;
