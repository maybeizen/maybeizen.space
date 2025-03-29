import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import BackgroundPattern from "../components/common/BackgroundPattern";
import MouseEffect from "../components/common/MouseEffect";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <BackgroundPattern />
      <MouseEffect />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
