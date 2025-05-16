import React from "react";
import ProjectData from "../util/projectData.jsx"; // adjust path if needed
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const OurProjects = () => {
  return (
    <>
    <Navbar/>
      <h1 className="bg-purple-700 text-white text-center font-bold font-serif text-5xl p-10">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {ProjectData.map((data) => (
          <Card key={data.id} url={data.url} name={data.name} desc={data.desc} />
        ))}
      </div>
      <Footer/>
    </>
  );
};
export default OurProjects;