import {
  Mail,
  Phone,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"; // Import additional icons if needed
import Link from "next/link";
import React from "react";

const OcTitle = () => {
  const universityInfo = [
    {
      title: "Oklahoma City University",
      rating: 4.8,
      description: `The College of Health Professions receive accreditation from the
Accreditation Commission for Education in Nursing (ACEN), the Oklahoma
Board of Nursing and other related accreditation organizations`,
      email: "info@upesonline.com",
      phone: "+1 405-208-5000",
      logos: [
        {
          name: "Facebook",
          icon: <Facebook size={20} />,
          link: "https://www.facebook.com/oklahomacityuniversity",
        },
        {
          name: "Linkedin",
          icon: <Linkedin size={20} />,
          link: "https://www.linkedin.com/school/oklahoma-city-university/",
        },
        {
          name: "Instagram",
          icon: <Instagram size={20} />,
          link: "https://www.instagram.com/oklahomacityuniversity/",
        },
        {
          name: "Twitter",
          icon: <Twitter size={20} />,
          link: "https://x.com/OKCU",
        },
        {
          name: "Youtube",
          icon: <Youtube size={20} />,
          link: "https://www.youtube.com/oklahomacityuniversity",
        },
      ],
    },
  ];

  return (
    <div className="relative flex max-w-6xl justify-center flex-col h-full items-center mx-auto rounded-md shadow-md w-full bg-[url('/university-rochester.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-slate-800 to-gray-900 opacity-70 rounded-md shadow-md"></div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center w-full px-8 py-8 relative z-10">
        <div className="">
          <img
            src="/1.png"
            alt="okla Logo"
            className="h-50 w-auto "
          />
        </div>
        <div className="flex gap-4 py-10 flex-col w-full mx-auto justify-center lg:items-start items-center">
          <h1 className="text-white text-4xl font-bold">
            {universityInfo[0].title}
          </h1>
          <div className="flex text-white flex-wrap gap-4">
            <span className="flex items-center gap-1 transition duration-300 hover:text-green-600">
              <Star size={20} />
              {universityInfo[0].rating}
            </span>
            <Link
              href={`tel:${universityInfo[0].phone}`}
              className="flex items-center gap-1 transition duration-300 hover:text-green-600"
            >
              <Phone size={20} />
              {universityInfo[0].phone}
            </Link>
            {/* <Link
                href={`mailto:${universityInfo[0].email}`}
                className="flex items-center gap-1 transition duration-300 hover:text-orange-600"
              >
                <Mail size={20} />
                {universityInfo[0].email}
              </Link> */}
          </div>
          <p className="text-white text-lg  mt-4">
            {universityInfo[0].description}
          </p>
          <div className="flex flex-wrap gap-5 items-center justify-center mt-4">
            {universityInfo[0].logos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white transition duration-300 hover:text-green-600"
              >
                {logo.icon}
                {logo.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcTitle;
