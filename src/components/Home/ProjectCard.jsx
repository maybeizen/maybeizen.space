import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index, isSecondary = false }) => {
  const projectLink =
    project.liveLink || project.githubLink || project.modrinthLink;

  const colors = [
    "bg-white",
    "bg-[#ffeb3b]",
    "bg-[#2196f3]",
    "bg-[#ff1744]",
    "bg-[#4caf50]",
    "bg-[#9c27b0]",
  ];

  const bgColor = colors[index % colors.length];
  const isColored = bgColor !== "bg-white";

  return (
    <div className={`${bgColor} ${isColored ? 'text-white' : 'text-black'} border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] transition-all hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-black uppercase">{project.name}</h3>
        {project.archived && (
          <span className="neobrutal-tag neobrutal-tag-yellow">
            ARCHIVED
          </span>
        )}
      </div>

      <p className={`font-bold text-sm mb-4 leading-relaxed ${isColored ? 'text-white' : 'text-black'}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`neobrutal-tag ${isColored ? 'bg-white text-black' : ''}`}
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
          className={`neobrutal-btn ${isColored ? 'neobrutal-btn-secondary' : 'neobrutal-btn-blue'} text-sm inline-flex items-center gap-2`}
        >
          {project.liveLink ? "VISIT SITE" : "VIEW PROJECT"}
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
