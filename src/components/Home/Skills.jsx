import React, { useState } from "react";
import { backendSkills, frontendSkills } from "./skills-data.js";

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkill = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  const SkillItem = ({ skill, bgColor }) => {
    const isExpanded = expandedSkill === skill.name;

    return (
      <div className={`${bgColor} border-4 border-black shadow-[8px_8px_0px_0px_#000000] transition-all hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1`}>
        <button
          onClick={() => toggleSkill(skill.name)}
          className="w-full p-6 text-left flex items-center justify-between hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-black border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-lg font-black uppercase">{skill.name}</h3>
              <p className="text-sm font-bold">{skill.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-black">{skill.mastery}%</div>
              <div className="w-24 h-4 bg-black border-2 border-black overflow-hidden">
                <div
                  className="h-full bg-[#ffeb3b] transition-all duration-500"
                  style={{ width: `${skill.mastery}%` }}
                />
              </div>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center bg-black text-white border-2 border-black transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </button>

        {isExpanded && (
          <div className="px-6 pb-6 border-t-4 border-black">
            <div className="pt-6 space-y-4">
              <p className="font-bold leading-relaxed">
                {skill.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-black uppercase mb-2">EXPERIENCE</h4>
                  <p className="text-sm font-bold">{skill.experience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase mb-2">MASTERY LEVEL</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-4 bg-black border-2 border-black overflow-hidden">
                      <div
                        className="h-full bg-[#ffeb3b] transition-all duration-500"
                        style={{ width: `${skill.mastery}%` }}
                      />
                    </div>
                    <span className="text-sm font-black">
                      {skill.mastery}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase mb-2">PROJECTS</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((project, i) => (
                    <span
                      key={i}
                      className="neobrutal-tag"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={skill.actionLink}
                  target={
                    skill.actionLink.startsWith("http") ? "_blank" : "_self"
                  }
                  rel={
                    skill.actionLink.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="neobrutal-btn neobrutal-btn-blue text-sm inline-flex items-center gap-2"
                >
                  {skill.actionText}
                  <i className="fa-solid fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const SkillSection = ({ skills, title, subtitle }) => {
    const colors = ["bg-white", "bg-[#ffeb3b]", "bg-[#2196f3]", "bg-[#ff1744]", "bg-[#4caf50]", "bg-[#9c27b0]", "bg-white"];

    return (
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-black uppercase text-center mb-4">
          {title}
        </h3>
        <p className="font-bold text-center mb-8">{subtitle}</p>
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <SkillItem key={skill.name} skill={skill} bgColor={colors[idx % colors.length]} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-[#fffbf0] py-28 text-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-heading text-black">TECH STACK</h2>

        <div className="text-left">
          <SkillSection
            skills={backendSkills}
            title="BACKEND TECHNOLOGIES"
            subtitle="Server-side development, APIs, and database management"
          />

          <SkillSection
            skills={frontendSkills}
            title="FRONTEND TECHNOLOGIES"
            subtitle="User interface development and client-side applications"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
