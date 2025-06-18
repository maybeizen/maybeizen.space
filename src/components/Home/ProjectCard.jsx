import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectCard = ({
  project,
  index,
  flippedCard,
  handleCardFlip,
  openLink,
  isSecondary = false,
}) => {
  const cardId = isSecondary ? `s${index}` : index;
  const isFlipped = flippedCard === cardId;
  const projectLink =
    project.liveLink || project.githubLink || project.modrinthLink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[300px] perspective-1000 group interactive"
      onClick={() => (isFlipped ? null : openLink(projectLink))}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="absolute w-full h-full backface-hidden border border-white/10 bg-white/5 p-6 rounded-md hover:border-violet-500 transition overflow-hidden">
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-xl font-medium mb-2">{project.name}</h3>
            <p className="text-white/70 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-white/60 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 border border-white/10 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.button
              className="mt-auto text-violet-400 text-sm flex items-center gap-1"
              onClick={(e) => handleCardFlip(cardId, e)}
              whileHover={{ x: 5 }}
            >
              View details
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </motion.button>
          </div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden border border-violet-500 bg-white/5 p-6 rounded-md overflow-hidden rotateY-180"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-xl font-medium mb-3 text-violet-400">
              {project.name}
            </h3>
            <div className="flex-grow overflow-y-auto pr-2 scrollbar-thin">
              <p className="text-white/80 text-sm">{project.details}</p>
            </div>
            <div className="mt-4 pt-2 border-t border-white/10 flex justify-between items-center">
              <motion.button
                className="text-white/70 text-sm flex items-center gap-1"
                onClick={(e) => handleCardFlip(cardId, e)}
                whileHover={{ x: -5 }}
              >
                <i className="fa-solid fa-arrow-left text-xs"></i>
                Back
              </motion.button>
              <motion.a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 text-sm flex items-center gap-1"
                whileHover={{ y: -2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {project.liveLink ? "Visit Site" : "View Project"}
                <i className="fa-solid fa-external-link-alt text-xs"></i>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  flippedCard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleCardFlip: PropTypes.func.isRequired,
  openLink: PropTypes.func.isRequired,
  isSecondary: PropTypes.bool,
};

export default ProjectCard;
