import Footer from "../components/footer";
import Hero from "../components/Home/hero";
import About from "../components/Home/about";
import Experience from "../components/Home/experience";
import Timeline from "../components/Home/timeline";
import Skills from "../components/Home/skills";
import Projects from "../components/Home/projects";
import Navbar from "../components/nav";

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
