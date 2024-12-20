import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const rankings = [
  {
    title: "AICTE Certified",
    description:
      "Our AICTE approval affirms that our online MBA programs adhere to rigorous standards, providing students access to scholarships, government funding, and industry acceptance.",
    icon: "/rankings/aicte.png",
  },
  {
    title: "WES Recognized",
    description:
      "UPES Online programs are recognized by WES, demonstrating alignment with international standards, amplifying graduates' employability globally and positioning them for competitive success.",
    icon: "/rankings/wes.png",
  },
  {
    title: "QS 5-Star Excellence",
    description:
      "With QS World University Rankings 2024 acknowledging UPES as the No. 1 private university in India for academic reputation, and among the top 3% worldwide, our commitment to your career growth and academic development is evident.",
    icon: "/rankings/qs.png",
  },
  {
    title: "NIRF Recognition",
    description:
      "UPES's rise to the 52nd position in the NIRF rankings of 2023, up from 65 in 2022, reflects the dedication of our faculty, extensive alumni network, and innovative curriculum. Our management programs hold the 39th position, while engineering ranks 54th.",
    icon: "/rankings/nirf.png",
  },
  {
    title: "UGC Approval",
    description:
      "UPES Online is recognized by the Distance Education Board under the University Grants Commission, ensuring that our UGC-entitled distance learning programs open doors for further education and global career opportunities.",
    icon: "/rankings/ugc.png",
  },
  {
    title: "NAAC A Accreditation",
    description:
      "UPES holds the esteemed A Grade accreditation from the National Assessment and Accreditation Council (NAAC). This top-tier rating is a testament to our commitment to quality education and the excellence of our faculty.",
    icon: "/rankings/naac.png",
  },
  {
    title: "Times Global",
    description:
      "UPES Online has achieved a ranking within the top 801-1000 band in the prestigious Times Higher Education (THE) World University Rankings. We stand 9th among private and deemed universities in India and 2nd among state universities in the country.",
    icon: "/rankings/times.avif",
  },
  {
    title: "IACBE Accreditation",
    description:
      "Our programs MBA in Oil and Gas Management and MBA in Logistics and Supply Chain Management have received specialized accreditation through International Accreditation Council for Business Education (IACBE), USA.",
    icon: "/rankings/iacbe.png",
  },
];

const UoRanking = () => {
  return (
    <div className="max-w-6xl flex flex-col w-full mx-auto gap-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Let Our Accreditations & Rankings Be Your Seal Of Trust
          </CardTitle>
          <CardDescription className="text-lg">
            Our diverse range of accreditations and rankings validate our commitment to providing world-class education and creating global opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {rankings.map((ranking, index) => (
              <div 
                key={index}
                className="space-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image 
                      src={ranking.icon}
                      alt={ranking.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">
                      {ranking.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {ranking.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UoRanking;
