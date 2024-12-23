"use client";

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
      <div className="flex max-w-6xl px-4 w-full mx-auto flex-col gap-10 py-8">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {schools.map((school) => (
              <TabsTrigger key={school} value={school}>
                {school}
              </TabsTrigger>
            ))}
          </TabsList>

          {schools.map((school) => (
            <TabsContent key={school} value={school} className="space-y-6">
              <AllCourses courses={getCoursesBySchool(school)} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesPage;
