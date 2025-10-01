import React, { useState } from "react";
import { backendSkills, frontendSkills } from "./skills-data.js";

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkill = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  const SkillItem = ({ skill }) => {
    const isExpanded = expandedSkill === skill.name;

    return (
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20">
        <button
          onClick={() => toggleSkill(skill.name)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-4">
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-sm text-white/60">{skill.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-white">
                {skill.mastery}%
              </div>
              <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 transition-all duration-500"
                  style={{ width: `${skill.mastery}%` }}
                />
              </div>
            </div>
            <i
              className={`fa-solid fa-chevron-down text-white/60 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            ></i>
          </div>
        </button>

        {isExpanded && (
          <div className="px-6 pb-6 border-t border-white/10">
            <div className="pt-6 space-y-4">
              <p className="text-white/70 leading-relaxed">
                {skill.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-white/90 mb-2">
                    Experience
                  </h4>
                  <p className="text-sm text-white/60">{skill.experience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/90 mb-2">
                    Mastery Level
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-500 transition-all duration-500"
                        style={{ width: `${skill.mastery}%` }}
                      />
                    </div>
                    <span className="text-sm text-white/60">
                      {skill.mastery}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white/90 mb-2">
                  Projects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((project, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/10 border border-white/10 rounded-xl text-white/60"
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-xl text-violet-300 hover:bg-violet-500/30 hover:border-violet-500/50 transition-colors"
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

  const SkillSection = ({ skills, title, subtitle }) => (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-white">
        {title}
      </h3>
      <p className="text-white/60 text-center mb-8">{subtitle}</p>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-black py-28 text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Tech Stack
        </h2>

        <div className="text-left">
          <SkillSection
            skills={backendSkills}
            title="Backend Technologies"
            subtitle="Server-side development, APIs, and database management"
          />

          <SkillSection
            skills={frontendSkills}
            title="Frontend Technologies"
            subtitle="User interface development and client-side applications"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
