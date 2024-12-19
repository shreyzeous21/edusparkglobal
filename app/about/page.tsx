import Breadcrumb from "@/components/Breadcrumb";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import TopFeatures from "@/components/TopFeatures";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Globe2, GraduationCap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us - EduSpark Global",
    description: "Discover more about us.",
  };
}

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col">
        <h1
          className="h-auto text-black text-4xl font-bold flex items-center justify-center"
          style={{
            backgroundImage: 'url("/breadcrumb_bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
        >
          <span className="flex flex-col items-center">
            <h1>About Us</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <section className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3]">
          <div className="absolute inset-0 bg-black/5 rounded-lg overflow-hidden">
            <img
              src="/inner_about_img.png"
              alt="Students learning together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <Button variant="outline">Get More About Us</Button>
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            Empowering Students To Reach Their{" "}
            <span className="bg-orange-500 text-white px-2">Potential</span>{" "}
            Goal For Next Level Challenge.
          </h2>
          <p className="text-muted-foreground text-sm">
            EduSpark Global Makes Learning An Exciting Journey Of Discovery And
            Growth. At Eduspark Global, we are dedicated to revolutionizing
            education through innovative technology and a commitment to
            excellence. Our goal is to empower professionals and lifelong
            learners with cutting-edge educational opportunities that drive
            career advancement and personal growth. Founded by a team of
            passionate Edtech leaders, we believe in the power of customized
            learning to unlock every student's potential.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-orange-500" />
              </div>
              <span className="font-medium">
                The Most World Class Instructors
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <Globe2 className="h-5 w-5 text-orange-500" />
              </div>
              <span className="font-medium">Access Your Class anywhere</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
              <span className="font-medium">Flexible Course Plan</span>
            </div>
          </div>
          <Button asChild className="bg-zinc-800 hover:bg-zinc-900">
            <Link href={"/contact"}>
              Enroll Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <TopFeatures />
      <Steps />
      <Testimonials />
    </div>
  );
};

export default page;
