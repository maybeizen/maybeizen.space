import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index, isSecondary = false }) => {
  const projectLink =
    project.liveLink || project.githubLink || project.modrinthLink;

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-violet-500 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-medium">{project.name}</h3>
        {project.archived && (
          <span className="px-2 py-1 text-xs bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-yellow-400">
            Archived
          </span>
        )}
      </div>

      <p className="text-white/70 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-white/60 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-white/10 border border-white/10 rounded-xl"
          >
            {tech}
          </span>
        ))}
      </div>

      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex items-center justify-start gap-1 hover:underline ${
            project.archived ? "text-yellow-400" : "text-violet-400"
          }`}
        >
          {project.liveLink ? "Visit Site" : "View Project"}
          <i className="fa-solid fa-external-link-alt text-xs"></i>
        </a>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isSecondary: PropTypes.bool,
};

export default ProjectCard;
