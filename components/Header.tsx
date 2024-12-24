"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { VisuallyHidden } from "@/components/ui/VisuallyHidden";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollmentModal } from "./EnrollmentModal";

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
    href: "/upes-online/bba/financial-management",
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
    href: "/upes-online/certification/logistics-and-supply-chain",
  },
  {
    title: "Industrial Safety",
    href: "/upes-online/certification/industrial-safety",
  },
  {
    title: "Renewable Energy",
    href: "/upes-online/certification/renewable-energy",
  },
  {
    title: "Human Resource",
    href: "/upes-online/certification/human-resource",
  },
  {
    title: "Business Analytics",
    href: "/upes-online/certification/business-analytics",
  },
  {
    title: "Marketing Management",
    href: "/upes-online/certification/marketing-management",
  },
  {
    title: "Operations Management",
    href: "/upes-online/certification/operations-management",
  },
  {
    title: "Financial Management",
    href: "/upes-online/certification/finance-management",
  },
  {
    title: "Project Management",
    href: "/upes-online/certification/project-management",
  },
  {
    title: "Air Business Management",
    href: "/upes-online/certification/air-business-management",
  },
];

const scrollbarStyles = `
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;

const highlightBrackets = (text: string) => {
  return text.replace(
    /\(([^)]+)\)/g,
    (match, p1) =>
      `(${p1 ? `<span class=" text-orange-800 ">${p1}</span>` : match})`
  );
};

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky  top-0 z-50 w-full shadow-lg border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" max-w-6xl mx-auto justify-center items-center flex h-24 ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <VisuallyHidden>
              <h2>Navigation Menu</h2>
            </VisuallyHidden>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-20 w-auto"
                />
              </Link>
              {/* phone content */}
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/">Home</Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/about-us">About Us</Link>
                    </Button>
                  </li>
                  <li>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="courses">
                        <AccordionTrigger>Courses</AccordionTrigger>
                        <AccordionContent>
                          <div
                            className={`max-h-[60vh] overflow-y-auto ${scrollbarStyles}`}
                          >
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              <AccordionItem value="mba">
                                <AccordionTrigger>MBA</AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2">
                                    {mbaComponents.map((component) => (
                                      <li key={component.href}>
                                        <Button
                                          asChild
                                          variant="ghost"
                                          className="w-full justify-center"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <Link href={component.href}>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: highlightBrackets(
                                                  component.title
                                                ),
                                              }}
                                            />
                                          </Link>
                                        </Button>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="bba">
                                <AccordionTrigger>BBA</AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2">
                                    {bbaComponents.map((component) => (
                                      <li key={component.href}>
                                        <Button
                                          asChild
                                          variant="ghost"
                                          className="w-full justify-start"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <Link href={component.href}>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: highlightBrackets(
                                                  component.title
                                                ),
                                              }}
                                            />
                                          </Link>
                                        </Button>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="bca">
                                <AccordionTrigger>BCA</AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2">
                                    {bcaComponents.map((component) => (
                                      <li key={component.href}>
                                        <Button
                                          asChild
                                          variant="ghost"
                                          className="w-full justify-start"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <Link href={component.href}>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: highlightBrackets(
                                                  component.title
                                                ),
                                              }}
                                            />
                                          </Link>
                                        </Button>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="certifications">
                                <AccordionTrigger>
                                  Certifications
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2">
                                    {certifications.map((component) => (
                                      <li key={component.href}>
                                        <Button
                                          asChild
                                          variant="ghost"
                                          className="w-full justify-start"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <Link href={component.href}>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: highlightBrackets(
                                                  component.title
                                                ),
                                              }}
                                            />
                                          </Link>
                                        </Button>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/blogs">Blog</Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/college">Colleges</Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact-us" className="">
                        Contact Us
                      </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
              {/* phone content */}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-20 w-auto"
          />
        </Link>
        <NavigationMenu className="hidden  lg:flex">
          <NavigationMenuList className="">
            <NavigationMenuItem className="">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg bg-transparent`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg bg-transparent`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <Link href="/courses" legacyBehavior passHref className="">
                  Courses
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[1000px] grid-cols-4 p-4">
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none">MBA</h4>
                    <div className="space-y-3">
                      {mbaComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none">BBA</h4>
                    <div className="space-y-3">
                      {bbaComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                    <h4 className="font-medium leading-none pt-4">BCA</h4>
                    <div className="space-y-3">
                      {bcaComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                    <h4 className="font-medium leading-none pt-4">
                      Graduation Program
                    </h4>
                    <div className="space-y-3">
                      {graduationComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none">Certifications</h4>
                    <div className="space-y-3">
                      {certifications.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none">MCA</h4>
                    <div className="space-y-3">
                      {mcaComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                    <h4 className="font-medium leading-none">Nursing</h4>
                    <div className="space-y-3">
                      {nursingComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-orange-600"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: highlightBrackets(component.title),
                            }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg bg-transparent`}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/college" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg bg-transparent`}
                >
                  Colleges
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg bg-transparent`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center ml-auto space-x-4">
          <form className="hidden sm:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for course..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <div className="">
            <EnrollmentModal />
          </div>
        </div>
      </div>
    </header>
  );
}
