"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, BookOpen, GraduationCap, Globe } from "lucide-react";

export default function EmailBanner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    interestedProgram: ""
  });

  const programs = [
    "MBA", 
    "BBA", 
    "MCA", 
    "BCA", 
    "Nursing", 
    "Certifications"
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStateChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      state: value
    }));
  };

  const handleProgramChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestedProgram: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="lg:bg-gradient-to-r bg-gradient-to-t from-orange-500 via-slate-800 to-gray-900 py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Information */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unlock Your Educational Potential
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Discover personalized learning paths, expert guidance, and transformative educational opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8 text-orange-300" />
                <span className="text-md">Comprehensive Course Selection</span>
              </div>
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-8 w-8 text-orange-300" />
                <span className="text-md">Expert Career Counseling</span>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-orange-300" />
                <span className="text-md">Global Learning Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                className="bg-white/20 text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="bg-white/20 text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-orange-500"
              />
              
              <Select 
                value={formData.state} 
                onValueChange={handleStateChange}
              >
                <SelectTrigger className="bg-white/20 text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-orange-500">
                  <SelectValue placeholder="Select Your State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select 
                value={formData.interestedProgram} 
                onValueChange={handleProgramChange}
              >
                <SelectTrigger className="bg-white/20 text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-orange-500">
                  <SelectValue placeholder="Interested Program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Get Free Counseling
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
