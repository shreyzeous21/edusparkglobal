import Breadcrumb from "@/components/Breadcrumb";
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

const Page = ({ params }: { params: { program: string; slug: string } }) => {
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
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-sm"
      >
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-500">/</span>}
            <Link
              href={item.href}
              className={`
                ${
                  index === breadcrumbItems.length - 1
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
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

      <section className="container-fluid px-0 py-0 bg-white">
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
      </section>

      <section className="container mx-auto px-4 py-12 bg-white">
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
      </section>

      {/* Curriculum Section */}
      {additionalDetails.curriculum && (
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">
              Curriculum Structure
            </h2>
            <p className="text-center text-gray-600 mt-4">
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
        </section>
      )}

      {/* Career Prospects Section */}
      {additionalDetails.careerProspects && (
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">
              {additionalDetails.careerProspects.title}
            </h2>
            <p className="text-center text-gray-600 mt-4">
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
        </section>
      )}

      {/* Career Services Section */}
      {additionalDetails.careerServices && (
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {additionalDetails.careerServices.title}
            </h2>
            <p className="text-gray-600 mb-8">
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
        </section>
      )}

      {/* Fees and Financing Section */}
      {additionalDetails.feesAndFinancing && (
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Explore Payment Options
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Opportunities and Advantages Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-6">
          {additionalDetails.opportunities?.map((opportunity:{title:string, cardDescription:string, description:string, source:string}, index:{ index: number}) => (
            <Card key={index.index}>
              <CardHeader>
                <CardTitle>{opportunity.title}</CardTitle>
                <CardDescription>{opportunity.cardDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {opportunity.description} (Source: {opportunity.source})
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      {additionalDetails.faculties && (
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
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
        </section>
      )}

      {/* FAQs Section */}
      {additionalDetails.faqs && (
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about the program
            </p>

            <Accordion type="single" collapsible className="w-full">
              {additionalDetails.faqs.map((faq: any, index: number) => (
                <AccordionItem value={`faq-${index}`} key={index}>
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <span className="mr-4 text-xl font-semibold text-primary">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
