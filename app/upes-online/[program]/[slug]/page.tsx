import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import bbaCourses from "@/public/bba.json";
import Link from "next/link";

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

// Course details mapping
const courseDetailsMap: { [key: string]: any } = {
  // BBA Courses (from previous implementation)
  "bba/operations-management": {
    highlights: [
      "Comprehensive curriculum covering core business processes",
      "Skills in people management and strategic operations",
      "First-hand business world experience through dissertation project",
      "Aligned with 'Make in India' and 'Skill India' initiatives",
      "Preparation for Industry 4.0 technological innovations",
    ],
    curriculum: [
      "Fundamentals of Management",
      "Business Economics",
      "Business Communication",
      "Accounting",
      "Operations-Specific Skills",
      "Big Data and AI Applications",
      "Dissertation Project",
    ],
    whyChooseThisCourse: {
      title: "Why BBA in Operations Management",
      description:
        "BBA is one of the most popular and sought-after bachelor's degree programs pursued by students after Grade 12. The BBA with specialization in Operations Management offers students the skills and knowledge needed to understand core business processes, people management, and strategies.",
      programStructure: [
        "First Year: Foundations of management, business economics, business communication, and accounting",
        "Second Year: Operations-specific skills and knowledge",
        "Final Semester: Mandatory Dissertation project",
      ],
    },
  },
  // MBA Courses
  "mba/operations-management": {
    highlights: [
      "Advanced operations management strategies",
      "Industry-aligned curriculum",
      "Practical business problem-solving skills",
      "Comprehensive understanding of global business operations",
      "Preparation for leadership roles",
    ],
    curriculum: [
      "Strategic Operations Management",
      "Supply Chain Analytics",
      "Process Optimization",
      "Technology Management",
      "Global Operations Strategy",
      "Project Management",
      "Operational Leadership",
    ],
    whyChooseThisCourse: {
      title: "Why MBA in Operations Management",
      description:
        "Our MBA in Operations Management is designed to equip professionals with advanced skills in managing complex business operations, leveraging technology, and driving organizational efficiency.",
      programStructure: [
        "Foundational Business Management Modules",
        "Advanced Operations and Technology Courses",
        "Industry Internship and Capstone Project",
      ],
    },
  },
  // Certification Courses
  "certifications/logistics-and-supply-chain": {
    highlights: [
      "Comprehensive supply chain management skills",
      "Industry-recognized certification",
      "Practical logistics strategies",
      "Technology-driven approach",
      "Career advancement opportunities",
    ],
    curriculum: [
      "Supply Chain Fundamentals",
      "Logistics Planning",
      "Inventory Management",
      "Procurement Strategies",
      "Transportation and Distribution",
      "Supply Chain Technology",
      "Global Supply Chain Trends",
    ],
    whyChooseThisCourse: {
      title: "Why Certification in Logistics and Supply Chain",
      description:
        "This certification provides professionals with cutting-edge skills in supply chain management, preparing them for dynamic roles in logistics and global business operations.",
      programStructure: [
        "Theoretical Foundations",
        "Practical Case Studies",
        "Industry Project and Certification",
      ],
    },
  },
  // BCA Courses
  "bca/cloud-computing-cyber-security": {
    highlights: [
      "Comprehensive cloud and cybersecurity skills",
      "Hands-on technical training",
      "Industry-relevant certifications",
      "Cutting-edge technology exposure",
      "Career-ready skill set",
    ],
    curriculum: [
      "Cloud Computing Fundamentals",
      "Cybersecurity Principles",
      "Network Security",
      "Cloud Infrastructure",
      "Ethical Hacking",
      "Data Protection Strategies",
      "Emerging Tech in Cloud Security",
    ],
    whyChooseThisCourse: {
      title: "Why BCA in Cloud Computing & Cyber Security",
      description:
        "Our BCA program specializing in Cloud Computing and Cyber Security prepares students for the most in-demand tech careers, combining cloud technologies with robust security expertise.",
      programStructure: [
        "Foundational Computer Science Modules",
        "Specialized Cloud and Security Courses",
        "Practical Projects and Internships",
      ],
    },
  },
};

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
    highlights: [],
    curriculum: [],
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={course.image}
              alt={`${params.program.toUpperCase()} in ${course.title}`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Course Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Fee:</span>
                    <span>{course.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Admission Status:</span>
                    <span className="text-green-600">
                      {course.admissionStatus}
                    </span>
                  </div>
                  {course.eligibility && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Eligibility:</span>
                      <span>{course.eligibility}</span>
                    </div>
                  )}
                </div>
                <Button className="w-full mt-6" variant="default">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Highlights */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Course Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalDetails.highlights.map(
              (highlight: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500" />
                  <span>{highlight}</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Curriculum */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
            {additionalDetails.curriculum.map(
              (subject: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-blue-500" />
                  <span>{subject}</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Why Choose This Course */}
        {additionalDetails.whyChooseThisCourse && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              {additionalDetails.whyChooseThisCourse.title}
            </h2>
            <p className="text-lg mb-6">
              {additionalDetails.whyChooseThisCourse.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Structure</h3>
              <ul className="list-disc list-inside space-y-2">
                {additionalDetails.whyChooseThisCourse.programStructure.map(
                  (item: string, index: number) => (
                    <li key={index} className="text-base">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Page;
