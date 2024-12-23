"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Home, IndianRupee, MapPin, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type DetailType = {
  title: string;
  description: string;
};

type CollegeType = {
  name: string;
  established: string;
  location: string;
  image: string;
  link: string;
  details: DetailType[];
};

const getIcon = (title: string) => {
  switch (title) {
    case "Course Offered":
      return <Book className="text-orange-600 h-4 w-4" />;
    case "Accreditation":
      return <Home className="text-orange-600 h-4 w-4" />;
    case "Ranking":
      return <Star className="text-orange-600 h-4 w-4" />;
    case "Fee Starting":
      return <IndianRupee className="text-orange-600 h-4 w-4" />;
    default:
      return null;
  }
};

const HomeCollage = () => {
  const [colleges, setColleges] = useState<CollegeType[]>([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch("/colleges.json");
        const data = await response.json();
        // Only take the first 6 colleges for the home page
        setColleges(data.colleges.slice(0, 6));
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className="flex justify-center flex-col gap-8 items-center lg:px-0 px-4 mx-auto w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <Button variant={"outline"} className="">
          Top Classes Courses
        </Button>
        <motion.h1
          className="lg:text-5xl text-4xl text-center font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore Our College Details
        </motion.h1>
      </motion.div>

      <div className="w-full max-w-6xl px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {colleges.map((college, index) => (
              <CarouselItem
                key={index}
                className="pl-2 auto md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex p-4 gap-4 flex-col items-center w-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border h-auto my-4  ">
                    <Link href={college.link} className="w-full">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="rounded-lg h-[30vh] w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="flex w-full text-sm flex-row justify-between px-4">
                      <span className="text-gray-600">
                        {college.established}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <MapPin className="text-orange-600 h-4 w-4 mr-1" />
                        {college.location}
                      </span>
                    </div>
                    <Link
                      href={college.link}
                      className="font-bold text-xl text-center hover:underline transition-all duration-500 ease-in-out text-gray-800"
                    >
                      {college.name}
                    </Link>
                    <CardContent className="text-xs text-gray-600 px-4 flex flex-col gap-1">
                      {college.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-3"
                        >
                          <span>{getIcon(detail.title)}</span>
                          <span>
                            <span className="font-semibold text-orange-600">
                              {detail.title}:
                            </span>{" "}
                            {detail.description}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="relative" />
          </div>
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCollage;
