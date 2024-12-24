import ContactBanner from "@/components/ContactBanner";
import ContactBannerMedical from "@/components/ContactBannerMedical";
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

const RmcContent = () => {
  return (
    <div className="max-w-6xl flex flex-col w-full mx-auto gap-10">
      <Card className="w-full">
        <CardHeader>
          <CardDescription className="text-lg">
            The University of Rochester Medical Center (URMC) is one of the
            nation's leading academic medical centers. It forms the centerpiece
            of the University of Rochester's health research, teaching and
            patient care missions.
            <p className="py-2">
              The University of Rochester Medical Center is a private,
              coeducational, nonsectarian, and nonprofit research university.
            </p>
            The medical center includes Strong Memorial Hospital, the Eastman
            Institute for Oral Health, the University of Rochester School of
            Medicine and Dentistry, with its faculty practice (University of
            Rochester Medical Faculty Group), and the University of Rochester
            School of Nursing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Handshake className="text-white" />
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
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-white" />
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
            Our Values & Culture
          </CardTitle>
          <CardDescription className="text-lg">
            ICARE—an acronym for Integrity, Inclusion, Compassion,
            Accountability, Respect and Excellence—provides the foundation for
            how we treat people at this Medical Center. Achieving our strategic
            vision depends on all of us living out these values (including the
            recent addition of inclusion) and embracing the diversity of our
            faculty, staff, students, trainees and patients.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Heart className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Respect</h3>
              </div>
              <p className="text-muted-foreground">
                Valuing your time, busy schedules, career needs, and continuous
                learning requirements.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Lightbulb className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-muted-foreground">
                Continuously improving and adapting to meet the evolving needs
                of healthcare education and research.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Brain className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-muted-foreground">
                Inspiring students to unlock their full potential and pursue
                their aspirations.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Building className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Inclusivity</h3>
              </div>
              <p className="text-muted-foreground">
                Fostering equal opportunities, embracing diversity within our
                student community.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Handshake className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Trust</h3>
              </div>
              <p className="text-muted-foreground">
                Transparency, integrity and accountability will always form the
                core of your relationship with us.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Work & Life In Rochester Medical Center
          </CardTitle>
          <CardDescription className="text-lg">
            Simply put, Rochester is a delightfully small "big city," with many
            of the benefits and few of the disadvantages of an urban center. It
            boasts more money managers per capita than any American metropolis
            except New York City. It offers some of the most appealing and
            affordable housing in the country—not to mention an extensive and
            highly regarded parks system, and five nationally ranked high
            schools.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Awards & Recognition
          </CardTitle>
          <CardDescription className="text-lg">
            URSMD Diversity Awards We are pleased to announce our annual call
            for nominations for the URSMD Faculty Diversity Award. The award was
            established in 2013 to recognize the exceptional contributions and
            accomplishments of SMD faculty whose efforts foster a diverse and
            inclusive medical school community. We also honor the exceptional
            efforts of SMD trainees in contributing to diversity, inclusion and
            equity efforts with the URSMD Trainee Diversity Award.
          </CardDescription>
        </CardHeader>
      </Card>
      <ContactBannerMedical />
    </div>
  );
};

export default RmcContent;
