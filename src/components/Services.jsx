import React from "react";
import ProjectData from "../util/projectData";
import ServiceData from "../util/ServiceData";
import IntegrationCard from "./IntegrationCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Services = () => {
  console.log(ServiceData);
  return (
    <>
    <Navbar/>
      <h1 className="bg-purple-700 text-white text-center font-bold font-serif text-5xl p-10">
        High-impat Services for Your Business
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {ServiceData.map((data) => {
          console.log(data.id);
          return (
            <IntegrationCard key={data.id} image={data.url} title={data.title} points={data.desc}/>
          );
        })}
      </div>
      <Footer/>
    </>
  );
};
export default Services;
