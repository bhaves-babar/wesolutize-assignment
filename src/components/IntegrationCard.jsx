import React from "react";
import { FaCogs } from "react-icons/fa"; // Replace with your own icon if needed

const IntegrationCard = ({ image, title, points }) => {
    console.log(image,title);
    
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-3xl mx-auto">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 bg-purple-700 text-white p-6 flex flex-col justify-center rounded-none md:rounded-r-2xl">
        {/* Icon */}
        <div className="bg-white text-purple-700 p-3 w-fit rounded-full mb-4">
          <FaCogs className="text-xl" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3">{title}</h2>

        {/* Description Points */}
        {/* <ul className="space-y-1 text-sm">
          {points.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default IntegrationCard;
