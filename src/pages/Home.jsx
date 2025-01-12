import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
