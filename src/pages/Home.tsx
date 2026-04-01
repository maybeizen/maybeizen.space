import Footer from "../components/footer";
import Hero from "../components/Home/hero";
import About from "../components/Home/about";
import Songs from "../components/Home/songs";
import Navbar from "../components/nav";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />
      <Hero />
      <About />
      <Songs />
      <Footer />
    </div>
  );
};

export default Home;
