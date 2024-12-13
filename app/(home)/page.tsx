import React from "react";
import HeroSlider from "./_components/HeroSlider";
import TopFeatures from "./_components/TopFeatures";
import HomeBand from "./_components/HomeBand";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSlider />
      <TopFeatures />
      <HomeBand />
    </div>
  );
};

export default Home;
