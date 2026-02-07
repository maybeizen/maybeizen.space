import { Project } from "../../data/projects";
import { ButtonLink } from "../ui";

interface ProjectCardProps {
  project: Project;
  index: number;
  isSecondary?: boolean;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
  if (project.modrinthLink)
    links.push({
      type: "modrinth",
      url: project.modrinthLink,
      label: "Modrinth",
    });

  return (
    <div className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/30 transition-colors h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          {project.archived && (
            <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs font-medium rounded-md border border-yellow-400/20">
              ARCHIVED
            </span>
          )}
        </div>

        <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-md text-xs text-[#a0a0a0]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {links.map((link, i) => (
            <ButtonLink
              key={i}
              variant="default"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                link.type === "modrinth" &&
                "bg-green-500 text-white hover:bg-green-400 active:bg-green-600"
              }`}
            >
              {link.type === "github" && (
                <i className="fa-brands fa-github"></i>
              )}
              {link.type === "modrinth" && (
                <img
                  src="/images/icon/modrinth.svg"
                  alt="Modrinth"
                  className="w-4 h-4"
                />
              )}
              {link.label}
              <i className="fa-solid fa-external-link-alt text-xs"></i>
            </ButtonLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
