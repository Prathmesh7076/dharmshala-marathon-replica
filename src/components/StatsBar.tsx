const StatsBar = () => {
  const stats = [
    { label: "DISTANCE", value: "200 KM" },
    { label: "ELEVATION GAIN", value: "8800 M+" },
    { label: "START DATE", value: "25TH DEC 2025" },
    { label: "START LOCATION", value: "DHARAMSHALA" },
    { label: "RACE TIME", value: "46 HOURS 45 MINUTES" },
  ];

  return (
    <section id="stats" className="bg-stats-bg py-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-white/70 text-xs font-semibold mb-1 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-white text-xl md:text-2xl font-black">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
