import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const badges = [
  { img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/nba-header-badge.png", name: "NBA" },
  { img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/aicte-header-badge.png", name: "AICTE" },
  { img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/jntug-header-badge.png", name: "JNTU-G" },
  { img: "https://www.raghuenggcollege.com/wp-content/uploads/2023/06/iso-header-badge.png", name: "ISO" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Admissions", path: "/admissions", badge: "Open" },
  { name: "Academics", path: "/courses", badge: "New" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${scrolled ? "bg-white/95 shadow" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo Only */}
        <div className="flex items-center gap-3">
          <img src="/raghu.webp" alt="College Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`relative font-medium transition-all duration-300 ${location.pathname === item.path ? "text-amber-600" : "text-gray-800 hover:text-amber-500"}`}
            >
              {item.name}
              {item.badge && (
                <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-amber-400 text-gray-900 rounded-full animate-pulse">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Badges */}
          <div className="flex items-center gap-3">
            {badges.map((badge) => (
              <img key={badge.name} src={badge.img} alt={badge.name} className="h-6 w-auto object-contain" title={badge.name} />
            ))}
          </div>

          {/* Apply Button */}
          <Link
            to="/admissions"
            className="px-5 py-2 font-semibold bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-300 transition-all"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setOpenMenu(!openMenu)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="md:hidden bg-white/95 px-4 py-4 space-y-3 shadow-lg mb-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block font-medium text-gray-800"
              onClick={() => setOpenMenu(false)}
            >
              {item.name}
              {item.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-400 text-gray-900 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Mobile Badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((badge) => (
              <img key={badge.name} src={badge.img} alt={badge.name} className="h-6 w-auto object-contain" title={badge.name} />
            ))}
          </div>

          <Link
            to="/admissions"
            className="block mt-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg text-center font-semibold"
            onClick={() => setOpenMenu(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
