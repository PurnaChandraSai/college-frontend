import React from "react";
// import "../index.css"; // Make sure your CSS includes the text-shadow class
import HeroSection from "@/component/HeroSection";
import CollegeInfo from "@/component/CollegeInfo";
import RECNewsSlider from "@/component/RECNewsSlider";
import RecHighlights from "@/component/RecHighlights";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <HeroSection/>
      <RecHighlights/>
      <CollegeInfo/>  
      <RECNewsSlider/>
      <Footer/>
    </div>
  );
}
