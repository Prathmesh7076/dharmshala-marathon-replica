const SchedulePreview = () => {
  return (
    <section className="bg-[#2D2942] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Race Essentials */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              RACE ESSENTIALS
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">RACE ESSENTIALS</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Start time</li>
              <li>• What to bring</li>
              <li>• Race routes</li>
              <li>• Aid stations</li>
              <li>• Cut-off times</li>
              <li>• Weather</li>
              <li>• Results</li>
            </ul>
          </div>

          {/* Safety & Medical */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              SAFETY & MEDICAL
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">SAFETY & MEDICAL SUPPORT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Medical teams on course</li>
              <li>• First-aid booths at aid stations</li>
              <li>• Emergency contact numbers</li>
              <li>• Course marshal + Aid marshal</li>
            </ul>
          </div>

          {/* Bib Pickup */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              BIB PICKUP
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">BIB PICKUP / EXPO</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• What is it?</li>
              <li>• Documents Required?</li>
              <li>• Dates</li>
              <li>• Timing & Location</li>
              <li>• Can a proxy pick up my BIB?</li>
            </ul>
          </div>

          {/* Race Day */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              RACE DAY
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">RACE DAY - WHAT TO EXPECT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Arrive early</li>
              <li>• Mandatory bag drop-off facility</li>
              <li>• Bag collection</li>
              <li>• Post-finish Health check-up</li>
            </ul>
          </div>

          {/* Travel & Stay */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              TRAVEL & STAY
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">TRAVEL & STAY</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Nearest Airport: Gaggal (DHR) 20 km</li>
              <li>• 2nd Nearest: Delhi (DEL) Airport: 500 kms</li>
              <li>• Major Cities:</li>
              <li className="ml-4">- Delhi</li>
              <li className="ml-4">- Chandigarh</li>
              <li className="ml-4">- Amritsar</li>
              <li className="ml-4">- Pathankot</li>
            </ul>
          </div>

          {/* Community & Sustainability */}
          <div className="bg-[#3D3952] rounded-lg p-6 border border-[#4D4962]">
            <div className="inline-block bg-[#E8FF00] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              COMMUNITY
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">COMMUNITY & SUSTAINABILITY</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• We're a small, tight-knit community</li>
              <li>• More than a race, it's an experience</li>
              <li>• Eco-friendly practices</li>
              <li>• Supporting local culture and local businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;
