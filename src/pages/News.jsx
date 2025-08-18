import Navbar from "@/component/Navbar";
import React from "react";
import { FaAward, FaStar, FaMedal } from "react-icons/fa";

const achievementsData = [
  {
    title: "Top Placements",
    description: "Our students achieved 100% placements in top IT companies.",
    icon: <FaAward size={30} className="text-blue-500" />,
    date: "March 2025",
    badge: "Featured",
  },
  {
    title: "National Level Hackathon Winner",
    description: "Our college teams won multiple national hackathons this year.",
    icon: <FaMedal size={30} className="text-green-500" />,
    date: "January 2025",
  },
  {
    title: "Research Publication",
    description: "Students published research in top-tier journals.",
    icon: <FaStar size={30} className="text-yellow-500" />,
    date: "February 2025",
    badge: "New",
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-100 rounded-full">{achievement.icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
          <p className="text-gray-500 text-sm">{achievement.description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-400 text-xs">{achievement.date}</span>
        {achievement.badge && (
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
            {achievement.badge}
          </span>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div>
    <Navbar/>
    <section className="bg-gray-50 py-12 px-6 mt-24">
        
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((ach, index) => (
            <AchievementCard key={index} achievement={ach} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Achievements;
