"use client";

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import AllCourses from "./_components/AllCourses";
import Breadcrumb from "@/components/Breadcrumb";

interface Course {
  image: string;
  title: string;
  duration: string;
  fee?: string;
  mode?: string;
  admissionStatus: string;
  school: string;
  schoolLogo: string;
  link: string;
  eligibility?: string;
  internship?: string;
  type?: string;
  marks?: string;
}

interface CourseData {
  bba_courses: Course[];
  mba_courses: Course[];
  ug: Course[];
  pg: Course[];
  certifications: Course[];
  bca_courses: Course[];
  mca_courses: Course[];
  nursing: Course[];
}

const CoursesPage = () => {
  const [courseData, setCourseData] = useState<CourseData>({
    bba_courses: [],
    mba_courses: [],
    ug: [],
    pg: [],
    certifications: [],
    bca_courses: [],
    mca_courses: [],
    nursing: [],
  });

  const [schools, setSchools] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/bba.json");
        const data: CourseData = await response.json();
        setCourseData(data);

        // Extract unique schools
        const uniqueSchools = new Set<string>();
        [
          ...data.bba_courses,
          ...data.mba_courses,
          ...data.ug,
          ...data.pg,
          ...data.certifications,
          ...data.bca_courses,
          ...data.mca_courses,
          ...data.nursing,
        ].forEach((course) => uniqueSchools.add(course.school));
        setSchools(["All", ...Array.from(uniqueSchools)]);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const getCoursesBySchool = (school: string) => {
    const filterBySchool = (courses: Course[]) =>
      school === "All"
        ? courses
        : courses.filter((course) => course.school === school);

    return {
      bba_courses: filterBySchool(courseData.bba_courses),
      mba_courses: filterBySchool(courseData.mba_courses),
      ug: filterBySchool(courseData.ug),
      pg: filterBySchool(courseData.pg),
      certifications: filterBySchool(courseData.certifications),
      bca_courses: filterBySchool(courseData.bca_courses),
      mca_courses: filterBySchool(courseData.mca_courses),
      nursing: filterBySchool(courseData.nursing),
    };
  };

  return (
    <div className="w-full">
      <section className="bg-orange-50">
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
            <h1>Our Courses</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <div className="flex max-w-6xl px-4 w-full mx-auto gap-1 py-8">
        <Tabs
          defaultValue="All"
          className="w-full lg:justify-start justify-center lg:mx-0 mx-auto flex lg:flex-row flex-col"
        >
          {/* Desktop View */}
          <TabsList
            className="
              hidden 
              lg:flex 
              flex-col 
              items-start 
              bg-gray-100 
              p-2 
              rounded-lg 
              w-64 
              mr-8 
              h-fit 
              sticky 
              top-[20vh] 
              z-40
            "
          >
            {schools.map((school) => (
              <TabsTrigger
                key={school}
                value={school}
                className="
                  w-full 
                  text-left 
                  px-4 
                  py-2 
                  rounded-md 
                  data-[state=active]:bg-orange-500 
                  data-[state=active]:text-white 
                  hover:bg-gray-200 
                  transition-colors 
                  duration-300 
                  mb-2
                "
              >
                {school}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Mobile View - Accordion */}
          <Accordion 
            type="single" 
            collapsible 
            defaultValue="All"
            className="w-full lg:hidden"
          >
            <AccordionItem value="All">
              <AccordionTrigger 
                className="
                  bg-orange-500 
                  text-white 
                  px-4 
                  py-2 
                  rounded-md 
                  hover:bg-orange-600 
                  transition-colors 
                  duration-300
                "
              >
                All Courses
              </AccordionTrigger>
              <AccordionContent>
                <AllCourses courses={courseData} />
              </AccordionContent>
            </AccordionItem>

            {schools.filter(school => school !== "All").map((school) => (
              <AccordionItem key={school} value={school}>
                <AccordionTrigger 
                  className="
                    bg-gray-100 
                    px-4 
                    py-2 
                    rounded-md 
                    hover:bg-gray-200 
                    transition-colors 
                    duration-300
                  "
                >
                  {school}
                </AccordionTrigger>
                <AccordionContent>
                  <AllCourses courses={getCoursesBySchool(school)} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Desktop View - Tabs Content */}
          <div className="hidden lg:flex-grow lg:block">
            {schools.map((school) => (
              <TabsContent 
                key={school} 
                value={school} 
                className="space-y-6"
              >
                <AllCourses courses={getCoursesBySchool(school)} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesPage;
