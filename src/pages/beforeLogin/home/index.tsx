import React from "react";
import LandingPageHeader from "../_components/landingPageHeader";
import HeroSection from "../_components/heroSection";
import DaysSection from "../_components/daySection";
import EventSection from "../_components/event/eventSection";

const Home: React.FC = () => {
  return (
    <div className="w-full ">
      <LandingPageHeader />
      <HeroSection />
      <DaysSection />
      <EventSection />
    </div>
  );
};

export default Home;
