import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    raceCategory: "",
    emergencyContact: "",
    emergencyPhone: "",
    tshirtSize: "",
    medicalConditions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              RACE REGISTRATION
            </h1>
            <p className="text-xl text-white/80">
              Join us for the Dharamshala Marathon 2025
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="dateOfBirth" className="text-white">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="gender" className="text-white">Gender *</Label>
                  <Select onValueChange={(value) => handleChange("gender", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="raceCategory" className="text-white">Race Category *</Label>
                  <Select onValueChange={(value) => handleChange("raceCategory", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select race distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="42km">42.195 KM - Marathon</SelectItem>
                      <SelectItem value="21km">21.1 KM - Half Marathon</SelectItem>
                      <SelectItem value="10km">10 KM Race</SelectItem>
                      <SelectItem value="5km">5 KM - Fun Run</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="emergencyContact" className="text-white">Emergency Contact Name *</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleChange("emergencyContact", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="emergencyPhone" className="text-white">Emergency Contact Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleChange("emergencyPhone", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tshirtSize" className="text-white">T-Shirt Size *</Label>
                <Select onValueChange={(value) => handleChange("tshirtSize", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xs">XS</SelectItem>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                    <SelectItem value="xxl">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="medicalConditions" className="text-white">Medical Conditions (Optional)</Label>
                <Input
                  id="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={(e) => handleChange("medicalConditions", e.target.value)}
                  placeholder="Any medical conditions we should know about"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox id="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-white text-sm leading-relaxed">
                  I agree to the terms and conditions and acknowledge that I am physically fit to participate in this marathon event.
                </Label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-foreground font-bold py-6 text-lg rounded-full"
              >
                Complete Registration
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Register;
