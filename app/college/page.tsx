import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";
import AllCollage from "./_components/AllCollage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Collages - EduSpark Global",
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
            <h1>Our Colleges</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>

      <AllCollage />
    </div>
  );
};

export default page;
