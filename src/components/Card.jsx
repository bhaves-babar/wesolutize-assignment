import React, { useState } from "react";

const Card = ({ url, name, desc }) => {
  const [click, setClick] = useState(true);

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Conditional Rendering */}
      {click ? (
        <>
          {/* Image */}
          <img src={url} alt={name} className="w-full h-48 object-cover" />

          {/* Content */}
          <div className="p-4 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
            {/* {desc && <p className="text-sm text-gray-600">{desc}</p>} */}
          </div>
        </>
      ) : (
        <div className="p-4 flex-grow">
          {desc && <p className="text-sm text-gray-600">{desc}</p>}
        </div>
      )}

      {/* Button */}
      <div className="px-4 pb-4 mt-auto">
        <button
          className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700 transition"
          onClick={() => setClick(!click)}
        >
          {click ? "View Details" :  "Hide Details"}
        </button>
      </div>
    </div>
  );
};

export default Card;
