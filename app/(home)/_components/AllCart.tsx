"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BookOpen,
  Clock,
  GraduationCap,
  IndianRupee,
  Laptop,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

interface Course {
  image: string;
  title: string;
  duration: string;
  fee?: string;
  mode?: string;
  admissionStatus: string;
  school: string;
  schoolLogo: string;
  link: string;
  eligibility?: string;
  internship?: string;
  type?: string;
}

interface CourseData {
  bba_courses: Course[];
  mba_courses: Course[];
  ug: Course[];
  pg: Course[];
}

const AllCart = () => {
  const [courseData, setCourseData] = useState<CourseData>({
    bba_courses: [],
    mba_courses: [],
    ug: [],
    pg: [],
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/bba.json");
        const data: CourseData = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const renderCourseCard = (course: Course) => (
    <Card className="h-auto hover:shadow-lg transition-shadow duration-300">
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
        <CardTitle className="text-lg hover:underline hover:text-orange-500 text-center pb-4">
          <Link href={course.link}>{course.title}</Link>
        </CardTitle>
      </div>
      <CardContent className="space-y-4 px-4">
        <div className="grid grid-cols-1 gap-2 text-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center gap-1">
              {course.eligibility ? (
                <Clock className="size-3" />
              ) : (
                <BookOpen className="size-3" />
              )}
              <Label className=" text-xs">
                {course.eligibility ? "Eligibility" : "Internship"}
              </Label>
            </div>
            <span className="">
              {course.eligibility || course.internship || "Not specified"}
            </span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="size-3" />
              <Label className=" text-xs">Duration</Label>
            </div>
            <span className="">{course.duration}</span>
          </div>
          {course.fee || course.mode ? (
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-1">
                {course.fee ? (
                  <IndianRupee className="size-3" />
                ) : (
                  <Laptop className="size-3" />
                )}
                <Label className=" text-xs">
                  {course.fee ? "Monthly Fee" : "Mode"}
                </Label>
              </div>
              <span className="">{course.fee || course.mode}</span>
            </div>
          ) : (
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-1">
                <Laptop className="size-3" />
                <Label className="text-xs">Mode</Label>
              </div>
              <span className="">Not specified</span>
            </div>
          )}
          <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center gap-1">
              <GraduationCap className="size-3" />
              <Label className="text-xs">University</Label>
            </div>
            {course.school === "UPES Online" ? (
              <Link
                href="/college/upes-online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-500 hover:underline"
              >
                {course.school}
              </Link>
            ) : course.school === "Aimer B School" ? (
              <Link
                href="/college/aimer-b-school"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-500 hover:underline"
              >
                {course.school}
              </Link>
            ) : (
              <span>{course.school}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
          <Link href={course.link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );

  const allCourses = [
    ...courseData.bba_courses.map((course) => ({ ...course, type: "BBA" })),
    ...courseData.mba_courses.map((course) => ({ ...course, type: "MBA" })),
    ...courseData.ug.map((course) => ({ ...course, type: "UG" })),
    ...courseData.pg.map((course) => ({ ...course, type: "PG" })),
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center space-y-3">
        <Button variant={"outline"} className="">
          All Courses
        </Button>
        <p className="text-muted-foreground">
          Explore Our Comprehensive Range of Professional Courses
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 mt-8">
          {allCourses.map((course, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 lg:basis-1/4">
              {renderCourseCard(course)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious className="lg:-left-12" />
          <CarouselNext className="lg:-right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default AllCart;
