"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, BookOpen, GraduationCap, Globe } from "lucide-react";
import { toast } from "sonner";

export default function EmailBanner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    interestedProgram: "",
  });

  const programs = ["MBA", "BBA", "MCA", "BCA", "Nursing", "Certifications"];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStateChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      state: value,
    }));
  };

  const handleProgramChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedProgram: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Dynamically generate source based on interested program
      const source = `Home Online Inquiry - ${
        formData.interestedProgram || "General"
      }`;

      // Prepare form data for Web3Forms
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(
        "access_key",
        "c9a88293-f4a6-473a-9b6d-8b5aabf7d1a8"
      );
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("state", formData.state);
      formDataToSubmit.append("interestedProgram", formData.interestedProgram);
      formDataToSubmit.append("source", source);

      // Convert FormData to JSON
      const object = Object.fromEntries(formDataToSubmit);
      const json = JSON.stringify(object);

      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        // Success Toast
        toast.success("Request submitted successfully!", {
          description: "We will contact you shortly.",
          position: "top-right",
          duration: 3000,
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          state: "",
          interestedProgram: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Failed to submit request.", {
        description: "Please try again later.",
        position: "top-right",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:bg-gradient-to-r bg-gradient-to-t from-orange-500 via-black to-gray-900 py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Information */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Unlock Your Educational Potential
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Discover personalized learning paths, expert guidance, and
              transformative educational opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8 text-orange-300" />
                <span className="text-white">Flexible Learning Options</span>
              </div>
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-8 w-8 text-orange-300" />
                <span className="text-white">Expert-Led Courses</span>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-orange-300" />
                <span className="text-white">Global Recognition</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              className="bg-white/20 text-white placeholder-gray-100 border-none focus:ring-2 focus:ring-orange-500"
            />

            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="bg-white/20 text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-orange-500"
            />

            <Select value={formData.state} onValueChange={handleStateChange}>
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
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? "Submitting..." : "Get Free Counselling"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
