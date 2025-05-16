import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fname.trim()) newErrors.fname = "First name is required.";
    if (!lname.trim()) newErrors.lname = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is invalid.";
    if (!phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Do form submission logic here (e.g., send to backend)

      // Clear form
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-10 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
          {/* Left Section */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Let's Talk
            </h1>
            <p className="text-gray-700 mb-6">
              We collaborate with thousands of creators, entrepreneurs, and complete legends.
            </p>

            <div className="border-t border-b border-gray-300 py-6">
              <ul className="space-y-6">
                <li className="flex items-start gap-x-4">
                  <MdEmail className="text-2xl text-red-500 mt-1" />
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-gray-800">Our Email</h3>
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-x-4">
                  <IoCall className="text-2xl text-red-500 mt-1" />
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+1234567892</p>
                  </div>
                </li>
                <li className="flex items-start gap-x-4">
                  <FaLocationDot className="text-2xl text-red-500 mt-1" />
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-gray-800">Find Us</h3>
                    <p className="text-gray-600">Open Google Maps</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-red-100 rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="fname" className="text-sm font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  id="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="border-b border-gray-400 focus:outline-none bg-transparent"
                />
                {errors.fname && <span className="text-red-600 text-sm">{errors.fname}</span>}
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lname" className="text-sm font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="border-b border-gray-400 focus:outline-none bg-transparent"
                />
                {errors.lname && <span className="text-red-600 text-sm">{errors.lname}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-gray-400 focus:outline-none bg-transparent"
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-gray-400 focus:outline-none bg-transparent"
                />
                {errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-b border-gray-400 focus:outline-none bg-transparent resize-none"
                />
                {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
