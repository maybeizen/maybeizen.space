import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "./skills-data.js";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4"
        >
          Tech Stack
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] bg-violet-500 mx-auto mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <button
                onClick={() => setSelectedSkill(skill)}
                className="w-full p-4 border border-white/10 bg-white/5 rounded hover:border-violet-500 focus:outline-none"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mx-auto mb-3"
                />
                <p className="text-sm text-white font-medium">{skill.name}</p>
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-20 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded p-8"
            >
              <div className="flex items-center gap-5 mb-4">
                <img
                  src={selectedSkill.icon}
                  alt={selectedSkill.name}
                  className="w-12 h-12"
                />
                <h3 className="text-2xl font-semibold">{selectedSkill.name}</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                {selectedSkill.description}
              </p>
              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
