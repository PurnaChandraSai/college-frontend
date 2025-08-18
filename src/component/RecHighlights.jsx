import React from "react";
import { FileText, GraduationCap, Globe } from "lucide-react";

export default function RecHighlights() {
  const cards = [
    {
      title: "Ranking and Recognition",
      icon: <FileText size={28} />,
      date: "2024",
      status: "Top Rated",
      description: [
        "REC consistently ranked among top engineering colleges in Andhra Pradesh.",
        "Recognized by AICTE & NAAC with top accreditation.",
        "Among top private engineering colleges in South India.",
        "Strong presence in national level technical competitions and hackathons."
      ]
    },
    {
      title: "Placements",
      icon: <GraduationCap size={28} />,
      date: "2024",
      status: "High Success",
      description: [
        "Over 3000+ offers every year across top companies.",
        "Dream & Super Dream offers from leading MNCs.",
        "Highest package of ₹44 LPA.",
        "Strong industry internships and training programs.",
        "Regular placement drives with 200+ recruiters."
      ]
    },
    {
      title: "International Relations",
      icon: <Globe size={28} />,
      date: "2024",
      status: "Global Exposure",
      description: [
        "Academic collaborations with international universities.",
        "Student exchange and joint research opportunities.",
        "Global exposure through MOUs with foreign institutions.",
        "Encouragement for higher studies abroad."
      ]
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-inter">
          Raghu Engineering College
        </h2>
        <div className="w-20 h-[3px] bg-[#3498db] mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-gray-600 italic text-lg font-light">
          A place to learn, A chance to grow
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer"
          >
            {/* Icon & Status */}
            <div className="flex items-center justify-between mb-6">
              <div className="bg-[#3498db] text-white p-4 rounded-full flex items-center justify-center">
                {card.icon}
              </div>
              {card.status && (
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  {card.status}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-inter">
              {card.title}
            </h3>

            {/* Date */}
            <p className="text-gray-400 text-sm mb-4">{card.date}</p>

            {/* Description */}
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {card.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
