import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  BarChart,
  Rocket,
  Medal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Update the generateMetadata function to accept dynamic data
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug || "Courses";

  return {
    title: `${
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
    } - EduSpark Global`,
    description: `Discover more about ${slug.replace(/-/g, " ")}`,
  };
}

// Define type for program details
interface ProgramDetail {
  image?: string;
  title: string;
  text: string;
  duration: string;
  eligibility: string;
  mode: string;
  internship: string;
  highlights: {
    title: string;
    description: string;
  }[];
  features: string[];
  location: {
    name: string;
    description: string;
  };
  location1: {
    name: string;
    description: string;
  };
  faculties: {
    name: string;
    description: string;
    image: string;
  }[];
}

// Dynamic data for each slug
const ProgramDetails: Record<string, ProgramDetail[]> = {
  "under-graduate-work-integrated-program": [
    {
      image: "/ug/under-graduate.jpg",
      title: "Under Graduate Work-Integrated Program",
      text: "A program that moulds you into becoming best performing business professional",
      duration: "3 Years",
      eligibility: "High Secondary",
      mode: "Hybrid",
      internship: "6 Months",
      highlights: [
        {
          title: "Expert Tutors",
          description:
            "Learn Business in a Business Ecosystem with our Experts",
        },
        {
          title: "Career Advantage",
          description: "Get one year industry experience before getting hired",
        },
        {
          title: "Earn Certificate",
          description: "Do internship with stipend to gain career advantage",
        },
        {
          title: "Balanced Learning",
          description: "50% in class & 50% experiential learning",
        },
        {
          title: "Professional Development",
          description:
            "Receive a combination of professional skills and certificates",
        },
        {
          title: "Entrepreneurship Focus",
          description:
            "Specialized Entrepreneurship Training to enhance your business-building skills",
        },
      ],
      features: [
        "An all-round business professional development",
        "Placement assistance in MNCs / GCC",
        "Enriching regular sessions from industry pros",
        "Explore business with our internships or kick-start your startup journey",
      ],
      location: {
        name: "AIMER Business School​​",
        description: `Gone are the days of endless textbooks and theoretical lectures. At AIMER, we’re proud to oﬀer a dynamic, hands-on approach to education that combines experiential learning, compulsory internships, industry expert talks, and more With AIMER Business School, you have the chance to discover a revolutionary way to business education with the innovative Work-Integrated Learning Approach.`,
      },
      location1: {
        name: "Markaz Knowledge City",
        description:
          "Markaz Knowledge City, in Calicut, Kerala, India, is an integrated township with 18 entities for education, culture, health, entrepreneurship, and residence. It adapts UNSDG-2030 to achieve sustainable cities, addressing global challenges with innovative ideas and human skill development for a knowledge-based economy.",
      },
      faculties: [
        {
          name: "Anju Mathew",
          description: "Assistant Professor",
          image: "/faculties/anju-mathew.png",
        },
        {
          name: "Manoj Kumar",
          description: "Academic Dean",
          image: "/faculties/manoj-kumar.png",
        },
        {
          name: "Vaheed Ali P",
          description: "Head of Academic Operations",
          image: "/faculties/vaheed-ali.png",
        },
        {
          name: "Ranjith K R Nair",
          description: "Assistant Professor",
          image: "/faculties/ranjith.png",
        },
      ],
    },
  ],
  "post-graduate-work-integrated-program": [
    {
      image: "/pg/post-graduate.png",
      title: "Post Graduate Work-Integrated Program",
      text: "A program that moulds you into becoming best performing business professional",
      duration: "2 Years",
      eligibility: "Graduate",
      mode: "Hybrid",
      internship: "6 Months",
      highlights: [
        {
          title: "Expert Tutors",
          description:
            "Learn Business in a Business Ecosystem with our Experts",
        },
        {
          title: "Career Advantage",
          description: "Get one year industry experience before getting hired",
        },
        {
          title: "Earn Certificate",
          description: "Do internship with stipend to gain career advantage",
        },
        {
          title: "Balanced Learning",
          description: "50% in class & 50% experiential learning",
        },
        {
          title: "Professional Development",
          description:
            "Receive a combination of professional skills and certificates",
        },
        {
          title: "Entrepreneurship Focus",
          description:
            "Specialized Entrepreneurship Training to enhance your business-building skills",
        },
      ],
      features: [
        "An all-round business professional development",
        "Placement assistance in MNCs / GCC",
        "Enriching regular sessions from industry pros",
        "Explore business with our internships or kick-start your startup journey",
      ],
      location: {
        name: "AIMER Business School​​",
        description: `Gone are the days of endless textbooks and theoretical lectures. At AIMER, we’re proud to oﬀer a dynamic, hands-on approach to education that combines experiential learning, compulsory internships, industry expert talks, and more With AIMER Business School, you have the chance to discover a revolutionary way to business education with the innovative Work-Integrated Learning Approach.`,
      },
      location1: {
        name: "Markaz Knowledge City",
        description:
          "Markaz Knowledge City, in Calicut, Kerala, India, is an integrated township with 18 entities for education, culture, health, entrepreneurship, and residence. It adapts UNSDG-2030 to achieve sustainable cities, addressing global challenges with innovative ideas and human skill development for a knowledge-based economy.",
      },
      faculties: [
        {
          name: "Anju Mathew",
          description: "Assistant Professor",
          image: "/faculties/anju-mathew.png",
        },
        {
          name: "Manoj Kumar",
          description: "Academic Dean",
          image: "/faculties/manoj-kumar.png",
        },
        {
          name: "Vaheed Ali P",
          description: "Head of Academic Operations",
          image: "/faculties/vaheed-ali.png",
        },
        {
          name: "Ranjith K R Nair",
          description: "Assistant Professor",
          image: "/faculties/ranjith.png",
        },
      ],
    },
  ],
};

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const details = ProgramDetails[slug] || [];

  return (
    <div className="flex flex-col w-full mx-auto justify-center gap-10">
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
            <h1>
              {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")}
            </h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>

      <div className="flex flex-col px-4 max-w-6xl w-full mx-auto justify-center gap-10">
        {details.length > 0 ? (
          details.map((item, index) => (
            <div className="space-y-8" key={index}>
              {/* Hero Section */}
              <div className="relative">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Main Content Card */}
              <Card className="border shadow-lg">
                {/* Overview Section */}
                <CardHeader>
                  <div className="flex w-full justify-between">
                    <CardTitle className="text-3xl font-bold">
                      {item.title}
                    </CardTitle>
                    <Button asChild variant={"default"}>
                      <Link href={"/contact"}>Enroll Now</Link>
                    </Button>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    {item.text}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-lg">
                      <h3 className="font-semibold text-gray-600">Duration</h3>
                      <p className="text-lg">{item.duration}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <h3 className="font-semibold text-gray-600">
                        Eligibility
                      </h3>
                      <p className="text-lg">{item.eligibility}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                      <h3 className="font-semibold text-gray-600">Mode</h3>
                      <p className="text-lg">{item.mode}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                      <h3 className="font-semibold text-gray-600">
                        Internship
                      </h3>
                      <p className="text-lg">{item.internship}</p>
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Program Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {item.highlights.map((highlight, idx) => {
                        const icons = [
                          <GraduationCap key="expert" className="h-6 w-6" />,
                          <Award key="career" className="h-6 w-6" />,
                          <Medal key="certificate" className="h-6 w-6" />,
                          <BookOpen key="learning" className="h-6 w-6" />,
                          <BarChart key="development" className="h-6 w-6" />,
                          <Rocket key="entrepreneurship" className="h-6 w-6" />,
                        ];

                        const gradients = [
                          "bg-gradient-to-br from-orange-50 to-indigo-50",
                          "bg-gradient-to-br from-purple-50 to-pink-50",
                          "bg-gradient-to-br from-green-50 to-emerald-50",
                          "bg-gradient-to-br from-yellow-50 to-amber-50",
                          "bg-gradient-to-br from-red-50 to-rose-50",
                          "bg-gradient-to-br from-sky-50 to-cyan-50",
                        ];

                        return (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border hover:shadow-lg transition-all duration-300 ${
                              gradients[idx % gradients.length]
                            }`}
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                {icons[idx % icons.length]}
                              </div>
                              <h3 className="font-semibold text-lg">
                                {highlight.title}
                              </h3>
                            </div>
                            <p className="text-gray-600">
                              {highlight.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg"
                        >
                          <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Location Section */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{item.location.name}</h2>
                    <p className="text-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
                      {item.location.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">
                      {item.location1.name}
                    </h2>
                    <p className="text-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
                      {item.location1.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Semester Structure Card */}
              <Card className="border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Semester Structure
                  </CardTitle>
                  <p className="text-gray-600">
                    {params.slug === "under-graduate-work-integrated-program"
                      ? "3 Years Program - 6 Semesters"
                      : "2 Years Program - 4 Semesters"}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {params.slug === "under-graduate-work-integrated-program" ? (
                      // UG Semesters
                      <>
                        {[1, 2, 3, 4, 5, 6].map((semester) => (
                          <div
                            key={semester}
                            className="p-4 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-lg space-y-2"
                          >
                            <h3 className="font-semibold text-lg">
                              Semester {semester}
                            </h3>
                            <p className="text-gray-600">
                              {semester <= 2
                                ? "Foundation courses and basic industry exposure"
                                : semester <= 4
                                ? "Core subjects with increased industry integration"
                                : "Advanced specialization and industry projects"}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      // PG Semesters
                      <>
                        {[1, 2, 3, 4].map((semester) => (
                          <div
                            key={semester}
                            className="p-4 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-lg space-y-2"
                          >
                            <h3 className="font-semibold text-lg">
                              Semester {semester}
                            </h3>
                            <p className="text-gray-600">
                              {semester <= 2
                                ? "Advanced core subjects with industry applications"
                                : "Specialization modules and capstone projects"}
                            </p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Faculties Card */}
              <Card className="border shadow-lg p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Our Expert Faculties
                  </CardTitle>
                  <p className="text-gray-600">
                    Learn from industry experts and experienced academicians
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {item.faculties.map((faculty, idx) => (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-300"
                      >
                        <div className="relative group p-4">
                          <div className="aspect-square w-48 h-48 mx-auto overflow-hidden bg-gray-100 rounded-full">
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                        </div>
                        <div className="p-4 text-center bg-white">
                          <h3 className="font-semibold text-lg mb-1">
                            {faculty.name}
                          </h3>
                          <p className="text-gray-600">{faculty.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-lg p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Frequently Asked Questions
                  </CardTitle>
                  <p className="text-gray-600">
                    Find answers to common questions about{" "}
                    {params.slug === "under-graduate-work-integrated-program"
                      ? "our Undergraduate"
                      : "our Postgraduate"}{" "}
                    program
                  </p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {params.slug ===
                    "under-graduate-work-integrated-program" ? (
                      <>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What are the entry requirements for the
                            Undergraduate program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            For the Undergraduate Work-Integrated Program:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                10+2 or equivalent from any recognized board
                              </li>
                              <li>Minimum 50% aggregate marks in 10+2</li>
                              <li>
                                Students from any stream (Science/Commerce/Arts)
                                can apply
                              </li>
                              <li>Basic English communication skills</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What is the duration and structure of the UG
                            program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            The program is structured as follows:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Total duration: 3 years</li>
                              <li>6 semesters with practical training</li>
                              <li>Industry exposure from first year</li>
                              <li>
                                Blend of classroom learning and work experience
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What specializations are available in the UG
                            program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            Students can choose from various specializations:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Business Administration</li>
                              <li>Digital Marketing</li>
                              <li>Finance and Banking</li>
                              <li>Human Resource Management</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    ) : (
                      <>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What are the entry requirements for the Postgraduate
                            program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            For the Postgraduate Work-Integrated Program:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Graduation in any discipline with minimum 50%
                                marks
                              </li>
                              <li>
                                Professional certifications like CA, CMA, or CS
                                are also eligible
                              </li>
                              <li>
                                Work experience is preferred but not mandatory
                              </li>
                              <li>Good communication and analytical skills</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What is the duration and structure of the PG
                            program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            The program is structured as follows:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Total duration: 2 years</li>
                              <li>
                                4 semesters with advanced industry projects
                              </li>
                              <li>Executive-friendly weekend classes</li>
                              <li>
                                Industry-aligned curriculum with practical
                                applications
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                            What advanced specializations are offered in the PG
                            program?
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            Advanced specializations include:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Strategic Management and Leadership</li>
                              <li>Financial Analysis and Risk Management</li>
                              <li>International Business Management</li>
                              <li>Data Analytics and Business Intelligence</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                        What career support is provided?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        We provide comprehensive career support:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Dedicated placement cell</li>
                          <li>Industry mentorship programs</li>
                          <li>Career counseling and guidance</li>
                          <li>
                            Regular placement drives and industry connections
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left font-semibold hover:text-orange-600">
                        Are there any scholarships available?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        Yes, we offer various scholarship opportunities:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Merit-based scholarships</li>
                          <li>Need-based financial assistance</li>
                          <li>Sports and cultural achievement scholarships</li>
                          <li>Early bird admission benefits</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-gray-500">
              No details available for this program.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
