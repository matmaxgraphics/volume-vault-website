import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./scss/main.css"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
