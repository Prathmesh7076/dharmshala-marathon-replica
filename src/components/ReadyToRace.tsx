import readyToRace from "@/assets/ready-to-race.jpg";

const ReadyToRace = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative z-10 text-center px-8">
        <h2 className="text-5xl md:text-7xl font-black text-[#5C4033] leading-tight">
          READY TO RACE<br />THE MOUNTAINS?
        </h2>
      </div>
    </section>
  );
};

export default ReadyToRace;
