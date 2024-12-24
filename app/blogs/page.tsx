import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React, { Suspense } from "react";
import BlogList from "./_components/BlogList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blogs - EduSpark Global",
    description: "Discover our latest blog posts.",
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
            <h1>Blogs</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      
      <Suspense fallback={
        <div className="flex items-center justify-center py-10">
          <div className="h-5 w-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      }>
        <BlogList />
      </Suspense>
    </div>
  );
};

export default page;
