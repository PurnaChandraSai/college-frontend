import React from "react";
import { FaAward, FaStar, FaMedal } from "react-icons/fa";

// Minimalistic Achievement Data
const achievementsData = [
  {
    title: "Top Placements",
    description: "100% placements in top IT companies.",
    icon: <FaAward size={25} className="text-blue-500" />,
    date: "March 2025",
  },
  {
    title: "National Hackathon Winner",
    description: "Won multiple national hackathons.",
    icon: <FaMedal size={25} className="text-green-500" />,
    date: "January 2025",
  },
  {
    title: "Research Publication",
    description: "Published research in top-tier journals.",
    icon: <FaStar size={25} className="text-yellow-500" />,
    date: "February 2025",
  },
];

const AchievementCard = ({ achievement }) => (
  <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300">
    <div className="mb-2">{achievement.icon}</div>
    <h3 className="text-md font-semibold text-gray-800 text-center">{achievement.title}</h3>
    <p className="text-gray-500 text-sm text-center mt-1">{achievement.description}</p>
    <span className="text-gray-400 text-xs mt-2">{achievement.date}</span>
  </div>
);

const AchievementScroller = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Our Achievements
      </h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
        {achievementsData.map((ach, idx) => (
          <AchievementCard key={idx} achievement={ach} />
        ))}
      </div>
    </section>
  );
};

export default AchievementScroller;
