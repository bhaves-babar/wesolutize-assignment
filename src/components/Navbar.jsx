import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md top-0 z-50 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">        
        {/* Logo */}
        <Link className="text-2xl font-bold text-indigo-900 font-serif" to="/">
          EleAutomation
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-center">
          <Link
            to="/"
            className="text-gray-800 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 font-medium"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 font-medium"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Request a Quote Button */}
        <Link to="/quote">
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-full font-medium">
            Request a Quote
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
