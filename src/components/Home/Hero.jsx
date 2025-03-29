import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/images/zerotwo.jpg";

const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center" id="home">
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-white/10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-white mb-10 hidden lg:block"
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-tighter"
            >
              <span className="block">MAYBEIZEN</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-10"
            >
              <TypeAnimation
                sequence={[
                  "FULL STACK DEVELOPER",
                  2000,
                  "UI/UX ENTHUSIAST",
                  2000,
                  "PROBLEM SOLVER",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-light text-white/80 tracking-widest"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed"
            >
              I build exceptional digital experiences with clean code and modern
              design principles. Focused on creating elegant, functional
              solutions to complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#projects" className="btn-primary">
                <span>VIEW WORK</span>
                <span className="text-xs">↓</span>
              </a>

              <a
                href="https://github.com/maybeizen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>GITHUB</span>
                <span className="text-xs">↗</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -inset-1 bg-white/10 blur-3xl rounded-full"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-72 h-72 md:w-96 md:h-96 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                <img
                  src={profilePic}
                  alt="maybeizen's profile"
                  className="w-full h-full object-cover contrast-125 rounded-full 
                  border-2 border-white/20 p-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
