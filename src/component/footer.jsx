import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Address & Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">
            Raghu Engineering College
          </h4>
          <p>Dakamarri, Bheemunipatnam Mandal,</p>
          <p>Visakhapatnam – 531162, Andhra Pradesh, India</p>
          <p className="mt-2">Tel: +91-891-2564949</p>
          <p>Mobile: +91-9848194924</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@raghuenggcollege.com"
              className="text-blue-400 hover:underline"
            >
              info@raghuenggcollege.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About REC</a></li>
            <li><a href="/admissions" className="hover:text-blue-400">Admissions</a></li>
            <li><a href="/departments" className="hover:text-blue-400">Departments</a></li>
            <li><a href="/placements" className="hover:text-blue-400">Placements</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="/anti-ragging" className="hover:text-blue-400">Anti-Ragging</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Other Links</h4>
          <ul className="space-y-2">
            <li><a href="/library" className="hover:text-blue-400">Library</a></li>
            <li><a href="/alumni" className="hover:text-blue-400">Alumni Portal</a></li>
            <li><a href="/research" className="hover:text-blue-400">Research & Innovation</a></li>
            <li><a href="/student" className="hover:text-blue-400">Student Services</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raghu Engineering College. All Rights Reserved.
      </div>
    </footer>
  );
}
