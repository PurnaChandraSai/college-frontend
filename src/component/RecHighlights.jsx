import React from "react";
import { FileText, GraduationCap, Globe } from "lucide-react"; // icons

export default function RecHighlights() {
  return (
    <section className="w-full bg-white py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0c2d57]">
          Raghu Engineering College
        </h2>
        <div className="w-16 h-[2px] bg-yellow-500 mx-auto mt-2"></div>
        <p className="mt-4 italic text-lg text-gray-700">
          A place to learn, A chance to grow
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Ranking and Recognition */}
        <div className="shadow-lg rounded-md p-8 border border-gray-200 bg-white">
          <div className="flex justify-center mb-6">
            <div className="bg-[#0c2d57] text-white p-4 rounded-full">
              <FileText size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-4 text-[#0c2d57]">
            RANKING AND RECOGNITION
          </h3>
          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>REC consistently ranked among top engineering colleges in Andhra Pradesh.</li>
            <li>Recognized by AICTE & NAAC with top accreditation.</li>
            <li>Among top private engineering colleges in South India.</li>
            <li>Strong presence in national level technical competitions and hackathons.</li>
          </ul>
        </div>

        {/* Placements */}
        <div className="shadow-lg rounded-md p-8 border border-gray-200 bg-white">
          <div className="flex justify-center mb-6">
            <div className="bg-[#0c2d57] text-white p-4 rounded-full">
              <GraduationCap size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-4 text-[#0c2d57]">
            PLACEMENTS
          </h3>
          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>Over <strong>3000+ offers</strong> every year across top companies.</li>
            <li>Dream & Super Dream offers from leading MNCs.</li>
            <li>Highest package of <strong>₹44 LPA</strong>.</li>
            <li>Strong industry internships and training programs.</li>
            <li>Regular placement drives with 200+ recruiters.</li>
          </ul>
        </div>

        {/* International Relations */}
        <div className="shadow-lg rounded-md p-8 border border-gray-200 bg-white">
          <div className="flex justify-center mb-6">
            <div className="bg-[#0c2d57] text-white p-4 rounded-full">
              <Globe size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-4 text-[#0c2d57]">
            INTERNATIONAL RELATIONS
          </h3>
          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>Academic collaborations with international universities.</li>
            <li>Student exchange and joint research opportunities.</li>
            <li>Global exposure through MOUs with foreign institutions.</li>
            <li>Encouragement for higher studies abroad.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
