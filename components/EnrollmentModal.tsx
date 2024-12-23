"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ArrowRight } from "lucide-react";
import { VisuallyHidden } from "./ui/VisuallyHiddenEnroll";

// Import the components from Header
const mbaComponents: { title: string; href: string }[] = [
  {
    title: "Logistic And Supply Chain",
    href: "/upes-online/mba/logistics-and-supply-chain",
  },
  {
    title: "International Business",
    href: "/upes-online/mba/international-business",
  },
  { title: "Business Analytics", href: "/upes-online/mba/business-analytics" },
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
    title: "Accelerated Bachelor of Nursing Program (Rochester Medical Center)",
    href: "/nursing/rochester/accelerated-bachelor-of-nursing-program",
  },
  {
    title: "Accelerated Bachelor of Nursing Program (Oklahoma City University)",
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
  { title: "New Age Technology", href: "/upes-online/bca/new-age-technology" },
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

const colleges = [
  {
    value: "upes",
    label: "UPES Online",
    programs: ["BCA", "BBA", "MBA", "MCA", "Certification"],
  },
  {
    value: "aimer",
    label: "Aimer B College ",
    programs: ["Graduation"],
  },
  {
    value: "nursing",
    label: "Nursing Colleges ",
    programs: ["Nursing"],
  },
];

const formatTitleWithBoldParenthesis = (title: string) => {
  const parenthesisRegex = /\(([^)]+)\)/;
  const match = title.match(parenthesisRegex);

  if (!match) return title;

  const beforeParenthesis = title.split("(")[0].trim();
  const parenthesisContent = match[1];

  return (
    <div className="flex items-center">
      <span>{beforeParenthesis}</span>
      <span className="font-semibold ml-1 text-orange-600">
        ({parenthesisContent})
      </span>
    </div>
  );
};

export function EnrollmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [availablePrograms, setAvailablePrograms] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setIsOpen(false);
  };

  // Update available programs when college is selected
  const handleCollegeChange = (collegeValue: string) => {
    setSelectedCollege(collegeValue);
    const selectedCollegeObj = colleges.find(
      (college) => college.value === collegeValue
    );
    setAvailablePrograms(selectedCollegeObj ? selectedCollegeObj.programs : []);

    // Reset program and specialization when college changes
    setSelectedProgram("");
  };

  return (
    <>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white"
        onClick={() => setIsOpen(true)}
      >
        Enroll Now
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px] p-0">
          <VisuallyHidden>
            <DialogTitle>Enrollment Form</DialogTitle>
          </VisuallyHidden>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Enroll Now</h2>
              <Button
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                {/* <X className="h-4 w-4" /> */}
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Enter Full Name"
                className="w-full border-gray-200"
                required
              />

              <Input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border-gray-200"
                required
              />

              <Input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border-gray-200"
                required
              />

              <Select onValueChange={handleCollegeChange}>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Choose College" />
                </SelectTrigger>
                <SelectContent>
                  {colleges.map((college) => (
                    <SelectItem key={college.value} value={college.value}>
                      {college.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                onValueChange={(value) => setSelectedProgram(value)}
                disabled={!selectedCollege}
                value={selectedProgram}
              >
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Select Program" />
                </SelectTrigger>
                <SelectContent>
                  {availablePrograms.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select disabled={!selectedProgram}>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Select Specialization" />
                </SelectTrigger>
                <SelectContent>
                  {selectedProgram === "MBA" &&
                    mbaComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "BBA" &&
                    bbaComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "MCA" &&
                    mcaComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "BCA" &&
                    bcaComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "Certification" &&
                    certifications.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "Nursing" &&
                    nursingComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                  {selectedProgram === "Graduation" &&
                    graduationComponents.map((component, index) => (
                      <SelectItem key={index} value={component.href}>
                        {formatTitleWithBoldParenthesis(component.title)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 mt-6"
              >
                Submit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
