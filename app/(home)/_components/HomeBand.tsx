"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const HomeBand: React.FC = () => {
  const coursesTarget = 44;
  const alumniTarget = 2499;

  const [coursesCount, setCoursesCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);

  useEffect(() => {
    const coursesInterval = setInterval(() => {
      setCoursesCount((prev) => {
        if (prev < coursesTarget) {
          return prev + 1;
        } else {
          clearInterval(coursesInterval);
          return prev;
        }
      });
    }, 50);

    const alumniInterval = setInterval(() => {
      setAlumniCount((prev) => {
        if (prev < alumniTarget) {
          return prev + 10;
        } else {
          clearInterval(alumniInterval);
          return prev;
        }
      });
    }, 10);

    return () => {
      clearInterval(coursesInterval);
      clearInterval(alumniInterval);
    };
  }, [coursesTarget, alumniTarget]);

  return (
    <div className="flex justify-center items-center mx-auto w-full">
      <div className="flex lg:flex-row gap-10 flex-col max-w-6xl w-full bg-slate-800/100 items-center h-[50vh] rounded-lg mx-auto justify-center px-10">
        <h1 className="lg:text-4xl text-3xl lg:w-1/3 text-white font-bold">
          Thousands of courses authored by industry experts
        </h1>
        <div className="flex flex-row gap-6 justify-center text-center items-center">
          <motion.span
            className="text-3xl font-bold text-[#ff900d]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {coursesCount} + <br />
            Courses
          </motion.span>
          <Separator orientation="horizontal" className="items-center w-10" />
          <motion.span
            className="text-3xl font-bold text-[#ff900d]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {alumniCount}+ <br />
            Alumni
          </motion.span>
        </div>
        <div className="bg-[url('/HomeBanner.png')] hidden lg:flex h-full w-1/3 bg-contain bg-no-repeat bg-right"></div>
      </div>
    </div>
  );
};

export default HomeBand;
