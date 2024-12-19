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
  Laptop,
} from "lucide-react";

interface Course {
  image: string;
  title: string;
  duration: string;
  fee?: string;
  eligibility?: string;
  admissionStatus: string;
  school: string;
  internship?: string;
  mode?: string;
  link: string;
}

export default function AbsCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/bba.json");
        const data = await response.json();
        // Filter for UG and PG courses from AIMER Business School
        const aimerCourses = [...data.ug, ...data.pg].filter(
          (course: Course) => course.school === "Aimer B School"
        );
        setCourses(aimerCourses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center space-y-3">
        <Button variant={"outline"}>Our Courses</Button>
        <p className="text-muted-foreground">
          Work-Integrated Learning Programs at AIMER Business School
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-8"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {courses.map((course, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 lg:basis-1/3">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-2">
                  <div className="relative w-full h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Label className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                      {course.admissionStatus}
                    </Label>
                  </div>
                  <CardTitle className="text-lg text-center px-4 pb-3">
                    {course.title}
                  </CardTitle>
                </div>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {course.eligibility ? (
                          <Clock className="size-3" />
                        ) : (
                          <BookOpen className="size-3" />
                        )}
                        <Label className="text-xs">
                          {course.eligibility ? "Eligibility" : "Internship"}
                        </Label>
                      </div>
                      <span className="text-xs">
                        {course.eligibility || course.internship || "Not specified"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <Label className="text-xs">Duration</Label>
                      </div>
                      <span className="text-xs">{course.duration}</span>
                    </div>
                    {course.fee || course.mode ? (
                      <div className="flex items-center justify-between text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {course.fee ? (
                            <IndianRupee className="size-3" />
                          ) : (
                            <Laptop className="size-3" />
                          )}
                          <Label className="text-xs">
                            {course.fee ? "Monthly Fee" : "Mode"}
                          </Label>
                        </div>
                        <span className="text-xs">{course.fee || course.mode}</span>
                      </div>
                    ) : null}
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="size-3" />
                        <Label className="text-xs">University</Label>
                      </div>
                      <Link
                        href="/college/aimer-b-school"
                        className="text-sm text-orange-500 hover:underline"
                      >
                        {course.school}
                      </Link>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    <Link href={course.link}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
