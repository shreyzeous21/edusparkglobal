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
    { text: "Privacy Policy", href: "/" },
    { text: "Terms of Use", href: "/terms" },
  ];

  const cap: CapabilitiesSection[] = [
    {
      title: "MBA",
      links: [
        { text: "ITE & Solutions Provider Partners", href: "/" },
        { text: "ElectroSafe Fluid Partner Program", href: "/" },
      ],
    },
  ];

  const ind: IndSection[] = [
    {
      title: "Solutions",
      links: [
        { text: "AI and Machine Learning", href: "/" },
        { text: "Blockchain Computing", href: "/" },
        { text: "Enterprise / Cloud / Hyperscale", href: "/" },
        { text: "Edge", href: "/" },
        { text: "High-Performance Computing", href: "/" },
      ],
    },
  ];
  const about: AboutSection[] = [
    {
      title: "Products",
      links: [
        { text: "ICEraQ®", href: "/" },
        { text: "ICEtank®", href: "/" },
        { text: "HashRaQ® MAX", href: "/" },
        { text: "HashTank®", href: "/" },
        { text: "ElectroSafe® Fluids", href: "/" },
        { text: "Systems Manager", href: "/" },
        { text: "Server Compatibility", href: "/" },
      ],
    },
  ];
  const res: ReSection[] = [
    {
      title: "Resources",
      links: [
        { text: "Support", href: "/" },
        { text: "Blog Library", href: "/" },
        { text: "Learning Center", href: "/" },
        { text: "Contact", href: "/" },
        { text: "Customer Login", href: "/" },
      ],
    },
  ];

  const careers: CareerSection[] = [
    {
      title: "News",
      href: "/",
      subTitle: "News / Events",
      links: [
        {
          region: "Events",
          href: "/americas",
        },
        {
          region: "Press",
          href: "/asia-pacific",
        },
        {
          region: "newsletter",
          href: "/europe",
        },
      ],
    },
  ];

  const globalPresence: GlobalSection[] = [
    {
      title: "Company",
      links: [
        {
          region: "About GRC",
          href: "/",
        },
        {
          region: "Our Team",
          href: "/",
        },
        {
          region: "Our Promise of Quality",
          href: "/",
        },
      ],
    },
  ];

  return (
    <footer className="h-auto bg-black text-white justify-center lg:mx-auto flex flex-col">
      <div className="flex flex-col lg:mx-auto max-w-6xl mx-4 lg:w-full">
        {/* 1 - Home Link */}
        <hr className="font-semibold text-sm py-5" />
        {/* 2 - Capabilities Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 mb-6">
          {/* col 1 */}

          <div className="">
            <div className="flex flex-col w-full">
              <img src="/logo-footer.png" alt="" className="w-[15vw] h-auto" />
              <Separator />
              <div className="py-2 w-full flex gap-4  flex-col">
                <p className="w-full text-sm">
                  <strong>Bangalore:</strong> Chikkagubbi Main Rd, Chikkagubbi
                  Village, Bengaluru, Karnataka 560077
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
                  className="text-black hover:text-orange-500 text-sm"
                >
                  info@edusparkglobal.com
                </Link>
              </div>
            </div>
          </div>

          {/* col 2 */}
          {/* <div className="text-sm ">
            {emp.map((emp, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl text-[#0b0a23]">{emp.title}</h1>
                <ul>aaa
                  {emp.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}

          {/* col 3 */}
          <div className="text-sm ">
            {ind.map((ind, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{ind.title}</h1>
                <ul>
                  {ind.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="hover:text-orange-600 gap-4">
                        {link.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
            <Separator />
            {about.map((about, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-lg font-semibold">{about.title}</h1>
                <ul>
                  {about.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="text-sm gap-4 hover:text-orange-600">
                        {link.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 4 */}
          <div className="text-sm ">
            <Link
              href={"/"}
              className="font-bold hover:text-orange-600 text-lg"
            >
              Customers
            </Link>
            <Separator />
            {/* partners */}
            {cap.map((cap, index) => (
              <div key={index} className="mb-4">
                <h1 className="mb-2 font-semibold text-lg">{cap.title}</h1>
                <ul>
                  {cap.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="gap-3 hover:text-orange-600">
                        {link.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
            <Separator />
            {res.map((res, index) => (
              <div key={index} className="my-3">
                <h1 className="mb-2 text-lg font-bold">{res.title}</h1>
                <ul>
                  {res.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="hover:text-orange-600 gap-3">
                        {link.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 5 */}
          <div className="text-sm ">
            <div className="flex flex-col gap-4">
              <div>
                {careers.map((careers, index) => (
                  <div key={index} className="mb-4 ">
                    {/* <h1 className="mb-2 text-xl font-bold">{careers.title}</h1> */}
                    <h2 className="mb-2 text-lg font-semibold">
                      {careers.subTitle}
                    </h2>
                    <ul>
                      {careers.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href}>
                          <li className="hover:text-orange-600 gap-3">
                            {link.region}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
                <Separator />
              </div>
              <div className="">
                {globalPresence.map((globalPresence, index) => (
                  <div key={index} className="mb-4">
                    <h1 className="mb-2 font-semibold text-lg">
                      {globalPresence.title}
                    </h1>
                    <ul>
                      {globalPresence.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href}>
                          <li className="gap-3 hover:text-orange-600">
                            {link.region}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* <Separator/> */}
              </div>
            </div>
          </div>
        </div>
        {/* 2 - Capabilities Grid */}
        <div className="mt-10 text-sm flex justify-center flex-col">
          <p className="text-white text-center">
            EduSpark Global Makes Learning An Exciting Journey Of Discovery And
            Growth. At Eduspark Global, we are dedicated to revolutionizing
            education through innovative technology and a commitment to
            excellence.
          </p>
        </div>

        <Separator />

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
              © 2024{" "}
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
