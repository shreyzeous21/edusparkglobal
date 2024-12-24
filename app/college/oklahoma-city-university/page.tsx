import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";
import OcTitle from "./_components/OcTitle";
import OcContent from "./_components/OcContent";
import OcCourses from "./_components/OcCourses";
import OcCostTable from "./_components/OcCostTable";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Oklahoma City University - EduSpark Global",
    description: "Discover more about us.",
  };
}

const page = () => {
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
            <h1>Oklahoma City University (OCU)</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <div className="w-full px-4 flex justify-center flex-col gap-10">
        <OcTitle />
        <OcContent />
        <OcCostTable />
        <OcCourses />
      </div>
    </div>
  );
};

export default page;
