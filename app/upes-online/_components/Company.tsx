"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const companyLogos = [
  "/company/accenture.jpg",
  "/company/adecco.jpg",
  "/company/amazon.jpg",
  "/company/hsbc.jpg",
  "/company/jp.jpg",
  "/company/kpmg.jpg",
  "/company/larsen.jpg",
  "/company/mc.jpg",
  "/company/nissan.jpg",
  "/company/wipro.jpg",
];

export const CompanyStripe: React.FC = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <Card className="max-w-6xl mx-auto bg-background/50 backdrop-blur-sm border-none">
      <CardContent className="py-8 overflow-hidden">
        <div className="flex items-center justify-center">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1 * (duplicatedLogos.length * 200)],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0  transition-all duration-300 ease-in-out"
              >
                <Image
                  src={logo}
                  alt={`Network Logo ${index}`}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyStripe;
