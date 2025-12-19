import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; // ✅ import Link

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="Raghu.mp4" // Place Raghu.mp4 in your public folder
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col">
        {/* Navbar */}
       

        {/* Hero Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Future Leaders
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Raghu Engineering College focuses on academic excellence, innovative research, 
            and holistic student development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* ✅ Apply Now navigates to /admission */}
            <Link
              to="/admission"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-md text-white font-medium transition-colors duration-300"
            >
              Apply Now
            </Link>

            <a
              href="#courses"
              className="px-6 py-3 border border-white hover:bg-amber-200 hover:text-blue-700 rounded-md text-white font-medium transition-colors duration-300"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade Blur with Text */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Fade Blur */}
        <div className="w-full h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm"></div>

        {/* Text inside fade area */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <p className="text-white text-lg md:text-xl font-medium px-4 text-center">
            Celebrating 20+ Years of Excellence in Engineering Education
          </p>
        </div>
      </div>
    </section>
  );
}
