import ContactBanner from "@/components/ContactBanner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Building,
  Handshake,
  Heart,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Clock,
  Medal,
} from "lucide-react";
import React from "react";

const UoContent = () => {
  return (
    <div className="max-w-6xl flex flex-col w-full mx-auto gap-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Transform Your Career with UPES Online
          </CardTitle>
          <CardDescription className="text-lg">
            UPES Online, the digital learning vertical of UPES, empowers professionals and students with flexible, industry-relevant programs designed for today's dynamic job market.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Excellence in Online Education
            </h3>
            <p className="text-muted-foreground">
              UPES Online offers MBA, BBA, and BCA degrees, all enhanced with industry masterclasses and immersive experiences. Our programs maintain the same level of academic rigour as traditional in-person programs, while providing the flexibility needed for working professionals and aspiring students.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Advanced Specializations</h3>
            <p className="text-muted-foreground">
              We provide intensive 10-month Postgraduate Programs (PGP) in specialized fields such as Oil and Gas, Renewable Energy, and Industrial Safety. Our curriculum integrates advanced technologies like AI, Data Science, and Cloud Computing to prepare you for the future of work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Medal />
                </div>
                <h3 className="text-xl font-semibold">Recognition</h3>
              </div>
              <p className="text-muted-foreground">
                Ranked 46th in NIRF 2024, with rank 42 in engineering and rank 41 in management. UPES is among the top 3% of universities worldwide and holds NAAC 'A' grade accreditation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <GraduationCap />
                </div>
                <h3 className="text-xl font-semibold">100% Placements</h3>
              </div>
              <p className="text-muted-foreground">
                Proud record of 100% placements over the last five years, with 42 faculty members among the world's top 2% researchers as per Stanford University list.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <ContactBanner />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Our Core Values
          </CardTitle>
          <CardDescription className="text-lg">
            At UPES Online, our values form the foundation of your educational journey, ensuring a transformative learning experience that prepares you for success in the global marketplace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Heart />
                </div>
                <h3 className="text-xl font-semibold">Respect</h3>
              </div>
              <p className="text-muted-foreground">
                Valuing your time, busy schedules, career needs, and continuous learning requirements.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Lightbulb />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-muted-foreground">
                Driving innovation to ensure you are a changemaker driving the transformations of tomorrow.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Brain />
                </div>
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-muted-foreground">
                Inspiring students to unlock their full potential and pursue their aspirations.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Building />
                </div>
                <h3 className="text-xl font-semibold">Inclusivity</h3>
              </div>
              <p className="text-muted-foreground">
                Fostering equal opportunities, embracing diversity within our student community.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Handshake />
                </div>
                <h3 className="text-xl font-semibold">Trust</h3>
              </div>
              <p className="text-muted-foreground">
                Transparency, integrity and accountability will always form the core of your relationship with us.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UoContent;
