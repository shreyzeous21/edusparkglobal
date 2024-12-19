import ContactBanner from "@/components/ContactBanner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Building, Handshake, Heart, Lightbulb } from "lucide-react";
import React from "react";

const AbsContent = () => {
  return (
    <div className="max-w-6xl flex flex-col w-full mx-auto gap-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Learn Business By Doing Business
          </CardTitle>
          <CardDescription className="text-lg">
            AIMER: A Practical Business Education Campus Offering the Best MBA
            Programs in Markaz Knowledge City, a Sprawling 15-Acre Township that
            Blends Business, Leisure, and Health.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Advantages of Work-Integrated Learning | Best MBA Colleges
            </h3>
            <p className="text-muted-foreground">
              For starters, it encourages innovative thinking and problem
              solving. As a student, you'll have the opportunity to work on real
              projects and collaborate with industry professionals, giving you a
              unique perspective that you simply can't get from a textbook. And
              as a result, you'll become a well-rounded professional with better
              employability and leadership skills, ready to make a meaningful
              impact in your industry.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Scale to new heights</h3>
            <p className="text-muted-foreground">
              Working professional looking to take your skills to the next
              level, AIMER's Work Integrated executive development explore a new
              way to become a better professional long-lasting network of
              industry connections, you'll be able expand to a wide horizon of
              opportunities within your companies that can take your career to
              new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Handshake />
                </div>
                <h3 className="text-xl font-semibold">Mission</h3>
              </div>
              <p className="text-muted-foreground">
                We Strive For Excellence In Providing A Holistic Learning
                Experience For The Best Brains In The Country Standing On Three
                Pillars Of Applied Learning, Cutting Edge Research & Consultancy
                And Impactful Corporate Training.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Lightbulb />
                </div>
                <h3 className="text-xl font-semibold">Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To Mould Future Managers For A Modern And Dynamic Global Society
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <ContactBanner />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Aimer B School Program Benefits
          </CardTitle>
          <CardDescription className="text-lg">
            Our Work Integrated Learning program helps you hire better
            professionals at entry level, increasing productivity and building a
            more equitable ecosystem. And for those companies looking to mold
            their trusted employees into leaders and catalysts for rapid growth,
            our learning programs for working professionals are the perfect
            solution.Join us at AIMER, one of the best business training
            institutes, as we revolutionize business education. Contact us today
            to learn more about our Work Integrated Learning approach and take
            the first step toward a brighter future.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Handshake />
                </div>
                <h3 className="text-xl font-semibold">Empathies</h3>
              </div>
              <p className="text-muted-foreground">
                Empathy is the number one trait of a problem solver, and we
                prioritize that over any other values
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Lightbulb />
                </div>
                <h3 className="text-xl font-semibold">Experiential</h3>
              </div>
              <p className="text-muted-foreground">
                We believe experiential learning trumps traditional methods of
                education
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Building />
                </div>
                <h3 className="text-xl font-semibold">Industry-Relevant</h3>
              </div>
              <p className="text-muted-foreground">
                Industry relevance is very much needed to navigate this ever-
                changing corporate world
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Brain />
                </div>
                <h3 className="text-xl font-semibold">Forward-Thinking</h3>
              </div>
              <p className="text-muted-foreground">
                Empathy is the number one trait of a problem solver, and we
                prioritize that over any other values
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Heart />
                </div>
                <h3 className="text-xl font-semibold">Trust & Honesty</h3>
              </div>
              <p className="text-muted-foreground">
                We believe experiential learning trumps traditional methods of
                education
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AbsContent;
