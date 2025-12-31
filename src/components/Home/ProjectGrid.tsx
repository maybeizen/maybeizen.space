import { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  isSecondary?: boolean;
  className?: string;
}

const ProjectGrid = ({ projects, isSecondary = false, className = "" }: ProjectGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={i}
          isSecondary={isSecondary}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
