import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isSecondary?: boolean;
}

const ProjectCard = ({ project, index, isSecondary = false }: ProjectCardProps) => {
  const projectLink =
    project.liveLink || project.githubLink || project.modrinthLink;

  return (
    <div className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/30 transition-colors h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          {project.archived && (
            <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs font-medium rounded-md border border-blue-400/20">
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

      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg text-sm hover:bg-blue-400 transition-colors mt-auto"
        >
          {project.liveLink ? "Visit Site" : "View Project"}
          <i className="fa-solid fa-external-link-alt text-xs"></i>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
