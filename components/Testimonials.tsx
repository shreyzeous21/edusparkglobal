"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  // date: string;
  content: string;
  // image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Umesh Mishra",
    content:
      "I recently used EduSpark Global to research various colleges and courses, and I must say, the platform exceeded my expectations. It provided accurate, up-to-date information, and the details were precise, enabling me to make well-informed decisions. The user-friendly interface and well-organized content made it easy to compare different institutions and programs effortlessly.",

    rating: 5,
  },
  {
    id: 2,
    name: "Vaishnavi Kumari",
    content:
      "EduSpark Global is an excellent platform for students seeking information about colleges and courses. It offers detailed college profiles, including admission requirements, available courses, and placement statistics. The site is intuitive and easy to navigate, allowing students to quickly find the information they need. EduSpark Global also provides expert counseling services to help students choose the right course and institution.",

    rating: 5,
  },
  {
    id: 3,
    name: "Deepak Kumar",
    content:
      "EduSpark Global is the best platform for easily finding the right online university. The counselors are incredibly polite and supportive, guiding me through every step of the MBA admission process. They stay in touch throughout the entire duration of the program, offering continuous support. I highly recommend EduSpark Global!",

    rating: 5,
  },
  {
    id: 4,
    name: "John Oliver",
    content:
      "EduSpark Global has been an absolute game-changer in my college application journey. From personalized advice to meticulous essay editing, they provided exceptional service every step of the way. The consultants are not only highly knowledgeable but also incredibly supportive.Thanks to EduSpark Global, I wholeheartedly recommend their services to anyone navigating the college application process!",

    rating: 5,
  },
];

const OPTIONS: EmblaOptionsType = {
  align: "start",
  loop: true,
  skipSnaps: false,
  inViewThreshold: 0.7,
};

const SLIDE_COUNT = testimonials.length;
const SLIDES_PER_VIEW_MOBILE = 1;
const SLIDES_PER_VIEW_DESKTOP = 2;

const truncateText = (text: string, maxLength: number = 500) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="">
      <div className="max-w-6xl gap-4 justify-center items-center px-4 mx-auto">
        <div className="mb-12 text-center w-full justify-center mx-auto flex flex-col gap-4">
          <Button
            variant={"outline"}
            className="justify-center mx-auto flex items-center"
          >
            Testimonials
          </Button>
          <h2 className="lg:text-5xl text-4xl font-bold flex items-center">
            What Students Think and Say About EduSpark
            {/* <span className="text-orange-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-12"
              >
                <path
                  d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span> */}
          </h2>
          <p className="text-sm">
            EduSpark Global provides the perfect balance of flexibility and
            high-quality education, helping me achieve my professional goals.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%]"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-6">
                        {truncateText(testimonial.content)}
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          /> */}
                          <div>
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                            {/* <div className="text-sm text-muted-foreground">
                              {testimonial.date}
                            </div> */}
                          </div>
                        </div>
                        <div className="text-4xl text-muted-foreground/20">
                          <Quote />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center  gap-4 mt-8">
            <Button
              onClick={scrollPrev}
              variant="secondary"
              size="icon"
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className=" h-4 w-4" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="secondary"
              size="icon"
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
