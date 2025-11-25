import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              RACE REGISTRATION
            </h1>
            <p className="text-xl text-white/80">
              Join us for the Dharamshala Marathon 2025
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 md:p-8 border border-white/10">
            <iframe
              src="https://konfhub.com/widget/dharamshala-marathon-2025?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=65692%2C65693%2C65694%2C65695%2C65696&ticketId=65692%7C1%3B65693%7C1%3B65694%7C1%3B65695%7C1%3B65696%7C1"
              width="100%"
              height="900"
              frameBorder="0"
              title="Dharamshala Marathon 2025 Registration"
              className="w-full rounded-2xl"
              style={{ minHeight: '900px' }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Register;
