import React, { useState } from "react";
import { backendSkills, frontendSkills } from "./skills-data.js";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const SkillGrid = ({ skills, title, subtitle, className = "" }) => (
    <div className={className}>
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        {title}
      </h3>
      <p className="text-white/60 text-center mb-8">{subtitle}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center"
          >
            <button
              onClick={() => setSelectedSkill(skill)}
              className="w-full p-4 border border-white/10 bg-white/5 rounded hover:border-violet-500 focus:outline-none transition-colors"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mx-auto mb-3"
              />
              <p className="text-sm text-white font-medium">{skill.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4">
          Tech Stack
        </h2>
        <div className="h-[2px] bg-violet-500 w-24 mx-auto mb-12"></div>

        <SkillGrid
          skills={backendSkills}
          title="Backend Technologies"
          subtitle="Server-side development, APIs, and database management"
          className="mb-16"
        />

        <SkillGrid
          skills={frontendSkills}
          title="Frontend Technologies"
          subtitle="User interface development and client-side applications"
        />

        {selectedSkill && (
          <div className="mt-20 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded p-8">
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
