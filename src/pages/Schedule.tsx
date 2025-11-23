import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  return (
    <main className="min-h-screen bg-[#2d2d44]">
      <Navigation />
      
      <div className="pt-32 pb-20">
        {/* Race Essentials */}
        <section className="py-16 px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <span className="bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-bold">
                  RACE ESSENTIALS
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Start time</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>What to bring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Race routes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Aid stations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Cut-off times</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Weather</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFD700]">✓</span>
                  <span>Results</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-6">RACE ESSENTIALS</h2>
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80" 
                alt="Race Essentials"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Safety & Medical Support */}
        <section className="py-16 px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">SAFETY & MEDICAL SUPPORT</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                alt="Medical Support"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="text-white">
                <div className="mb-6">
                  <span className="bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-bold">
                    SAFETY & MEDICAL
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Have a certified first aid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Provide quality aid and food stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Ensure emergency medical tech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Clear critical race briefing</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-300">
                  If a runner shows signs of distress, immediate support is provided.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bib Pickup / Expo */}
        <section className="py-16 px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">BIB PICKUP / EXPO</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="mb-6">
                  <span className="bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-bold">
                    BIB PICKUP
                  </span>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>What is it?</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Documents Required?</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Get ID</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Timing & Location</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Can a proxy pick up my BIB?</span>
                  </li>
                </ul>
                <p className="font-bold mb-2">Bib holds on race morning</p>
                <p className="text-sm text-gray-400 mb-4">—Dec 05 8AM - MARCH 28</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Bib - MARCH PASS</li>
                  <li>• BIB + Timing chip</li>
                  <li>• Events</li>
                  <li>• Official goodies</li>
                  <li>• Expo organization</li>
                  <li>• Reservation with QR</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80" 
                alt="Bib Pickup"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Race Day - What to Expect */}
        <section className="py-16 px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">RACE DAY - WHAT TO EXPECT</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <img 
                src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80" 
                alt="Race Day"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="text-white space-y-6">
                <div>
                  <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full text-xs font-bold">
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
                  <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full text-xs font-bold">
                    During Race
                  </span>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Stay on the Assigned route taking</li>
                    <li>• Use Aids Station efficiently</li>
                    <li>• Use the Hills Efficiently</li>
                  </ul>
                </div>

                <div>
                  <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full text-xs font-bold">
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
          </div>
        </section>

        {/* Travel & Stay */}
        <section className="py-16 px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">TRAVEL & STAY</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Nearest Airport: Gaggal (DHR) 20 km</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>2nd Nearest: Delhi (DEL) Airport: 500 kms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Major Cities:</span>
                  </li>
                  <li className="ml-6 space-y-1 text-sm">
                    <p>- Delhi</p>
                    <p>- Chandigarh</p>
                    <p>- Amritsar</p>
                    <p>- Pathankot</p>
                    <p>- Mandi/Kulu</p>
                  </li>
                </ul>
                <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold w-full mb-4">
                  Best Accomation Hotels for you to book
                </Button>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Medical facility</li>
                  <li>• Right of every transport</li>
                  <li>• Camping options</li>
                  <li>• Three camping operators</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" 
                alt="Travel & Stay"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Community & Sustainability */}
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-12">COMMUNITY & SUSTAINABILITY</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
                alt="Community"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="text-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>We're a small, tight-knit community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>More than a race, it's an experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Eco-friendly practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Supporting local culture and local businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
};

export default Schedule;
