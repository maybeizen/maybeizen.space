import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Experience from "../components/Home/Experience";
import Timeline from "../components/Home/Timeline";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Timeline />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
