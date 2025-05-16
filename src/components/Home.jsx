import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectData from "../util/projectData.jsx";

const Home = () => {
  const first = ProjectData[0];
  const second = ProjectData[1];
  const third = ProjectData[3];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="p-10 bg-purple-700 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-5xl text-white font-serif font-medium">
          Powering Industry Through Smart Automation
        </div>
        <div className="mt-6 md:mt-0">
          {/* Placeholder for image or content */}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-10 px-4 sm:px-10 bg-gray-50">
        <div className="text-green-500 font-serif text-center text-4xl font-bold mb-2">
          Our Services
        </div>
        <div className="text-center font-serif text-xl font-semibold mb-10">
          High-impact Services for your Business
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 h-48 bg-gray-200 rounded-lg shadow-md text-gray-700">
            <h1 className="font-semibold mb-2">Control Panel Design</h1>
            <p>
              Custom-built panels for safe and efficient operations. Designed to meet your industrial requirements. End-to-end panel design and setup.
            </p>
          </div>
          <div className="p-6 h-48 bg-gray-200 rounded-lg shadow-md text-gray-700">
            <h1 className="font-semibold mb-2">Industrial Wiring & Maintenance</h1>
            <p>
              Reliable wiring for heavy-duty environments. Safe installations and routine upkeep. Minimize risks and downtime.
            </p>
          </div>
          <div className="p-6 h-48 bg-gray-200 rounded-lg shadow-md text-gray-700">
            <h1 className="font-semibold mb-2">PLC & SCADA Integration</h1>
            <p>
              Smart automation with real-time control. Remote monitoring and data access. Boost efficiency through integration.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
            IMG
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h1>
            <h2 className="text-xl text-purple-700 font-semibold mb-4">
              "Smart Automation, Reliable Execution."
            </h2>
            <p className="text-gray-700 mb-6">
              Experienced professionals delivering reliable, high-quality solutions tailored to your needs. We combine technical expertise with scalable, custom services for every project. On-time delivery and long-term performance are at the core of what we do.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <h1 className="text-2xl font-semibold text-purple-700">20+</h1>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-purple-700">230+</h1>
                <p className="text-sm text-gray-600">Certified Engineers</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-purple-700">150+</h1>
                <p className="text-sm text-gray-600">Companies Helped</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-purple-700">120+</h1>
                <p className="text-sm text-gray-600">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl text-center mb-6">Recent Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[first, second, third].map((project, index) => (
              <div key={index} className="bg-white rounded shadow-md overflow-hidden">
                <img src={project.url} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl text-center mb-6">What Our Clients Say</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div className="p-4 bg-white rounded shadow-md">
              <h1 className="font-semibold text-purple-700 mb-2">Innovation & Support</h1>
              <p>
                "Impressive creativity backed by strong technical skills. The support throughout the process was outstanding, and the final outcome truly added value to our operations."
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h1 className="font-semibold text-purple-700 mb-2">Efficiency & Reliability</h1>
              <p>
                "Reliable, efficient, and result-driven. The project was completed on time and exceeded expectations. A great experience from start to finish with consistent performance throughout."
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h1 className="font-semibold text-purple-700 mb-2">Professionalism & Quality</h1>
              <p>
                "Exceptional work delivered with professionalism and attention to detail. The team demonstrated technical expertise, clear communication, and a deep understanding of our needs. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
