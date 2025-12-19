import Footer from "@/component/footer";
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

const badges = [
  {
    img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/nba-header-badge.png",
    name: "NBA Accreditation",
    note: "National Board of Accreditation certified",
  },
  {
    img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/aicte-header-badge.png",
    name: "AICTE Approved",
    note: "Recognized by AICTE for quality education",
  },
  {
    img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/jntug-header-badge.png",
    name: "JNTU-G Affiliation",
    note: "Affiliated to JNTU-G University",
  },
  {
    img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/iso-header-badge.png",
    name: "ISO Certified",
    note: "ISO 9001:2015 certified institution",
  },
  {
    img: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png?ssl=1",
    name: "NAAC Accreditation",
    note: "Recognized by NAAC for academic excellence",
  },
  {
    img: "https://www.pngkey.com/png/full/270-2706316_ugc-logo-ugc-net.png",
    name: "UGC Recognition",
    note: "University Grants Commission approved",
  },
];

const Achievements = () => {
  const AchievementCard = ({ achievement }) => (
    <div className="
      bg-white rounded-2xl shadow-lg 
      p-4 sm:p-6 
      flex flex-col justify-between
      transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300
    ">
      <div className="flex items-start sm:items-center space-x-4">
        <div className="p-3 bg-gray-100 rounded-full flex-shrink-0">
          {achievement.icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {achievement.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {achievement.description}
          </p>
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

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* 🔹 Badges Section */}
      <section className="bg-gray-50 py-10 sm:py-12 px-4 sm:px-6 mt-20 sm:mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Accreditations & Affiliations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={badge.img}
                  alt={badge.name}
                  className="h-16 sm:h-20 w-auto object-contain mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {badge.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {badge.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Achievements Section */}
      <section className="bg-gray-50 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
