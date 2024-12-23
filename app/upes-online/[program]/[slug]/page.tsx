import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import bbaCourses from "@/public/bba.json";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import courseDetailsData from "@/public/course-details.json";
import { Trophy, ExternalLink } from "lucide-react";
import NetworkStripe from "../../_components/Network";
import { CompanyStripe } from "../../_components/Company";
import ContactBanner from "@/components/ContactBanner";

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { program: string; slug: string };
}): Promise<Metadata> {
  let courses: any[] = [];
  switch (params.program) {
    case "bba":
      courses = bbaCourses.bba_courses;
      break;
    case "mba":
      courses = bbaCourses.mba_courses;
      break;
    case "certification":
    case "certifications":
      courses = bbaCourses.certifications;
      break;
    case "bca":
      courses = bbaCourses.bca_courses;
      break;
    case "mca":
      courses = bbaCourses.mca_courses;
      break;
    default:
      courses = [];
  }

  const course = courses.find(
    (course) => course.link.split("/").pop() === params.slug
  );

  return {
    title: `${params.program.toUpperCase()} in ${
      course?.title || "Course"
    } - UPES Online`,
    description: `Comprehensive ${params.program.toUpperCase()} program in ${
      course?.title || "Course"
    } by UPES Online`,
  };
}

const courseDetailsMap = courseDetailsData.courses;

const Page = ({ params }: { params: { program?: any; slug?: any } }) => {
  let courses: any[] = [];
  switch (params.program) {
    case "bba":
      courses = bbaCourses.bba_courses;
      break;
    case "mba":
      courses = bbaCourses.mba_courses;
      break;
    case "certification":
    case "certifications":
      courses = bbaCourses.certifications;
      break;
    case "bca":
      courses = bbaCourses.bca_courses;
      break;
    case "mca":
      courses = bbaCourses.mca_courses;
      break;
    default:
      courses = [];
  }

  // Find the course from the JSON data
  const course = courses.find(
    (course) => course.link.split("/").pop() === params.slug
  );

  // Get additional course details from the mapping
  const additionalDetails = courseDetailsMap[
    `${params.program}/${params.slug}`
  ] || {
    whyChooseThisCourse: null,
  };

  // If no course found, return not found
  if (!course) {
    return <div>Course not found</div>;
  }

  // Custom Breadcrumb component
  const CustomBreadcrumb = () => {
    const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "UPES Online", href: "/college/upes-online" },
      {
        label: params.program.toUpperCase(),
        href: `/courses`,
      },
      {
        label: course.title,
        href: course.link,
      },
    ];

    return (
      <nav aria-label="Breadcrumb" className="flex items-center  text-sm">
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center font-normal">
            {index > 0 && <span className="mx-2 text-gray-500">/</span>}
            <Link
              href={item.href}
              className={`
                ${
                  index === breadcrumbItems.length - 1
                    ? "text-orange-500"
                    : "text-sm"
                }
              `}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <ContactBanner/>
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
              {params.program.toUpperCase()} in {course.title}
            </h1>
            <CustomBreadcrumb />
          </span>
        </h1>
      </section>

      <Card className=" max-w-6xl rounded-md mx-auto w-full justify-center">
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image
            src={course.image}
            alt={`${params.program.toUpperCase()} in ${course.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center w-full h-full"
            style={{
              filter: "brightness(0.8)", // Slightly darken the image
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="bg-black/40 p-6 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {params.program.toUpperCase()} in {course.title}
              </h1>
            </div>
          </div>
        </div>
      </Card>

      <Card className="max-w-6xl px-4 mx-auto py-4  bg-white">
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <div className="space-y-6 w-full">
            <h2 className="text-3xl font-bold">
              {additionalDetails.whyChooseThisCourse?.title ||
                `${params.program.toUpperCase()} in ${course.title}`}
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                {params.program.toUpperCase()} is one of the most popular and
                sought-after bachelor's degree programs pursued by students
                after Grade 12. The {params.program.toUpperCase()} with
                specialization in {course.title}
                offers students the skills and knowledge needed to understand
                core business processes, people management, and strategies. The
                program will equip the learner with the expertise needed to
                excel in the dynamic world of business and operations.
              </p>

              <p>
                The first year of the degree will lay the foundations of
                management, business economics, business communication, and
                accounting. In the second year of the program, you will learn
                Operations-specific skills and knowledge. In the final semester,
                the learners will complete the mandatory Dissertation project,
                which provides firsthand experience in the business world.
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/contact" className="w-full block">
                <Button className="w-full" variant="default" size="lg">
                  Get the Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      <CompanyStripe />

      {/* Curriculum Section */}
      {additionalDetails.curriculum && (
        <Card className="max-w-6xl w-full mx-auto px-4 py-4  bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">
              Curriculum Structure
            </h2>
            <p className="text-center text-gray-600 ">
              Comprehensive semester-wise breakdown of the program
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {additionalDetails.curriculum.map(
              (semester: any, index: number) => (
                <AccordionItem
                  value={`semester-${semester.semester}`}
                  key={index}
                >
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <span className="mr-4 text-xl font-semibold text-primary">
                        Semester {semester.semester}
                      </span>
                      <span className="text-gray-600">{semester.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      {semester.subjects.map(
                        (subject: string, subIndex: number) => (
                          <div
                            key={subIndex}
                            className="flex items-center space-x-2"
                          >
                            <Check className="text-green-500 w-5 h-5" />
                            <span>{subject}</span>
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </Card>
      )}

      {/* Career Prospects Section */}
      {additionalDetails.careerProspects && (
        <Card className="max-w-6xl mx-auto px-4 py-4 w-full bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">
              {additionalDetails.careerProspects.title}
            </h2>
            <p className="text-center text-gray-600 mt-2">
              {additionalDetails.careerProspects.description}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {Object.entries(additionalDetails.careerProspects.careerLevels).map(
              ([level, data], index) => (
                <AccordionItem value={`career-${level}`} key={index}>
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <span className="mr-4 text-xl font-semibold text-primary capitalize">
                        {level} Level
                      </span>
                      <span className="text-gray-600">{data.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      {data.roles.map((role: string, roleIndex: number) => (
                        <div
                          key={roleIndex}
                          className="flex items-center space-x-2"
                        >
                          <Check className="text-green-500 w-5 h-5" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </Card>
      )}

      {/* Career Services Section */}
      {additionalDetails.careerServices && (
        <Card className="max-w-6xl mx-auto px-4 py-4 w-full bg-white">
          <div className=" mx-auto text-center flex flex-col gap-4">
            <h2 className="text-3xl font-bold ">
              {additionalDetails.careerServices.title}
            </h2>
            <p className="text-gray-600">
              {additionalDetails.careerServices.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalDetails.careerServices.services.map(
                (service: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-200 transition-colors"
                  >
                    <Check className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-800 text-lg">{service}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Fees and Financing Section */}
      {additionalDetails.feesAndFinancing && (
        <Card className="max-w-6xl w-full mx-auto px-4 py-4 bg-gradient-to-br from-blue-50 to-white">
          <div className=" mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {additionalDetails.feesAndFinancing.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {additionalDetails.feesAndFinancing.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalDetails.feesAndFinancing.options.map(
                (option: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {index === 0 ? (
                            // EMI Plan Icon
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          ) : (
                            // Semester Fee Icon
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          )}
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {option.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {option.details}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="text-center mt-12">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
                Explore Payment Options
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* Opportunities and Advantages Section */}
      <Card className="max-w-6xl w-full mx-auto px-4 py-4 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">
            A Booming Sector With Growth & Promising Opportunities
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalDetails.opportunities?.map((opportunity, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-border"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {opportunity.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {opportunity.cardDescription}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {opportunity.description}
                </p>
                <div className="text-xs text-muted-foreground italic flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Source: {opportunity.source}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>

      {/* Faculty Section */}
      {additionalDetails.faculties && (
        <Card className="max-w-6xl w-full mx-auto px-4 py-4 bg-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Our Faculty</h2>
            <p className="text-gray-600 mb-8">
              Our faculty members are experts in their fields and are dedicated
              to providing students with a world-class education.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalDetails.faculties.map(
                (faculty: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-200 transition-colors"
                  >
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {faculty.name}
                      </h3>
                      <p className="text-gray-600">{faculty.designation}</p>
                      <p className="text-gray-600">{faculty.expertise}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>
      )}
      <NetworkStripe />
      {/* FAQs Section */}
      {additionalDetails.faqs && (
        <Card className="max-w-6xl w-full mx-auto px-4 py-4 bg-white">
          <div className=" mx-auto">
            <div className="text-center mb-2">
              <h2 className="text-3xl font-bold text-primary ">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to the most common questions about the program
              </p>
            </div>
            <Accordion type="single" collapsible className="">
              {additionalDetails.faqs.map((faq, index) => (
                <div key={index} className="border-border">
                  <div>
                    <AccordionItem value={`item-${index}`} className="w-full">
                      <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors flex justify-between items-center">
                        <span>{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              ))}
            </Accordion>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Page;
