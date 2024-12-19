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
import { BookOpen, Clock, GraduationCap, IndianRupee } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

interface BbaCourse {
  image: string;
  title: string;
  duration: string;
  fee: string;
  admissionStatus: string;
  school: string;
  schoolLogo: string;
  link: string;
  eligibility?: string;
  internship?: string;
}

const MbaCart = () => {
  const [courses, setCourses] = useState<BbaCourse[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/bba.json");
        const data = await response.json();
        setCourses(data.mba_courses);
      } catch (error) {
        console.error("Error fetching BBA courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center space-y-3">
        <Button variant={"outline"} className="">
          Masters of Business Administration (MBA)
        </Button>
        <p className="text-muted-foreground">
          Work-Integrated Learning Programs for Future Business Leaders
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
          {courses.map((course, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 lg:basis-1/4">
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
                  <CardTitle className="text-lg text-center pb-3">
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
                        {course.eligibility ||
                          course.internship ||
                          "Not specified"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <Label className="text-xs">Duration</Label>
                      </div>
                      <span className="text-xs">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="size-3" />
                        <Label className="text-xs">Monthly Fee</Label>
                      </div>
                      <span className="text-xs">{course.fee}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="size-3" />
                        <Label className="text-xs">University</Label>
                      </div>
                      <span className="text-xs">{course.school}</span>
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
        <div className="hidden lg:block">
          <CarouselPrevious className="lg:-left-12" />
          <CarouselNext className="lg:-right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default MbaCart;
