import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HomeLayout/HeroSection";
import FeaturesSection from "../components/HomeLayout/FeaturesSection";
import Packages from "../components/HomeLayout/Packages";
import ValueSection from "../components/HomeLayout/ValueSection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Packages />
      <ValueSection />
    </>
  );
}

export default LandingPage;
