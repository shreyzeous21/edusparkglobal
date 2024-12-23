"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Steps = () => {
  const steps = [
    {
      icon: (
        <motion.img
          src="/features_icon01.svg"
          alt="Explore"
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Explore Desired Course",
      description: "Explore a wide range of colleges.",
    },
    {
      icon: (
        <motion.img
          src="/features_icon02.svg"
          alt="Fill Details"
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Fill Basic Details",
      description: "Provide basic academic details.",
    },
    {
      icon: (
        <motion.img
          src="/features_icon03.svg"
          alt="Counselling"
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Get Free Counselling",
      description: "Totally free & unbiased guidance.",
    },
    {
      icon: (
        <motion.img
          src="/features_icon04.svg"
          alt="Get Enrolled"
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Get Enrolled",
      description: "Enroll in your desired course.",
    },
  ];

  return (
    <div className="flex h-auto justify-center py-8 items-center mx-auto  w-full bg-gradient-to-r from-slate-600 via-slate-700 to-gray-800">
      <div className="max-w-6xl px-4 w-full h-auto flex flex-col items-center gap-4">
        {/* Section Header */}
        <Button variant="outline" className="">
          How We Start Your Journey
        </Button>
        <h1 className="lg:text-5xl text-4xl font-bold text-white text-center">
          Simple Steps to Get Enrolled
        </h1>
        <p className="text-sm text-white text-center">
          Start your learning journey today!
        </p>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 w-full">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-slate-800 text-white shadow-lg rounded-lg"
            >
              <CardHeader className="flex justify-center items-center">
                {step.icon}
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center p-6">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
