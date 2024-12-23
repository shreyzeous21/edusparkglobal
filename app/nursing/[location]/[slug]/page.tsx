import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book, Clock, DollarSign, GraduationCap, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: { location: string; slug: string };
}): Promise<Metadata> => {
  const location = params.location.replace(/-/g, " ");
  const slug = params.slug.replace(/-/g, " ");
  return {
    title: `${slug} at ${location} | Nursing Program`,
    description: `Detailed information about the ${slug} nursing program offered at ${location}.`,
  };
};

const nursingProgramDetails = {
  "rochester": {
    name: "University MRC",
    location: "Rochester",
    image: "/nursing/r.jpg",
    logo: "/r-logo.svg",
    details: {
      duration: "12 Months",
      fee: "Rs 7,083/-",
      eligibility: "10+2",
      admissionStatus: "Admission Started",
    },
    overview: `Our Accelerated Bachelor of Nursing Program at University MRC is designed for individuals 
    looking to fast-track their nursing career. This intensive 12-month program provides comprehensive 
    training and prepares students for the dynamic healthcare environment in Rochester.`
  },
  "oklahoma": {
    name: "OC University",
    location: "Oklahoma City",
    image: "/nursing/o.jpg",
    logo: "/o-logo.png",
    details: {
      duration: "12 Months",
      fee: "Rs 7,083/-",
      eligibility: "10+2",
      admissionStatus: "Admission Started",
    },
    overview: `The Accelerated Bachelor of Nursing Program at Oklahoma City University offers 
    a fast-track pathway to a nursing career. This comprehensive 12-month program equips students 
    with the skills and knowledge needed to excel in the healthcare sector.`
  },
  "mgh": {
    name: "MGH Institute",
    location: "Boston",
    image: "/nursing/mgh.webp",
    logo: "/mgh-logo.png",
    details: {
      duration: "12 Months",
      fee: "Rs 7,083/-",
      eligibility: "10+2",
      admissionStatus: "Admission Started",
    },
    overview: `The Accelerated Bachelor of Nursing Program at MGH Institute provides an intensive 
    12-month educational experience. Designed for motivated students, this program offers a rapid 
    path to becoming a qualified nursing professional in the Boston area.`
  }
};

export default function NursingProgramPage({
  params,
}: {
  params: { location: string; slug: string };
}) {
  const program = nursingProgramDetails[params.location as keyof typeof nursingProgramDetails];

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <section 
        className="flex flex-col"
        style={{
          backgroundImage: 'url("/breadcrumb_bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="h-full flex items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-black capitalize">
              {params.slug.replace(/-/g, " ")}
            </h1>
            <Breadcrumb />
          </div>
        </div>
      </section>

      <div className="w-full px-4 flex justify-center flex-col gap-10 max-w-6xl mx-auto">
        <section className="grid md:grid-cols-1 gap-8">
          <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[400px]">
              <Image 
                src={program.image} 
                alt={`${program.name} Campus`} 
                fill 
                className="object-cover" 
              />
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image 
                    src={program.logo} 
                    alt={`${program.name} Logo`} 
                    width={50} 
                    height={50} 
                    className="rounded-full" 
                  />
                  <h2 className="text-xl font-semibold">{program.name}</h2>
                </div>
                <span className="text-sm text-gray-600 flex items-center gap-2">
                  <Home className="h-4 w-4 text-orange-600" />
                  {program.location}
                </span>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="font-semibold">{program.details.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-600">Fee</p>
                    <p className="font-semibold">{program.details.fee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Book className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-600">Eligibility</p>
                    <p className="font-semibold">{program.details.eligibility}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-600">Admission</p>
                    <p className="font-semibold text-green-600">
                      {program.details.admissionStatus}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href={`/apply/nursing/${params.location}/${params.slug}`}>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Program Overview</h3>
          <p className="text-gray-700">
            {program.overview}
          </p>
        </section>
      </div>
    </div>
  );
}
