import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";
import ContactForm from "./_components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us - EduSpark Global",
    description: "Discover more about us.",
    icons:"/title.png"
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
            <h1>Contact Us</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <ContactForm />
    </div>
  );
};

export default page;
