import React from "react";
import HeroSlider from "./_components/HeroSlider";
import TopFeatures from "@/components/TopFeatures";
import HomeBand from "./_components/HomeBand";
import { Separator } from "@/components/ui/separator";
import MbaCart from "./_components/MbaCart";
import BbaCart from "./_components/BbaCart";
import EmailBanner from "./_components/EmailBanner";
import HomeCollage from "./_components/HomeCollage";
import Steps from "@/components/Steps";
import TestimonialsSection from "@/components/Testimonials";
import AllCart from "./_components/AllCart";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSlider />
      <TopFeatures />
      <HomeBand />
      <HomeCollage />
      <Separator />
      <AllCart />
      <Separator />
      <MbaCart />
      <Separator />
      <BbaCart />
      <EmailBanner />
      <TestimonialsSection />
      <Steps />
    </div>
  );
};

export default Home;
