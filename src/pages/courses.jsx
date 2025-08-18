import Navbar from "@/component/Navbar";
import { FaLaptopCode, FaCogs, FaProjectDiagram, FaBuilding, FaBolt } from "react-icons/fa";

export default function CoursesSection() {
  const courses = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-700 mb-4" />,
      title: "Computer Science & Engineering",
      description: "AI, Machine Learning, Software Development, Cloud Computing.",
      duration: "4 Years",
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-green-600 mb-4" />,
      title: "Electronics & Communication Engineering",
      description: "Communication Systems, Microelectronics, Signal Processing.",
      duration: "4 Years",
    },
    {
      icon: <FaCogs className="text-4xl text-red-500 mb-4" />,
      title: "Mechanical Engineering",
      description: "Design, Manufacturing, Thermodynamics, Industrial Engineering.",
      duration: "4 Years",
    },
    {
      icon: <FaBuilding className="text-4xl text-yellow-500 mb-4" />,
      title: "Civil Engineering",
      description: "Structural Design, Construction Management, Urban Planning.",
      duration: "4 Years",
    },
    {
      icon: <FaBolt className="text-4xl text-purple-600 mb-4" />,
      title: "Electrical Engineering",
      description: "Power Systems, Circuits, Electrical Machines, Renewable Energy.",
      duration: "4 Years",
    },
  ];

  return (
    <div>
      <Navbar/>
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Duration: {course.duration}
              </span>
              <button className="mt-auto px-6 py-2 bg-amber-400 text-sky-900 font-semibold rounded-lg hover:bg-amber-300 transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
