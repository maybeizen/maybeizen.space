import { skills } from "../../data/skills";

const SkillCard = ({ skill }: { skill: (typeof skills)[0] }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-lg hover:border-blue-400/30 transition-all duration-300 group p-6 h-full flex flex-col">
      <div className="flex flex-col items-center text-center space-y-4 flex-1">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-400/10 rounded-lg border border-blue-400/20 group-hover:bg-blue-400/20 group-hover:border-blue-400/30 transition-all flex-shrink-0">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<i class="fa-solid fa-code text-2xl text-blue-400"></i>`;
              }
            }}
          />
        </div>

        <div className="w-full flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4 flex-1">
            {skill.description}
          </p>

          <div className="space-y-2 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a0a0a0]">Mastery</span>
              <span className="text-sm font-semibold text-blue-400">
                {skill.mastery}%
              </span>
            </div>
            <div className="w-full h-2 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#1a1a1a]">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500 rounded-full"
                style={{ width: `${skill.mastery}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
