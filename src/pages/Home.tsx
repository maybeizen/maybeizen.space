import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Experience from "../components/Home/Experience";
import Timeline from "../components/Home/Timeline";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Timeline />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

