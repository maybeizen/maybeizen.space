import { Project } from "../../data/projects";
import { ButtonLink } from "../ui";

interface OrvexCardProps {
  projects: Project[];
}

const OrvexCard = ({ projects }: OrvexCardProps) => {
  const getProjectTheme = (projectName: string) => {
    if (projectName === "Orvex Monitor") {
      return {
        gradient: "from-blue-600/35 via-blue-500/30 to-blue-700/35",
        border: "border-blue-500/50",
        hoverShadow: "hover:shadow-blue-500/25",
        hoverText: "group-hover:text-blue-200",
        titleColor: "text-blue-50",
        descriptionColor: "text-blue-100/85",
        overlay: "to-blue-900/15",
        techBg: "bg-blue-900/50",
        techBorder: "border-blue-400/40",
        techText: "text-blue-50",
        buttonBg: "bg-blue-900/50",
        buttonBorder: "border-blue-400/40",
        buttonText: "text-blue-100",
        buttonHover: "hover:bg-blue-800/60 hover:border-blue-300/50",
      };
    } else if (projectName === "Fluxo") {
      return {
        gradient: "from-black/60 via-yellow-500/25 to-black/70",
        border: "border-yellow-500/50",
        hoverShadow: "hover:shadow-yellow-500/25",
        hoverText: "group-hover:text-yellow-200",
        titleColor: "text-yellow-50",
        descriptionColor: "text-yellow-100/85",
        overlay: "to-black/20",
        techBg: "bg-black/60",
        techBorder: "border-yellow-400/40",
        techText: "text-yellow-50",
        buttonBg: "bg-black/60",
        buttonBorder: "border-yellow-400/40",
        buttonText: "text-yellow-100",
        buttonHover: "hover:bg-black/70 hover:border-yellow-300/50",
      };
    }
    return null;
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#1a1a1a] p-5 rounded-lg hover:border-blue-400/30 transition-colors">
      <div className="mb-4 pb-3 border-b border-[#0a0a0a]">
        <h3 className="text-lg font-semibold mb-0.5 text-[#e5e5e5]">Orvex</h3>
        <p className="text-[#808080] text-xs">
          A collection of projects under the Orvex brand
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => {
          const links = [];
          if (project.liveLink)
            links.push({
              type: "live",
              url: project.liveLink,
              label: "Visit Site",
            });
          if (project.githubLink)
            links.push({
              type: "github",
              url: project.githubLink,
              label: "GitHub",
            });

          const theme = getProjectTheme(project.name);
          if (!theme) return null;
          
          return (
            <div
              key={project.name}
              className={`relative bg-gradient-to-br ${theme.gradient} border-2 ${theme.border} rounded-xl p-5 hover:border-opacity-70 hover:shadow-xl ${theme.hoverShadow} transition-all duration-300 group overflow-hidden h-full flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${theme.overlay} pointer-events-none`}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`text-lg font-bold ${theme.titleColor} ${theme.hoverText} transition-colors`}>
                    {project.name}
                  </h4>
                </div>

                <p className={`text-sm mb-4 leading-relaxed grow ${theme.descriptionColor}`}>
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 backdrop-blur-sm border rounded-md text-xs font-medium ${theme.techBg} ${theme.techBorder} ${theme.techText} shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {links.map((link, j) => (
                      <ButtonLink
                        key={j}
                        variant="default"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md border backdrop-blur-sm transition-all ${theme.buttonBg} ${theme.buttonBorder} ${theme.buttonText} ${theme.buttonHover}`}
                      >
                        {link.type === "github" && (
                          <i className="fa-brands fa-github"></i>
                        )}
                        {link.label}
                        <i className="fa-solid fa-external-link-alt text-[10px]"></i>
                      </ButtonLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrvexCard;
