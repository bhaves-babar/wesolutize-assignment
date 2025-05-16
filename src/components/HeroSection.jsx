import React from "react";
import ind from "../images/ind.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Milestone from "../images/aboutusms.png";
import PersonOne from "../images/person1.png";
import PersonTwo from "../images/person2.png";
import PersonThree from "../images/person3.png";

const HeroSection = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full">
        <div className="relative w-full h-[600px]">
          <img
            src={ind}
            alt="Industrial"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-500 font-serif">
              About Our Company
            </h1>
          </div>
        </div>

        {/* Intro Text */}
        <div className="px-5 pt-10 flex flex-col gap-2 text-center">
          <p className="text-2xl text-gray-600">
            Pleasure and so read the was hope
          </p>
          <h2 className="text-7xl text-blue-950 font-semibold font-serif">
            Ready to take
          </h2>
          <h2 className="text-7xl text-green-300 font-semibold font-serif">
            your Business
          </h2>
          <h2 className="text-7xl text-blue-950 font-semibold font-serif">
            to next level
          </h2>
          <p className="text-2xl text-gray-600 pt-4">
            Let's power your operations with smart, scalable solutions. Get in
            touch today and automate your success.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 pt-10">
          <div className="bg-gray-200 h-48 rounded-xl" />
          <div className="md:col-span-2 px-4">
            <h2 className="text-4xl font-serif mb-2">Our Mission</h2>
            <p className="text-lg text-justify text-gray-700">
              To empower industries with reliable electrical and automation
              solutions. We aim to deliver services that improve efficiency and
              reduce downtime. Our team is committed to quality, safety, and
              client satisfaction. We believe in building systems that are
              smart, scalable, and sustainable. Through continuous improvement
              and advanced technologies, we ensure long-term value and seamless
              operations. Every project we undertake is guided by
              professionalism and precision. Our mission is to help industries
              grow through smarter infrastructure.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 pt-10 pb-10">
          <div className="md:col-span-2 px-4">
            <h2 className="text-4xl font-serif mb-2">Our Vision</h2>
            <p className="text-lg text-justify text-gray-700">
              To be a leading force in industrial transformation through
              innovative, sustainable, and reliable automation solutions. We
              envision a future where industries operate seamlessly, leveraging
              cutting-edge technology to maximize productivity and minimize
              environmental impact.
            </p>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl" />
        </div>

        {/* Milestone Section */}
        <div
          className="relative w-full h-96 flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${Milestone})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-semibold font-serif text-white mb-6 z-10">
            Our Milestone
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 z-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-32 bg-blue-500 text-white rounded-full flex flex-col items-center justify-center text-center shadow-lg"
              >
                <h2 className="text-lg font-bold">2017</h2>
                <p className="text-sm px-2">10+ Successful Projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="px-5 py-10 text-center">
          <h1 className="text-3xl font-serif font-semibold mb-8">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{ img: PersonOne, name: "Mr A", role: "Founder" }, { img: PersonTwo, name: "Mr B", role: "HR Head" }, { img: PersonThree, name: "Ms C", role: "Marketing Head" }].map((person, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={person.img} alt={person.name} className="w-40 h-40 object-cover rounded-full shadow-md mb-4" />
                <h2 className="text-xl font-semibold">{person.name}</h2>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gray-100 px-5 py-10">
          <h1 className="text-3xl font-serif font-semibold text-center mb-10">
            Our Core Values
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Integrity", desc: "We stand by our word and work with transparency." },
              { title: "Innovation", desc: "We embrace technology to create smarter solutions." },
              { title: "Safety First", desc: "Every service meets the highest safety standards." },
              { title: "Customer Commitment", desc: "We grow when our clients succeed." },
              { title: "Quality Assurance", desc: "We never compromise on performance or materials." },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <span className="text-2xl font-bold text-gray-600">{value.title[0]}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HeroSection;
