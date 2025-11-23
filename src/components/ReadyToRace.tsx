import readyToRace from "@/assets/ready-to-race.jpg";

const ReadyToRace = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img 
        src={readyToRace}
        alt="Ready to Race the Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      <div className="relative z-10 text-center px-8">
        {/* Image already contains text */}
      </div>
    </section>
  );
};

export default ReadyToRace;
