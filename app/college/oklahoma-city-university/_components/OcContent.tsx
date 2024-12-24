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
import { 
  Handshake, 
  Lightbulb, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy, 
  MapPin,
  Star
} from "lucide-react";
import React from "react";

const OcContent = () => {
  const contentSections = [
    {
      icon: <GraduationCap className="text-white" />,
      title: "Outstanding programs",
      description:
        "More than 70 undergraduate majors, 20 graduate degrees (including a law degree, MBA and two doctoral programs), and advanced degree programs for working adults.",
    },
    {
      icon: <BookOpen className="text-white" />,
      title: "Special opportunities",
      description:
        "Service-learning opportunities across the curriculum; University Honors Program; OCULEADS, a scholarship and leadership program; study abroad programs; and more!",
    },
    {
      icon: <Handshake className="text-white" />,
      title: "Experienced faculty",
      description:
        "Seventy-eight percent of our faculty members hold the highest degrees in their fields. Professors, not graduate assistants, teach all classes.",
    },
    {
      icon: <Star className="text-white" />,
      title: "Personalized attention",
      description:
        "Student/faculty ratio of 11:1 and class sizes of about 17 for first-year students and 13 for upperclassmen",
    },
    {
      icon: <Users className="text-white" />,
      title: "Diverse environment",
      description:
        "More than 1,700 undergraduate students and 600 graduate students from 46 states and 43 foreign countries",
    },
    {
      icon: <Lightbulb className="text-white" />,
      title: "Active campus",
      description:
        "More than 50 student-led organizations, including seven national fraternities and sororities, our own chapter of Habitat for Humanity, multicultural student associations, student government and more.",
    },
    {
      icon: <Trophy className="text-white" />,
      title: "Stellar athletics",
      description:
        "The Stars have won more than 70 national championships and consistently field top programs in a variety of sports in the Sooner Athletic Conference. OCU student-athletes also excel in the classroom, with our athletes typically maintaining an overall GPA of 3.0.",
    },
    {
      icon: <MapPin className="text-white" />,
      title: "Ideal location",
      description:
        "Our 104 park-like acres reside in the heart of Oklahoma City, just minutes from a diverse range of educational, social, cultural, and recreational opportunities",
    },
  ];

  return (
    <div className="max-w-6xl flex flex-col w-full mx-auto gap-10">
      <Card className="w-full">
        <CardHeader>
          <CardDescription className="text-lg">
            As a top liberal arts and sciences university, Oklahoma City
            University has been leading students to their creative edge for
            nearly 120 years. We are a diverse community of academic achievers,
            big thinkers, independent spirits, and dedicated artists. At OCU,
            students from across the globe follow their passions and excel in
            the arts and sciences, religion, business, health care and the
            performing arts. Discover why Oklahoma City University is such a
            great place to learn, live, and call home.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {contentSections.map((section, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <ContactBanner />
      <ContactBannerMedical />
    </div>
  );
};

export default OcContent;
