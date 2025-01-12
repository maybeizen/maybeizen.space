import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/images/hiro.jpg";

const Hero = () => {
  return (
    <section className="bg-zinc-950" id="home">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-16 flex flex-col justify-center min-h-screen"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <motion.img
              src={profilePic}
              alt="maybeizen's profile"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full 
              border-4 border-sky-500 
              shadow-2xl shadow-sky-500/50 
              object-cover"
            />
          </div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Hey, I'm <span className="text-sky-400 text-shadow">maybeizen</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer 💻",
                1000,
                "Anime Fan 🏯",
                1000,
                "UI/UX Designer 🎨",
                1000,
                "Dream Chaser 🙌",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-4xl text-sky-300 mb-8"
            />
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg"
          >
            Crafting elegant solutions at the intersection of creativity and
            technology. Passionate about building scalable, innovative software
            that makes a difference.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 
              bg-sky-600 text-white 
              rounded-full 
              hover:bg-sky-500 
              transition-all duration-300 
              transform hover:-translate-y-2 
              active:scale-95 
              font-semibold 
              tracking-wider 
              uppercase"
            >
              My Projects
            </a>
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 
              border-2 border-sky-600 text-sky-600 
              rounded-full 
              hover:bg-sky-600 hover:text-white 
              transition-all duration-300 
              transform hover:-translate-y-2 
              active:scale-95 
              font-semibold 
              tracking-wider 
              uppercase"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.main>
    </section>
  );
};

export default Hero;
