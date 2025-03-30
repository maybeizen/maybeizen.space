import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black py-32">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-white/10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-white/10"></div>
        </motion.div>

        <div className="text-center mb-24 relative">
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
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-medium text-white mb-6 tracking-wide text-center">
            Developer & Anime Enthusiast
          </h3>

          <div className="space-y-6 text-white/70">
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

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-medium text-white mb-4 text-center">
                My Coding & Anime Life:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-white/10 p-4 bg-white/5">
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <i className="fa-solid fa-code text-white/50 text-xl"></i>
                    <span className="text-white">Coding Journey</span>
                  </div>
                  <p className="text-center">
                    Turning coffee into code since 2022
                  </p>
                </div>

                <div className="border border-white/10 p-4 bg-white/5">
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <i className="fa-solid fa-tv text-white/50 text-xl"></i>
                    <span className="text-white">Anime Passion</span>
                  </div>
                  <p className="text-center">
                    Anime marathon enthusiast and manga collector
                  </p>
                </div>

                <div className="border border-white/10 p-4 bg-white/5">
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <i className="fa-solid fa-laptop-code text-white/50 text-xl"></i>
                    <span className="text-white">Creative Projects</span>
                  </div>
                  <p className="text-center">
                    Building projects inspired by my favorite series
                  </p>
                </div>

                <div className="border border-white/10 p-4 bg-white/5">
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <i className="fa-solid fa-gamepad text-white/50 text-xl"></i>
                    <span className="text-white">Gaming</span>
                  </div>
                  <p className="text-center">
                    Casual gamer and Minecraft modder
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href="#projects"
              className="border border-white/20 px-8 py-3 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>See my work</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
