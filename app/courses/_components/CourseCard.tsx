import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  GraduationCap,
  IndianRupee,
  Laptop,
  BookOpen,
} from "lucide-react";

interface CourseCardProps {
  course: {
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
    marks?: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
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
          {course.fee && (
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-1">
                <IndianRupee className="size-3" />
                <Label className="text-xs">Monthly Fee</Label>
              </div>
              <span className="text-xs">{course.fee}</span>
            </div>
          )}
          {course.mode && (
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-1">
                <Laptop className="size-3" />
                <Label className="text-xs">Mode</Label>
              </div>
              <span className="text-xs">{course.mode}</span>
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
              <span className="text-sm">{course.school}</span>
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
};

export default CourseCard;
