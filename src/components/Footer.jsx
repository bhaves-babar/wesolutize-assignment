import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <div className="bg-white text-black font-bold px-4 py-2 inline-block rounded-md mb-4">
            EleAutomation
          </div>
          <h2 className="font-semibold text-lg mb-2">
            Built with Precision. Delivered with Trust.
          </h2>
          <p className="text-sm mb-3">
            Delivering quality fabrication solutions across industries — on
            time, every time.
          </p>
          <div className="text-sm space-y-1">
            <p className="font-semibold">Address:</p>
            <p>ABC Fabrication Pvt. Ltd. Plot No. 45,</p>
            <p>Industrial Estate, Sector 12, Pune - 411019</p>
            <p>Maharashtra, India</p>
            <p>Phone: +91-9876543210</p>
            <p>Email: info@abcfabrication.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Control Panel Design</li>
            <li>Industrial Wiring and Maintenance</li>
            <li>PLC and SCADA Integration</li>
            <li>Load Management</li>
            <li>Power Quality Analysis</li>
            <li>Energy Optimization</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                📘 Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                🐦 Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📸 Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ▶️ Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-10 border-t border-white border-opacity-30 pt-4">
        ©Fabrication 2025. We love our users!
      </div>
    </footer>
  );
};

export default Footer;
