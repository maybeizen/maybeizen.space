import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, isSecondary = false, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
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

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSecondary: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectGrid;
