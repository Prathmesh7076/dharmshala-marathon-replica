import raceEssentials from "@/assets/schedule-race-essentials.jpg";
import medicalSupport from "@/assets/schedule-medical-support.jpg";
import bibPickup from "@/assets/schedule-bib-pickup.jpg";
import raceDay from "@/assets/schedule-race-day.jpg";
import travelStay from "@/assets/schedule-travel-stay.jpg";
import community from "@/assets/schedule-community.jpg";

const SchedulePreview = () => {
  return (
    <section id="schedule" className="bg-[#2D2942] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Race Essentials */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              RACE ESSENTIALS
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">RACE ESSENTIALS</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Start time</li>
              <li>• What to bring</li>
              <li>• Race routes</li>
              <li>• Aid stations</li>
              <li>• Cut-off times</li>
              <li>• Weather</li>
              <li>• Results</li>
            </ul>
            <div className="pt-4">
              <div className="inline-block bg-[#E8FF00] text-black px-4 py-2 rounded text-sm font-bold">
                Proper training prevents poor performance.
              </div>
            </div>
            <p className="text-gray-300 text-sm pt-2">
              Headlights and tail-lights are MANDATORY.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={raceEssentials} alt="Runner hydrating during race" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Safety & Medical Support */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden order-2 md:order-1">
            <img src={medicalSupport} alt="Medical support team at race" className="w-full h-[400px] object-cover" />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              SAFETY & MEDICAL SUPPORT
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">SAFETY & MEDICAL SUPPORT</h3>
            <p className="text-gray-300">
              All race start, finish area, and along the route, a full-time medical personnel + spotters.
            </p>
            <div className="space-y-2">
              <div className="inline-block bg-[#E8FF00] text-black px-3 py-1 rounded text-xs font-bold mr-2">
                Emergency medical care
              </div>
              <ul className="space-y-2 text-gray-300 pt-2">
                <li>• Physio booths (one dedicated spot)</li>
                <li>• Course marshal + Aid marshal</li>
              </ul>
            </div>
            <p className="text-gray-300 text-sm pt-2">
              If a runner shows signs of distress, the spotters will guide them to the nearest aid station or
              medical tent, and if necessary, accompany them to the hospital.
            </p>
          </div>
        </div>

        {/* Bib Pickup / Expo */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              BIB PICKUP / EXPO
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">BIB PICKUP / EXPO</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• What is it?</li>
              <li>• Documents Required?</li>
              <li>• Dates</li>
              <li>• Timing & Location</li>
              <li>• Can a proxy pick up my BIB?</li>
            </ul>
            <div className="bg-[#3D3952] rounded-lg p-4 border border-[#4D4962]">
              <p className="text-gray-300 text-sm">
                No bib, no race morning.
              </p>
              <p className="text-[#E8FF00] font-bold mt-2">
                <span className="text-white">Dec 24th, 2025</span> | 01:00 PM - 09:00 PM
              </p>
            </div>
            <p className="text-gray-300 text-sm">
              The Bib Collection is your chance to verify your bib, race kit, and meet fellow runners.
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• ID Proof</li>
              <li>• Passport Size (1x)</li>
              <li>• Proxy</li>
              <li>• Registration email</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={bibPickup} alt="Bib pickup and registration" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Race Day - What to Expect */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden order-2 md:order-1">
            <img src={raceDay} alt="Race day morning at start area" className="w-full h-[400px] object-cover" />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              RACE DAY - WHAT TO EXPECT
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">RACE DAY - WHAT TO EXPECT</h3>
            <div className="space-y-3">
              <div className="inline-block bg-[#E8FF00] text-black px-3 py-1 rounded text-xs font-bold">
                BEFORE THE RACE
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Arrive at the start line well in advance</li>
                <li>• Bag check-in</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="inline-block bg-[#E8FF00] text-black px-3 py-1 rounded text-xs font-bold">
                POST FINISH
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Health check-up</li>
                <li>• Get checked from Health Professionals for free</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="inline-block bg-[#E8FF00] text-black px-3 py-1 rounded text-xs font-bold">
                BAG DROP-OFF
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Drop your:</li>
                <li className="ml-4">- Personal items</li>
                <li className="ml-4">- Seasonal gears</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Travel & Stay */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              TRAVEL & STAY
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">TRAVEL & STAY</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Nearest Airport: Gaggal (DHR) 20 km</li>
              <li>• 2nd Nearest: Delhi (DEL) Airport: 500 kms</li>
              <li>• Major Cities:</li>
              <li className="ml-6">- Delhi</li>
              <li className="ml-6">- Chandigarh</li>
              <li className="ml-6">- Amritsar</li>
              <li className="ml-6">- Pathankot</li>
              <li className="ml-6">- Sundernagar etc</li>
            </ul>
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-2 rounded text-sm font-bold">
              Discounted accommodation for runners on request.
            </div>
            <p className="text-gray-300 text-sm">
              Altitude of &lt; 1.5 km<br />
              Avg temperatures of 12-14°C
            </p>
            <p className="text-gray-300 text-sm">
              Pre-acclimatization is not required.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={travelStay} alt="Luxury mountain hotel accommodation" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Community & Sustainability */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden order-2 md:order-1">
            <img src={community} alt="Trail runners in Himalayan mountains" className="w-full h-[400px] object-cover" />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-xs font-bold">
              COMMUNITY & SUSTAINABILITY
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black">COMMUNITY & SUSTAINABILITY</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• We're a small, tight-knit community</li>
              <li>• More than a race, it's an experience</li>
              <li>• Eco-friendly practices</li>
              <li>• Leave no trace</li>
              <li>• Supporting local culture and local businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;