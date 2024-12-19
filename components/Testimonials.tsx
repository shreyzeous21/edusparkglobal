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
  date: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Stokes",
    date: "10 October 2024",
    content:
      "I can't thank Your Law Firm Name enough for their unwavering support during my divorce. Their team of lawyers guided me with compassion and expertise, making a challenging process feel manageable. I highly recommend their services to & lawyer.",
    image: "/upes.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Ben Stokes",
    date: "10 October 2024",
    content:
      "I can't thank Your Law Firm Name enough for their unwavering support during my divorce. Their team of lawyers guided me with compassion and expertise, making a challenging process feel manageable. I highly recommend their services to & lawyer.",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
  },
  {
    id: 3,
    name: "Charlie Stokes",
    date: "11 October 2024",
    content:
      "Exceptional service from Your Law Firm Name during my property dispute. Their attention to detail and strategic approach led to a favorable outcome. Highly recommended for anyone needing expert legal assistance.",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
  },
  {
    id: 4,
    name: "Dana Stokes",
    date: "12 October 2024",
    content:
      "Your Law Firm Name provided outstanding support during my business litigation. Their team's expertise and dedication were crucial in resolving the case efficiently. I'm grateful for their professional and personalized service.",
    image: "/placeholder.svg?height=64&width=64",
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
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.date}
                            </div>
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
