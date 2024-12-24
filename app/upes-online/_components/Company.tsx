"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const companyLogos = [
  "/accenture.jpg",
  "/adecco.jpg",
  "/amazon.jpg",
  "/hsbc.jpg",
  "/jp.jpg",
  "/kpmg.jpg",
  "/larsen.jpg",
  "/mc.jpg",
  "/nissan.jpg",
  "/wipro.jpg",
  "/A.png",
  "/B.png",
  "/C.png",
  "/D.png",
  "/E.png",
  "/F.png",
  "/G.png",
  "/H.png",
  "/I.png",
  "/J.png",
  "/K.png",
  "/L.png",
  "/M.png",
];

export const CompanyStripe: React.FC = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <Card className="lg:max-w-6xl w-full mx-auto bg-background/50 backdrop-blur-sm border-none">
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
                  duration: 30,
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
