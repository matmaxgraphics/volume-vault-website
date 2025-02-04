import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HomeLayout/HeroSection";
import FeaturesSection from "../components/HomeLayout/FeaturesSection";
import Packages from "../components/HomeLayout/Packages";
import ValueSection from "../components/HomeLayout/ValueSection";
import Referral from "../components/HomeLayout/Referral";
import Faqs from "../components/HomeLayout/Faqs";
import SecondaryCta from "../components/HomeLayout/SecondaryCta";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Packages />
      <ValueSection />
      <Referral />
      <Faqs />
      <SecondaryCta />
      <Footer />
    </>
  );
}

export default LandingPage;
