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

const mbaComponents: { title: string; href: string }[] = [
  { title: "Logistic And Supply Chain", href: "/courses/mba/logistics" },
  {
    title: "International Business",
    href: "/courses/mba/international-business",
  },
  { title: "Business Analytics", href: "/courses/mba/business-analytics" },
  { title: "Digital Business", href: "/courses/mba/digital-business" },
  { title: "Human Resource", href: "/courses/mba/human-resource" },
  { title: "Marketing Management", href: "/courses/mba/marketing" },
  { title: "Operations Management", href: "/courses/mba/operations" },
  { title: "Infrastructure Management", href: "/courses/mba/infrastructure" },
  { title: "Oil And Gas", href: "/courses/mba/oil-and-gas" },
  { title: "Power Management", href: "/courses/mba/power" },
  { title: "Financial Management", href: "/courses/mba/finance" },
];

const bbaComponents: { title: string; href: string }[] = [
  { title: "Operations Management", href: "/courses/bba/operations" },
  { title: "Financial Management", href: "/courses/bba/finance" },
  { title: "Human Resource", href: "/courses/bba/hr" },
  { title: "Marketing Management", href: "/courses/bba/marketing" },
];

const bcaComponents: { title: string; href: string }[] = [
  { title: "Cloud Computing & Cyber Security", href: "/courses/bca/cloud" },
  { title: "New Age Technology", href: "/courses/bca/new-tech" },
  { title: "Data Analytics", href: "/courses/bca/data-analytics" },
];

const certifications: { title: string; href: string }[] = [
  { title: "Logistic & Supply Chain", href: "/certifications/logistics" },
  { title: "Industrial Safety", href: "/certifications/safety" },
  { title: "Renewable Energy", href: "/certifications/energy" },
  { title: "Human Resource", href: "/certifications/hr" },
  { title: "Business Analytics", href: "/certifications/analytics" },
  { title: "Marketing Management", href: "/certifications/marketing" },
  { title: "Operations Management", href: "/certifications/operations" },
  { title: "Financial Management", href: "/certifications/finance" },
  { title: "Project Management", href: "/certifications/project" },
  { title: "Air Business Management", href: "/certifications/air-business" },
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

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                      <Link href="/about">About Us</Link>
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
                                            {component.title}
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
                                            {component.title}
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
                                            {component.title}
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
                                            {component.title}
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
                      <Link href="/blog">Blog</Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact" className="">
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
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/courses" legacyBehavior passHref>
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
                          className="block text-sm leading-none text-muted-foreground hover:text-primary"
                        >
                          {component.title}
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
                          className="block text-sm leading-none text-muted-foreground hover:text-primary"
                        >
                          {component.title}
                        </Link>
                      ))}
                    </div>
                    <h4 className="font-medium leading-none pt-4">BCA</h4>
                    <div className="space-y-3">
                      {bcaComponents.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="block text-sm leading-none text-muted-foreground hover:text-primary"
                        >
                          {component.title}
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
                          className="block text-sm leading-none text-muted-foreground hover:text-primary"
                        >
                          {component.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="row-span-3">
                    <div className="relative h-full w-full">
                      <Image
                        src="/ad.jpg"
                        alt="Featured Course"
                        fill
                        className="object-cover  rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 rounded-lg" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold">Featured Course</h3>
                        <p className="text-sm">Explore our top programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg`}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg`}
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
          <Button className="bg-orange-500 hover:bg-orange-600">
            Enroll Now
          </Button>
        </div>
      </div>
    </header>
  );
}
