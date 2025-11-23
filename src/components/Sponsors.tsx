const Sponsors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex items-center gap-8 md:gap-12">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xs font-bold">BFAI Logo</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xs font-bold">Partner Logo</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xs font-bold">Dharamshala Logo</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black mb-6">SPONSORS</h2>
            <p className="text-lg text-muted-foreground">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
