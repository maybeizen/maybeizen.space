import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import MouseEffect from "../components/common/MouseEffect";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <MouseEffect />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
