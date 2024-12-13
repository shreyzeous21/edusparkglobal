import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <GraduationCap />,
    title: "Expert Tutors",
    description:
      "Learn from industry-leading professionals dedicated to guiding you every step of the way.",
  },
  {
    icon: <BookOpen />,
    title: "Effective Courses",
    description:
      "Experience well-structured courses designed to deliver practical knowledge and real-world skills.",
  },
  {
    icon: <Award />,
    title: "Earn Certificate",
    description:
      "Gain a recognized certificate upon completion to boost your career and showcase your expertise.",
  },
];

const TopFeatures = () => {
  return (
    <div className="flex justify-center items-center lg:px-0 px-4 mx-auto w-full">
      <div className="max-w-6xl w-full flex flex-col gap-6 justify-center items-center">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center max-w-xl gap-3 text-center w-full">
          <Button variant={"outline"} className="w-1/3">
            Our Top Features
          </Button>
          <span className="lg:text-4xl font-bold text-5xl">
            Achieve Your Goal With EduSpark
          </span>
          <p className="text-sm/normal text-gray-600">
            Experience flexible, high-quality education with industry-leading
            instructors and tailored course plans that fit your lifestyle. Learn
            anytime, anywhere with EduSpark Global.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex hover:shadow-2xl duration-200 flex-col items-center justify-center p-6 gap-4 rounded-lg shadow-md"
              style={{
                background:
                  "linear-gradient(to bottom right, #f9fafb, #e0f7fa)", // Light gradient background
              }}
            >
              <CardHeader className="flex items-center justify-center gap-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
