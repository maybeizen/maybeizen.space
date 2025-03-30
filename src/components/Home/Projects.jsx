import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [filteredMainProjects, setFilteredMainProjects] = useState([]);
  const [filteredSecondaryProjects, setFilteredSecondaryProjects] = useState(
    []
  );

  const mainProjects = [
    {
      name: "PteroLink",
      description:
        "PteroLink is an in-development npm package that allows you to easily communicate with the Pterodactyl API.",
      technologies: ["TypeScript", "Node.js"],
      githubLink: "https://github.com/maybeizen/pterolink",
      category: "Backend",
      icon: "fa-brands fa-node-js",
    },
    {
      name: "membercat.com",
      description:
        "A full-stack web application for Membercat Studios, a Minecraft development studio owned by KasaiSora.",
      technologies: ["Laravel", "React.js", "Intertia.js"],
      githubLink: "https://github.com/Membercat-Studios/membercat.com",
      category: "Frontend",
      icon: "fa-brands fa-laravel",
    },
    {
      name: "Portfolio",
      description:
        "My personal portfolio website, responsive and built with a modern design.",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/maybeizen/maybeizen.space",
      category: "Frontend",
      icon: "fa-brands fa-react",
      isCurrentProject: true,
    },
  ];

  const secondaryProjects = [
    {
      name: "NetherCore",
      description: "Custom Discord bot for the Nether Host Discord server.",
      technologies: ["JavaScript", "TypeScript", "Node.js"],
      githubLink: "#",
      category: "Backend",
      icon: "fa-brands fa-discord",
    },
    {
      name: "Performium",
      description: "Performance-focused Minecraft modpack built on Fabric",
      technologies: ["Java", "Fabric"],
      modrinthLink: "https://modrinth.com/modpack/performium-was-taken",
      category: "Backend",
      image:
        "https://cdn.modrinth.com/data/IDrxZk6D/e07428e84bcd140fca1d2e287e04712f2a47c0c5_96.webp",
    },
  ];

  const categories = ["All", "Frontend", "Backend"];

  useEffect(() => {
    setFilteredMainProjects(
      activeFilter === "All"
        ? mainProjects
        : mainProjects.filter((project) => project.category === activeFilter)
    );

    setFilteredSecondaryProjects(
      activeFilter === "All"
        ? secondaryProjects
        : secondaryProjects.filter(
            (project) => project.category === activeFilter
          )
    );
  }, [activeFilter]);

  const handleProjectClick = (link) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="bg-black py-32">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-white/10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-white/10"></div>
        </motion.div>

        <div className="text-center mb-24 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            PROJECTS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[2px] bg-white mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-white/10 p-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
                whileHover={{ scale: activeFilter !== category ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <AnimatePresence mode="wait">
            {filteredMainProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative h-[400px] border border-white/10 overflow-hidden bg-black cursor-pointer"
                onClick={() => handleProjectClick(project.githubLink)}
              >
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20"></div>
                </div>

                <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    {project.icon && (
                      <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                        <i
                          className={`${project.icon} text-white text-2xl`}
                        ></i>
                      </div>
                    )}
                    {project.image && (
                      <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-medium text-white tracking-wide">
                      {project.name}
                      {project.isCurrentProject && (
                        <span className="ml-2 text-xs bg-white/10 text-white/80 px-2 py-1 rounded-sm">
                          CURRENT
                        </span>
                      )}
                    </h3>
                  </div>

                  <p className="text-white/70 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 text-white/70 px-3 py-1 text-xs tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-sm tracking-wider">GITHUB</span>
                      <i className="fa-brands fa-github"></i>
                    </a>

                    <motion.div
                      className="w-0 h-[1px] bg-white/30 group-hover:w-16 transition-all duration-300"
                      animate={{
                        width:
                          hoveredProject === project.name ? "4rem" : "0rem",
                      }}
                    />
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    opacity: hoveredProject === project.name ? 1 : 0,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/20 px-8 py-3 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>{showMore ? "Show less" : "See more of what I do..."}</span>
            <i
              className={`fa-solid fa-chevron-${showMore ? "up" : "down"}`}
            ></i>
          </motion.button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filteredSecondaryProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative border border-white/10 overflow-hidden bg-black/80 p-6 hover:bg-black/90 transition-colors duration-300 cursor-pointer"
                    onClick={() =>
                      handleProjectClick(
                        project.githubLink ||
                          project.modrinthLink ||
                          project.demoLink
                      )
                    }
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        {project.icon && (
                          <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20 rounded-sm">
                            <i
                              className={`${project.icon} text-white text-lg`}
                            ></i>
                          </div>
                        )}
                        {project.image && (
                          <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20 rounded-sm">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <h3 className="text-xl font-medium text-white">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-white/70 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-white/10 text-white/70 px-2 py-1 text-xs bg-black/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 text-white/70 text-xs pt-4 border-t border-white/10">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>GITHUB</span>
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}
                        {project.modrinthLink && (
                          <a
                            href={project.modrinthLink}
                            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>MODRINTH</span>
                            <i className="fa-solid fa-cube"></i>
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>DEMO</span>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
