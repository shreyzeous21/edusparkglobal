import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";
import RmcTitle from "./_components/RmcTitle";
import RmcContent from "./_components/RmcContent";
import RmcCourses from "./_components/RmcCourses";
import CostTable from "./_components/RmcCostTable";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rochester Medical Center (UMRC) - EduSpark Global",
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
            <h1>University Rochester Medical Center (UMRC)</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <div className="w-full px-4 flex justify-center flex-col gap-10">
        <RmcTitle />
        <RmcContent />
        <CostTable />
        <RmcCourses />
      </div>
    </div>
  );
};

export default page;
