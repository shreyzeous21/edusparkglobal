"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  GraduationCap,
  IndianRupee,
  Stethoscope,
} from "lucide-react";

interface NursingCourse {
  image: string;
  title: string;
  duration: string;
  fee: string;
  admissionStatus: string;
  eligibility: string;
  school: string;
  schoolLogo: string;
  link: string;
}

export default function RmcCourses() {
  const [courses, setCourses] = useState<NursingCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/bba.json");
        const data = await response.json();
        // Filter for nursing courses from University MRC
        const nursingCourses = data.nursing.filter(
          (course: NursingCourse) => course.school === "University MRC"
        );
        setCourses(nursingCourses);
        setLoading(false);
      } catch (err) {
        setError("Failed to load courses");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Nursing Programs at University of Rochester Medical Center
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {courses.map((course, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-green-100 rounded-xl overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-5 bg-green-50">
                  <div className="flex items-center mb-4">
                    {/* <Image
                      src={course.schoolLogo}
                      alt="School Logo"
                      width={50}
                      height={50}
                      className="mr-4 rounded-full shadow-md"
                    /> */}
                    <CardTitle className="text-xl font-bold text-green-900">
                      {course.title}
                    </CardTitle>
                  </div>
                  <div className="space-y-3 text-sm text-green-800">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-green-600" />
                      <span className="font-medium">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="w-5 h-5 mr-3 text-green-600" />
                      <span className="font-medium">Fee: {course.fee}</span>
                    </div>
                    <div className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-3 text-green-600" />
                      <span className="font-medium">Eligibility: {course.eligibility}</span>
                    </div>
                    <div className="flex items-center font-semibold">
                      <GraduationCap className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-green-900">{course.admissionStatus}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 bg-green-100">
                  <Link href={course.link} className="w-full">
                    <Button 
                      variant="default" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                    >
                      Explore Program
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-green-600 hover:bg-green-100" />
        <CarouselNext className="text-green-600 hover:bg-green-100" />
      </Carousel>
    </div>
  );
}
