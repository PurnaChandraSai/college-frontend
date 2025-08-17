import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-blue-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left Side: Logo & College Name */}
        <div className="flex items-center gap-3">
          <img
            src="raghu.webp"
            alt="College Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          <span
            className="font-bold text-xl md:text-2xl tracking-wide text-white transition-colors duration-500"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Raghu Engineering College
          </span>
        </div>

        {/* Right Side: Menu + Button */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8">
            {/* Use Link instead of <a> */}
            <Link
              to="/admission"
              className="relative font-medium text-white transition-all duration-300 hover:text-amber-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Admissions
              <span className="absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 w-0 hover:w-full"></span>
            </Link>

            <a
              href="#courses"
              className="relative font-medium text-white transition-all duration-300 hover:text-amber-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Courses
              <span className="absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 w-0 hover:w-full"></span>
            </a>

            <a
              href="#news"
              className="relative font-medium text-white transition-all duration-300 hover:text-amber-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              News
              <span className="absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 w-0 hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className="relative font-medium text-white transition-all duration-300 hover:text-amber-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 bg-amber-400 transition-all duration-300 w-0 hover:w-full"></span>
            </a>
          </div>

          {/* Apply Now Button */}
          <Link
            to="/admission" // ✅ navigate to admission page
            className="hidden md:inline-block px-6 py-2 rounded-lg font-semibold bg-amber-400 text-sky-900 hover:bg-amber-300 transition-all duration-300 shadow-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
