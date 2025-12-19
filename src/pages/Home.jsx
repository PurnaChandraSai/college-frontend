import React from "react";
// import "../index.css"; // Make sure your CSS includes the text-shadow class
import HeroSection from "@/component/HeroSection";
import CollegeInfo from "@/component/CollegeInfo";
import RECNewsSlider from "@/component/RECNewsSlider";
import RecHighlights from "@/component/RecHighlights";
import Footer from "@/component/footer";
import Achievements from "./News";
import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Achievements />
      <RecHighlights />
      <CollegeInfo />
      <RECNewsSlider />
      <Footer />
    </div>
  );
}
