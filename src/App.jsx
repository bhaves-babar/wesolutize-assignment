import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Content from "./components/Contact";
import OurProjects from "./components/OurProjects";
import Services from "./components/Services";
import Home from "./components/Home";

// import Home from './pages/Home';
// import About from './pages/About';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Content />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/about" element={<HeroSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
