import React from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({
  projects,
  flippedCard,
  handleCardFlip,
  openLink,
  isSecondary = false,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      <AnimatePresence mode="wait">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            flippedCard={flippedCard}
            handleCardFlip={handleCardFlip}
            openLink={openLink}
            isSecondary={isSecondary}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  flippedCard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleCardFlip: PropTypes.func.isRequired,
  openLink: PropTypes.func.isRequired,
  isSecondary: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectGrid;
