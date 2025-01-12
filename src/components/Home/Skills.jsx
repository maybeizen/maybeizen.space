import React from "react";
import { motion } from "framer-motion";
import bootstrap from "../../assets/icons/bootstrap.png";
import golang from "../../assets/icons/golang.png";
import html from "../../assets/icons/html.png";
import javascript from "../../assets/icons/javascript.png";
import nextjs from "../../assets/icons/nextjs.png";
import python from "../../assets/icons/python.png";
import react from "../../assets/icons/react.svg";
import tailwind from "../../assets/icons/tailwindcss.png";
import mysql from "../../assets/icons/mysql.png";
import lua from "../../assets/icons/lua.png";

const Skills = () => {
  const skills = [
    { name: "React", icon: react, color: "sky-400" },
    { name: "Next.js", icon: nextjs, color: "white" },
    { name: "Tailwind", icon: tailwind, color: "sky-400" },
    { name: "Bootstrap", icon: bootstrap, color: "purple-600" },
    { name: "JavaScript", icon: javascript, color: "yellow-400" },
    { name: "Python", icon: python, color: "blue-700" },
    { name: "GoLang", icon: golang, color: "cyan-500" },
    { name: "HTML", icon: html, color: "orange-600" },
    { name: "Lua", icon: lua, color: "blue-500" },
    { name: "MySQL", icon: mysql, color: "blue-500" },
  ];

  return (
    <section className="bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`
                bg-zinc-900 p-6 rounded-xl 
                flex flex-col items-center justify-center
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-lg m-2
                group
                ${skill.name === "React" ? "hover:bg-sky-400/10" : ""}
                ${skill.name === "Next.js" ? "hover:bg-white/10" : ""}
                ${skill.name === "Python" ? "hover:bg-blue-700/10" : ""}
                ${skill.name === "GoLang" ? "hover:bg-cyan-500/10" : ""}
                ${skill.name === "HTML" ? "hover:bg-orange-600/10" : ""}
                ${skill.name === "JavaScript" ? "hover:bg-yellow-400/10" : ""}
                ${skill.name === "Tailwind" ? "hover:bg-sky-400/10" : ""}
                ${skill.name === "Bootstrap" ? "hover:bg-purple-600/10" : ""}
                ${skill.name === "Lua" ? "hover:bg-indigo-500/10" : ""}
                ${skill.name === "MySQL" ? "hover:bg-orange-500/10" : ""}
              `}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={`w-16 h-16 mb-4 text-${skill.color} 
                group-hover:scale-110 transition-transform duration-300`}
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
