"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const networkLogos = [
  "/a.png",
  "/b.png",
  "/c.png",
  "/d.png",
  "/e.png",
  "/f.png",
  "/g.png",
  "/h.png",
  "/i.png",
  "/j.png",
  "/k.png",
  "/l.png",
  "/m.png",
];

export const NetworkStripe: React.FC = () => {
  const duplicatedLogos = [...networkLogos, ...networkLogos];

  return (
    <Card className="lg:max-w-6xl w-full mx-auto bg-background/50 backdrop-blur-sm border-none">
      <CardContent className="py-8 overflow-hidden">
        <div className="flex items-center justify-center">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1 * (networkLogos.length * 200)],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 13,
                  ease: "linear",
                },
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 hover:grayscale-0 transition-all duration-300 ease-in-out"
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

export default NetworkStripe;
