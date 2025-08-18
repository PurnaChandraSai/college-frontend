import React, { useState, useEffect } from "react";

export default function RECNewsSlider() {
  const newsItems = [
    { img: "/placements.jpeg", title: "REC Placements Drive" },
    { img: "/placements2.jpg", title: "Students with Offers" },
    { img: "/placements7.jpg", title: "Campus Hiring" },
    { img: "/placements2.jpg", title: "New Recruiters Visit" },
    { img: "/placements8.jpg", title: "Career Guidance" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  // Show two at a time
  const visibleItems = [
    newsItems[currentIndex],
    newsItems[(currentIndex + 1) % newsItems.length],
  ];

  return (
    <section className="relative w-full bg-[#1e3a8a] overflow-hidden py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left Side: Map */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <img
            src="https://vit.ac.in/wp-content/uploads/2023/07/Map-1-copy.webp"
            alt="World Map"
            className="w-full h-auto object-contain opacity-80"
          />
        </div>

        {/* Right Side: News */}
        <div className="w-full md:w-1/2 relative">
          <h2 className="text-3xl font-bold mb-2 text-white">NEWS</h2>
          <p className="text-lg mb-6 text-white/80">
            Stay updated with latest NEWS
          </p>

          <div className="flex gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white text-black rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105"
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/40 to-transparent text-white font-semibold text-sm truncate">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
