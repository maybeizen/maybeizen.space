import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black py-32">
      <div className="container mx-auto px-4 pb-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-white/10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-white/10"></div>
        </motion.div>

        <div className="text-center mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[2px] bg-white mx-auto mt-6"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-white/70 mb-12">
            <h3 className="text-2xl font-medium text-white mb-5 tracking-wide text-center">
              Developer & Anime Enthusiast
            </h3>

            <p className="text-lg leading-relaxed">
              Hi, I'm Izen. My passion for coding is matched only by my love for
              anime and Japanese culture. I find that the creativity and
              storytelling in anime often inspire my approach to problem-solving
              in development.
            </p>

            <p className="text-lg leading-relaxed">
              What excites me about coding is the endless potential to create
              and innovate. Each project is a new world to build, much like the
              diverse universes found in my favorite anime series. I'm
              constantly pushing my boundaries, learning new technologies and
              techniques to bring my ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-code text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">
                  Coding Journey
                </h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Turning coffee into code since 2022
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-brands fa-js mr-2 text-yellow-400/80"></i>
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-brands fa-golang mr-2 text-blue-400/80"></i>
                  Go
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-800/20 to-pink-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-tv text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">
                  Anime Passion
                </h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Anime marathon enthusiast and manga collector
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-robot mr-2 text-pink-400/80"></i>
                  DarliFra
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-user-graduate mr-2 text-orange-400/80"></i>
                  Horimiya
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-skull mr-2 text-orange-400/80"></i>
                  Eighty-Six
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-purple-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-laptop-code text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">
                  Creative Projects
                </h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Building projects inspired by my favorite series
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-code mr-2 text-indigo-400/80"></i>VS
                  Code
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-brands fa-node-js mr-2 text-green-400/80"></i>
                  Node.js
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-brands fa-github mr-2 text-white"></i>
                  GitHub
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-800/20 to-green-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-gamepad text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">Gaming</h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Casual gamer and Minecraft modder
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-cube mr-2 text-green-400/80"></i>
                  Minecraft
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-gun mr-2 text-red-400/80"></i>
                  Call of Duty
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-800/20 to-red-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-music text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">Music</h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Always coding with music to set the mood
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-drum mr-2 text-red-400/80"></i>
                  Linkin Park
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-guitar-electric mr-2 text-red-400/80"></i>
                  Skillet
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-pepper-hot mr-2 text-red-400/80"></i>
                  Red Hot Chili Peppers
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-800/20 to-amber-600/5 border border-white/10 p-6 relative group transition-all duration-300 hover:border-white/20">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5">
                  <i className="fa-solid fa-graduation-cap text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white">
                  Always Learning
                </h4>
              </div>
              <p className="text-center text-white/70 mb-4">
                Constantly expanding my knowledge and skills
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-book-open mr-2 text-amber-400/80"></i>
                  Tutorials
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-sm">
                  <i className="fa-solid fa-code-branch mr-2 text-amber-400/80"></i>
                  Open Source
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
