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
      setCurrentIndex((prevIndex) => (prevIndex + 2) % newsItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  // Show two at a time
  const visibleItems = [
    newsItems[currentIndex],
    newsItems[(currentIndex + 1) % newsItems.length],
  ];

  return (
    <section className="relative w-full bg-blue-900 text-white overflow-hidden py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        
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
          <h2 className="text-3xl font-bold mb-2">NEWS</h2>
          <p className="text-lg mb-6">Stay updated with latest NEWS</p>

          <div className="grid grid-cols-2 gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-500"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3 text-sm font-semibold truncate">
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
