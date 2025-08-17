import React from "react";

export default function RECAdmissions() {
  return (
    <section className="w-full py-16 bg-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://vit.ac.in/wp-content/uploads/2024/01/home-page-admission-1024x823.webp"
            alt="REC Admissions"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            About Raghu Engineering College (REC)
          </h2>
          <p className="text-gray-700 text-lg">
            REC Group of Institutions offers{" "}
            <span className="font-semibold">71 Undergraduate</span>,{" "}
            <span className="font-semibold">58 Postgraduate</span>,{" "}
            <span className="font-semibold">15 Integrated</span>,{" "}
            <span className="font-semibold">2 Research programmes</span> and{" "}
            <span className="font-semibold">2 M.Tech Industrial Programmes</span>.
          </p>
          <p className="text-gray-700 text-lg">
            In addition, REC provides full-time Ph.D. opportunities in Engineering, 
            Management, Science, and Languages, along with direct Ph.D. programmes 
            in engineering disciplines.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Undergraduate
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Postgraduate
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Research
            </button>
          </div>
          <p className="text-gray-700 text-lg mt-4">
            Students admitted to REC register in one of the schools based on the 
            degree/programme they choose to pursue.
          </p>
          <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition self-start">
            Explore More →
          </button>
        </div>
      </div>
    </section>
  );
}
