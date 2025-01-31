import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HomeLayout/HeroSection";
import FeaturesSection from "../components/HomeLayout/FeaturesSection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

export default LandingPage;
