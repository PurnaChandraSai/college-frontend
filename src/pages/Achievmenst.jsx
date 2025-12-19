import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const batches = [
    {
      id: 1,
      image: "/images/batch1.jpg",
      title: "2022 Batch",
      note: "A passionate group of learners who shaped the foundation year.",
    },
    {
      id: 2,
      image: "/images/batch2.jpg",
      title: "2023 Batch",
      note: "A creative batch that brought innovation to every project.",
    },
    {
      id: 3,
      image: "/images/batch3.jpg",
      title: "2024 Batch",
      note: "The energetic batch pushing boundaries of learning & growth.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          Our Batches
        </h2>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {batches.map((batch) => (
            <Card
              key={batch.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={batch.image}
                alt={batch.title}
                className="w-full h-44 sm:h-48 object-cover rounded-t-2xl"
                loading="lazy"
              />

              <CardContent className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {batch.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {batch.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
