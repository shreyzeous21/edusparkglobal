/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

// Define interfaces for the links and sections
import { ReactElement } from "react";
import { Separator } from "./ui/separator";

interface SocialLink {
  name: string;
  icon: ReactElement;
  color: string;
  hoverColor: string;
  link: string;
}

interface FooterLink {
  text: string;
  href: string;
}

interface CapabilitiesSection {
  title: string;
  links: { text: string; href: string }[];
}

interface IndSection {
  title: string;
  links: { text: string; href: string }[];
}
interface AboutSection {
  title: string;
  links: { text: string; href: string }[];
}
interface ReSection {
  title: string;
  links: { text: string; href: string }[];
}
interface CareerSection {
  title: string;
  subTitle: string;
  href: string;
  links: { region: string; href: string }[];
}
interface GlobalSection {
  title: string;
  links: { region: string; href: string }[];
}

const Footer = () => {
  // const [expend, setExpend] = useState(false);
  // Social links array
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Facebook />,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-600",
      link: "https://www.facebook.com/people/Eduspark-Global/61565571606742/",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-500",
      link: "https://x.com/eduspark_global/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      color: "text-blue-700",
      hoverColor: "hover:text-blue-700",
      link: "https://www.linkedin.com/company/eduspark-global/",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      color: "text-blue-700",
      hoverColor: "hover:text-blue-700",
      link: "https://www.instagram.com/eduspark_global/",
    },
    {
      name: "Whatsapp",
      icon: <MessageCircle />,
      color: "text-blue-700",
      hoverColor: "hover:text-blue-700",
      link: "https://wa.me/+918073719330",
    },
  ];

  // Footer links array
  const footerLinks: FooterLink[] = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about-us" },
    { text: "Courses", href: "/courses" },
    { text: "Blog", href: "/blogs" },
    { text: "Colleges", href: "/college" },
    { text: "Contact Us", href: "/contact-us" },
    { text: "Privacy Policy", href: "/p&p" },
    { text: "Terms of Use", href: "/terms" },
  ];

  const mbaComponents: { title: string; href: string }[] = [
    {
      title: "Logistic And Supply Chain",
      href: "/upes-online/mba/logistics-and-supply-chain",
    },
    {
      title: "International Business",
      href: "/upes-online/mba/international-business",
    },
    {
      title: "Business Analytics",
      href: "/upes-online/mba/business-analytics",
    },
    { title: "Digital Business", href: "/upes-online/mba/digital-business" },
    { title: "Human Resource", href: "/upes-online/mba/human-resource" },
    {
      title: "Marketing Management",
      href: "/upes-online/mba/marketing-management",
    },
    {
      title: "Operations Management",
      href: "/upes-online/mba/operations-management",
    },
    {
      title: "Infrastructure Management",
      href: "/upes-online/mba/infrastructure-management",
    },
    { title: "Oil And Gas", href: "/upes-online/mba/oil-and-gas" },
    { title: "Power Management", href: "/upes-online/mba/power-management" },
    {
      title: "Financial Management",
      href: "/upes-online/mba/finance-management",
    },
  ];

  const bbaComponents: { title: string; href: string }[] = [
    {
      title: "Operations Management",
      href: "/upes-online/bba/operations-management",
    },
    {
      title: "Financial Management",
      href: "/upes-online/bba/finance-management",
    },
    { title: "Human Resource", href: "/upes-online/bba/human-resource" },
    {
      title: "Marketing Management",
      href: "/upes-online/bba/marketing-management",
    },
  ];

  const mcaComponents: { title: string; href: string }[] = [
    {
      title: "Artificial Intelligence And Machine Learning",
      href: "/upes-online/mca/artificial-intelligence-and-machine-learning",
    },
    {
      title: "Cyber Security And Forensics",
      href: "/upes-online/mca/cyber-security-and-forensics",
    },
    { title: "Data Science", href: "/upes-online/mca/data-science" },
  ];

  const nursingComponents: { title: string; href: string }[] = [
    {
      title:
        "Accelerated Bachelor of Nursing Program (Rochester Medical Center)",
      href: "/nursing/rochester/accelerated-bachelor-of-nursing-program",
    },
    {
      title:
        "Accelerated Bachelor of Nursing Program (Oklahoma City University)",
      href: "/nursing/oklahoma/accelerated-bachelor-of-nursing-program",
    },
    {
      title: "Accelerated Bachelor of Nursing Program (MGH Institute)",
      href: "/nursing/mgh/accelerated-bachelor-of-nursing-program",
    },
  ];

  const bcaComponents: { title: string; href: string }[] = [
    {
      title: "Cloud Computing & Cyber Security",
      href: "/upes-online/bca/cloud-computing-and-cyber-security",
    },
    {
      title: "New Age Technology",
      href: "/upes-online/bca/new-age-technology",
    },
    { title: "Data Analytics", href: "/upes-online/bca/data-analytics" },
  ];
  const graduationComponents: { title: string; href: string }[] = [
    {
      title: "Under Graduate Work-Integrated",
      href: "/courses/under-graduate-work-integrated-program",
    },
    {
      title: "Post Graduate Work-Integrated",
      href: "/courses/post-graduate-work-integrated-program",
    },
  ];

  const certifications: { title: string; href: string }[] = [
    {
      title: "Logistic & Supply Chain",
      href: "/upes-online/certifications/logistics-and-supply-chain",
    },
    {
      title: "Industrial Safety",
      href: "/upes-online/certifications/industry-safety",
    },
    {
      title: "Renewable Energy",
      href: "/upes-online/certifications/renewable-energy",
    },
    {
      title: "Human Resource",
      href: "/upes-online/certifications/human-resource",
    },
    {
      title: "Business Analytics",
      href: "/upes-online/certifications/business-analytics",
    },
    {
      title: "Marketing Management",
      href: "/upes-online/certifications/marketing-management",
    },
    {
      title: "Operations Management",
      href: "/upes-online/certifications/operations-management",
    },
    {
      title: "Financial Management",
      href: "/upes-online/certifications/finance-management",
    },
    {
      title: "Project Management",
      href: "/upes-online/certifications/project-management",
    },
    {
      title: "Air Business Management",
      href: "/upes-online/certifications/air-business-management",
    },
  ];

  const quickLinks: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Colleges", href: "/college" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="h-auto bg-black text-white justify-center lg:mx-auto flex flex-col">
      <div className="flex flex-col lg:mx-auto max-w-6xl mx-4 lg:w-full">
        {/* 1 - Home Link */}
        <hr className="font-semibold text-sm py-5" />
        {/* 2 - Capabilities Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-5 gap-4 mb-6">
          {/* col 1 */}
          <div className="">
            <div className="flex flex-col w-full">
              <img src="/logo-footer.png" alt="" className="w-[15vw] h-auto" />
              <Separator />
              <div className="py-2 w-full flex gap-4  flex-col">
                <p className="w-full text-sm">
                  <strong>Bangalore:</strong> Guru Krupa, No 1, 6th Cross, Civil
                  Aviation Road, Konena Agrahara, HAL Post Bangalore,
                  Karnataka 560017
                </p>
                <p className="w-full text-sm">
                  <strong>Noida:</strong> 338, Tower C, Bhutani Cyber Park, Sec
                  62, Noida, U.P 201301
                </p>

                <Link href={"tel:+918073719330"} className="text-sm">
                  +91-8073719330
                </Link>
                <Link
                  href={"mailto:info@edusparkglobal.com"}
                  className=" hover:text-orange-500 text-sm"
                >
                  info@edusparkglobal.com
                </Link>
              </div>
            </div>
          </div>

          {/* col 2 - MBA, MCA */}
          <div className="text-sm">
            <h1 className="mb-2 text-xl font-bold">Master's</h1>
            <Separator className="mb-2" />
            <div>
              <h2 className="mb-1 text-xl font-semibold flex items-center gap-2">
                MBA <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {mbaComponents.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
              <h2 className="mt-2 mb-1 text-xl font-semibold flex items-center gap-2">
                MCA <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {mcaComponents.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* col 3 - BBA, BCA */}
          <div className="text-sm">
            <h1 className="mb-2 text-xl font-bold">Bachelor's</h1>
            <Separator className="mb-2" />
            <div>
              <h2 className="mb-1 text-xl flex items-center font-semibold gap-2">
                BBA <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {bbaComponents.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
              <h2 className="mt-2 text-xl mb-1 flex items-center font-semibold gap-2">
                BCA <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {bcaComponents.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* col 3 - Nursing */}
          <div className="text-sm">
            <h1 className="mb-2 text-xl font-bold">Nursing</h1>
            <Separator className="mb-2" />
            <ul>
              {nursingComponents.map((component, index) => (
                <Link key={index} href={component.href}>
                  <li className="hover:text-orange-600 mb-1">
                    {component.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* col 4 - Certifications & Graduation & Quick Links */}
          <div className="text-sm">
            <h1 className="mb-2 text-xl font-bold">Learning Paths</h1>
            <Separator className="mb-2" />
            <div>
              <h2 className="mb-1 text-xl flex items-center gap-2 font-semibold">
                Graduation <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {graduationComponents.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
              <h2 className="mt-2 mb-1 text-xl gap-2 flex items-center font-semibold">
                Certifications <Separator className="bg-white w-10" />
              </h2>
              <ul>
                {certifications.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
              {/* <h2 className="mt-2 mb-1 font-semibold">Quick Links</h2>
              <ul>
                {quickLinks.map((component, index) => (
                  <Link key={index} href={component.href}>
                    <li className="hover:text-orange-600 mb-1">
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul> */}
            </div>
          </div>
        </div>

        {/* 2 - Capabilities Grid */}
        <div className="flex flex-col gap-5 text-sm py-4 text-center justify-center ">
          <p className="text-white">
            <strong>EduSpark Global</strong> Makes Learning An Exciting Journey
            Of Discovery And Growth. At Eduspark Global, we are dedicated to
            revolutionizing education through innovative technology and a
            commitment to excellence. Our goal is to empower professionals and
            lifelong learners with cutting-edge educational opportunities that
            drive career advancement and personal growth. Founded by a team of
            passionate Edtech leaders, we believe in the power of customized
            learning to unlock every student's potential.
          </p>
          <p>
            Our courses are designed to be flexible, allowing you to study at
            your own pace with support from industry-leading experts. Whether
            you're looking to advance in Business Analytics, Human Resources,
            Marketing, or other fields, EduSpark Global offers tailored learning
            solutions to meet your needs. With live classes, recorded video
            content, and placement assistance, we ensure that every learner has
            the opportunity to succeed.
          </p>
        </div>

        {/* 3 - Social Links */}
        <div className="flex flex-row justify-center py-3 gap-4 flex-wrap">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`text-xl rounded-full border-2 p-2 hover:bg-orange-600 cursor-pointer hover:text-white`}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* 4 - Footer Links */}
        <div className="flex flex-col  text-sm py-4 justify-center max-w-5xl mx-auto w-full">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {footerLinks.map((link, index) => (
                <span key={index}>
                  <Link href={link.href} className="hover:text-orange-600">
                    {link.text}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="ml-2 lg:inline">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center flex-row gap-2 text-center py-4">
            <p>
              &copy; 2024{" "}
              <Link href={"/"} className="text-orange-600">
                EduSpark Global
              </Link>
              . All Rights Reserved.
            </p>
            <p>
              Designed & Developed by{" "}
              <Link
                href={"https://coderxpoint.com"}
                target="_blank"
                className="text-orange-600"
              >
                CoderXpoint
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
