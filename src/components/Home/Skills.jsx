import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bootstrap from "/images/code/bootstrap.svg";
import golang from "/images/code/golang.svg";
import java from "/images/code/gradle.svg";
import html from "/images/code/html.svg";
import javascript from "/images/code/javascript.svg";
import lua from "/images/code/lua.svg";
import mysql from "/images/code/mysql.svg";
import nextjs from "/images/code/nextjs.svg";
import nodejs from "/images/code/nodejs.svg";
import python from "/images/code/python.svg";
import react from "/images/code/react.svg";
import tailwindcss from "/images/code/tailwindcss.svg";
import typescript from "/images/code/typescript.svg";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "Bootstrap",
      icon: bootstrap,
      description: "Frontend framework for building responsive websites",
    },
    {
      name: "GoLang",
      icon: golang,
      description: "Statically typed, compiled language designed at Google",
    },
    {
      name: "Java",
      icon: java,
      description:
        "Object-oriented programming language used for enterprise applications",
    },
    {
      name: "HTML",
      icon: html,
      description:
        "Standard markup language for documents designed to be displayed in a web browser",
    },
    {
      name: "JavaScript",
      icon: javascript,
      description:
        "High-level, interpreted programming language for web development",
    },
    {
      name: "Lua",
      icon: lua,
      description:
        "Lightweight, high-level, multi-paradigm programming language",
    },
    {
      name: "Next.js",
      icon: nextjs,
      description: "React framework for production with server-side rendering",
    },
    {
      name: "Node.js",
      icon: nodejs,
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
      name: "Python",
      icon: python,
      description:
        "Interpreted high-level general-purpose programming language",
    },
    {
      name: "React",
      icon: react,
      description: "JavaScript library for building user interfaces",
    },
    {
      name: "Tailwind CSS",
      icon: tailwindcss,
      description:
        "Utility-first CSS framework for rapidly building custom designs",
    },
    {
      name: "TypeScript",
      icon: typescript,
      description:
        "Strongly typed programming language that builds on JavaScript",
    },
    {
      name: "MySQL",
      icon: mysql,
      description: "Open-source relational database management system",
    },
  ];

  const handleSkillClick = (skill) => {
    if (selectedSkill?.name === skill.name) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <section className="bg-black py-32" id="skills">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-1/3 h-1/3 border-l-2 border-t-2 border-white/10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-r-2 border-b-2 border-white/10"></div>
        </motion.div>

        <div className="text-center mb-24 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            TECHSTACK
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[2px] bg-white mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              onClick={() => handleSkillClick(skill)}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`
                relative overflow-hidden
                border border-white/10
                bg-gradient-to-br from-black to-black
                p-6 
                flex flex-col items-center justify-center
                cursor-pointer
                transition-all duration-300
                ${
                  selectedSkill?.name === skill.name
                    ? "ring-2 ring-white scale-105"
                    : ""
                }
                hover:border-white/20
                group
              `}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  opacity:
                    hoveredSkill === skill.name ||
                    selectedSkill?.name === skill.name
                      ? 1
                      : 0,
                }}
              />

              <motion.div
                className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                animate={{
                  scale: hoveredSkill === skill.name ? 1.1 : 1,
                  grayscale:
                    selectedSkill?.name === skill.name
                      ? 0
                      : hoveredSkill === skill.name
                      ? 0
                      : 1,
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-white/5 rounded-full blur-md"
                  animate={{
                    opacity:
                      hoveredSkill === skill.name ||
                      selectedSkill?.name === skill.name
                        ? 1
                        : 0,
                  }}
                />
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-full h-full relative z-10"
                  loading="lazy"
                />
              </motion.div>

              <h3 className="text-lg font-medium text-white tracking-wide group-hover:text-white/90 transition-colors duration-300">
                {skill.name}
              </h3>

              <motion.div
                className="w-0 h-[1px] bg-white/30 mt-2 group-hover:w-full transition-all duration-300"
                animate={{
                  width:
                    hoveredSkill === skill.name ||
                    selectedSkill?.name === skill.name
                      ? "100%"
                      : "0%",
                }}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-16 p-10 border border-white/10 rounded-none bg-black backdrop-blur-sm"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 p-3 bg-black/50 border border-white/20 flex items-center justify-center">
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.name}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {selectedSkill.name}
                </h3>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                {selectedSkill.description}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-xs uppercase tracking-wider text-white/50 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span>Close</span>
                  <span className="text-xs">×</span>
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
