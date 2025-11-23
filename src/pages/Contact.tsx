import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-center mb-8">CONTACT US</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <form className="space-y-6 bg-card p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-bold mb-2">
                Subject
              </label>
              <Input 
                id="subject" 
                placeholder="What is this regarding?" 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Your message..." 
                rows={6}
                className="w-full"
              />
            </div>
            
            <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold px-12 py-6 text-lg w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Contact;
