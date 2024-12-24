"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim()) {
      alert("Please enter your name");
      return false;
    }
    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!message.trim()) {
      alert("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset previous status
    setSubmitStatus("idle");

    // Validate form
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `Enrollment Inquiry from EduSpark Global: Contact Us`,
          access_key: "c9a88293-f4a6-473a-9b6d-8b5aabf7d1a8",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center mx-auto items-center px-4">
      <div className="flex justify-between lg:flex-row flex-col gap-4 h-full items-center max-w-6xl w-full mx-auto">
        <div className="lg:w-1/2 h-auto flex flex-col gap-2 ">
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg flex items-center font-semibold">
                <MapPin />
                Address
              </h4>
              <Separator />
              <p className="text-sm ml-2 text-gray-600">
                <strong>Banglore:</strong> Guru Krupa, No 1, 6th Cross, Civil
                Aviation Road, Konena Agrahara, HAL Post Bangalore, Karnataka
                560017
                <br />
                <strong>Noida:</strong> 338, Tower C, Bhutani Cyber Park, Sec
                62, Noida, U.P 201301
              </p>
            </div>
          </Card>
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md flex-row">
            <div className="flex flex-col w-full gap-2">
              <h4 className="text-lg flex gap-1 items-center font-semibold">
                <PhoneCall /> Phone
              </h4>
              <Separator />
              <Link
                href={"tel:+918073719330"}
                className="text-sm ml-2 transition duration-300 hover:text-orange-500 text-gray-600"
              >
                +91-8073719330
              </Link>
            </div>
          </Card>
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md flex-row">
            <div className="flex flex-col w-full gap-2">
              <h4 className="text-lg flex gap-1 items-center font-semibold">
                {" "}
                <Mail />
                Email
              </h4>
              <Separator />
              <Link
                href={"mailto:info@edusparkglobal.com"}
                className="text-sm ml-2 transition duration-300 hover:text-orange-500 text-gray-600"
              >
                info@edusparkglobal.com
              </Link>
            </div>
          </Card>
        </div>
        <div className="w-full flex flex-col h-auto p-6 bg-slate-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Send Us Message</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {submitStatus === "success" && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                Your message has been sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                Failed to send message. Please try again.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md"
                required
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md"
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder="Comment"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md w-fit"
            >
              {isLoading ? "Sending..." : "Submit Now →"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
