import React from "react";
import { motion } from "framer-motion";
import profilePic from "/images/zerotwo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            MAYBEIZEN
          </h1>

          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Crafting clean, intentional digital experiences with full-stack
            precision.
          </p>

          <div className="flex gap-3 pt-3">
            <a
              href="#projects"
              className="text-sm px-4 py-2 rounded border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-colors"
            >
              View Work
            </a>
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded border border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={profilePic}
            alt="maybeizen"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border border-gray-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
