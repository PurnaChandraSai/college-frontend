import Navbar from "@/component/Navbar";
import { 
  FaLaptopCode, 
  FaCogs, 
  FaProjectDiagram, 
  FaBuilding, 
  FaBolt, 
  FaDatabase, 
  FaNetworkWired 
} from "react-icons/fa";

export default function CoursesSection() {
  const courses = [
    {
      icon: <FaLaptopCode className="text-4xl sm:text-5xl text-blue-600 mb-4" />,
      title: "Computer Science & Engineering",
      description: "AI, Machine Learning, Software Development, Cloud Computing.",
      duration: "4 Years",
    },
    {
      icon: <FaProjectDiagram className="text-4xl sm:text-5xl text-green-500 mb-4" />,
      title: "Electronics & Communication Engineering",
      description: "Communication Systems, Microelectronics, Signal Processing.",
      duration: "4 Years",
    },
    {
      icon: <FaCogs className="text-4xl sm:text-5xl text-red-500 mb-4" />,
      title: "Mechanical Engineering",
      description: "Design, Manufacturing, Thermodynamics, Industrial Engineering.",
      duration: "4 Years",
    },
    {
      icon: <FaBuilding className="text-4xl sm:text-5xl text-yellow-500 mb-4" />,
      title: "Civil Engineering",
      description: "Structural Design, Construction Management, Urban Planning.",
      duration: "4 Years",
    },
    {
      icon: <FaBolt className="text-4xl sm:text-5xl text-purple-600 mb-4" />,
      title: "Electrical Engineering",
      description: "Power Systems, Circuits, Electrical Machines, Renewable Energy.",
      duration: "4 Years",
    },
    {
      icon: <FaDatabase className="text-4xl sm:text-5xl text-indigo-500 mb-4" />,
      title: "Computer Science & Design (CSD)",
      description: "UI/UX, Creative Computing, Web & Mobile App Design.",
      duration: "4 Years",
    },
    {
      icon: <FaNetworkWired className="text-4xl sm:text-5xl text-teal-500 mb-4" />,
      title: "Computer Science  ML & AI  (CSM)",
      description: "Algorithms, Data Structures, Mathematical Computing.",
      duration: "4 Years",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-10 sm:mb-16">
            Explore Our Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div>{course.icon}</div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 mt-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {course.description}
                </p>

                <span className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-6">
                  Duration: {course.duration}
                </span>

                <button className="mt-auto px-5 sm:px-6 py-2 bg-amber-400 text-sky-900 font-semibold rounded-lg hover:bg-amber-300 transition-all duration-300">
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
