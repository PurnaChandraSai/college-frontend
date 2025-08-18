import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b2545] to-[#0c2d57] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Address & Contact */}
        <div className="bg-[#0c2d57] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-white text-xl font-semibold mb-4">Raghu Engineering College</h4>
          <p className="flex items-center gap-2 mb-1">
            <FaMapMarkerAlt className="text-blue-400" /> Dakamarri, Bheemunipatnam Mandal
          </p>
          <p className="ml-5 mb-2">Visakhapatnam – 531162, Andhra Pradesh, India</p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" /> +91-891-2564949
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-400" /> +91-9848194924
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <a
              href="mailto:info@raghuenggcollege.com"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              info@raghuenggcollege.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-[#0c2d57] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {["About REC", "Admissions", "Departments", "Placements", "Contact Us", "Anti-Ragging", "Terms & Conditions"].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div className="bg-[#0c2d57] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-white text-xl font-semibold mb-4">Other Links</h4>
          <ul className="space-y-3">
            {["Library", "Alumni Portal", "Research & Innovation", "Student Services"].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raghu Engineering College. All Rights Reserved.
      </div>
    </footer>
  );
}
