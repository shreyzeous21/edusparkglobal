import React from "react";
import { Separator } from "@/components/ui/separator";
import CourseCard from "./CourseCard";

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
  marks?: string;
}

interface AllCoursesProps {
  courses: {
    bba_courses: Course[];
    mba_courses: Course[];
    ug: Course[];
    pg: Course[];
    certifications: Course[];
    bca_courses: Course[];
    mca_courses: Course[];
    nursing: Course[];
  };
}

const AllCourses = ({ courses }: AllCoursesProps) => {
  return (
    <div className="space-y-8">
      {/* MCA Courses */}
      {courses.mca_courses?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">MCA Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.mca_courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* BCA Courses */}
      {courses.bca_courses?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">BCA Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.bca_courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* BBA Courses */}
      {courses.bba_courses?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">BBA Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.bba_courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* MBA Courses */}
      {courses.mba_courses?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">MBA Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.mba_courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* UG Courses */}
      {courses.ug?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">UG Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.ug.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* PG Courses */}
      {courses.pg?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">PG Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.pg.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Certification Courses */}
      {courses.certifications?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Certification Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.certifications.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Nursing Courses */}
      {courses.nursing?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Nursing Programs</h2>
            <Separator className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.nursing.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCourses;
