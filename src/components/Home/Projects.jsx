import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      name: "PteroLink",
      description:
        "PteroLink is an in-development npm package that allows you to easily communicate with the Pterodactyl API.",
      technologies: ["Express", "Node.js"],
      githubLink: "https://github.com/maybeizen/pterolink",
      category: "Backend",
      icon: "fa-brands fa-node-js",
      gradient: "from-green-500 via-green-600 to-green-700",
    },
    {
      name: "NetherCore",
      description: "An advanced Discord bot built for all things Nether Host.",
      technologies: ["Discord.js", "Node.js", "GoLang"],
      githubLink: "https://github.com/netherhost/nethercore",
      category: "Backend",
      icon: "fa-brands fa-discord",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      name: "Portfolio (maybeizen.space)",
      description:
        "My personal portfolio website, responsive and built with a modern design.",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/maybeizen/maybeizen.space",
      category: "Frontend",
      icon: "fa-brands fa-react",
      isCurrentProject: true,
      gradient: "from-sky-500 via-sky-600 to-sky-700",
    },
  ];

  const categories = ["All", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="bg-zinc-950 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-2 md:space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`
                px-4 md:px-6 py-2 rounded-full 
                text-sm md:text-base
                transition-all duration-300
                ${
                  activeFilter === category
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-zinc-900 rounded-xl 
                overflow-hidden 
                shadow-lg 
                hover:shadow-xl 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2 
                group 
                relative
                flex 
                flex-col 
                md:flex-row"
              >
                {project.isCurrentProject && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-md">
                      <i className="fa-solid fa-location-dot"></i>
                      You're Here!
                    </span>
                  </div>
                )}
                <div
                  className={`
                    relative 
                    w-full md:w-64 
                    h-48 md:h-64 
                    bg-gradient-to-r 
                    ${project.gradient} 
                    flex 
                    items-center 
                    justify-center
                    aspect-square
                    shrink-0
                  `}
                >
                  <i
                    className={`
                      ${project.icon} 
                      text-4xl md:text-6xl 
                      text-white 
                      opacity-80 
                      group-hover:opacity-100
                      transition-all
                      duration-300
                    `}
                  ></i>
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-800 
                        text-sky-300 
                        px-2 md:px-3 py-1 
                        rounded-full 
                        text-xs
                        hover:bg-sky-500/20
                        hover:text-sky-200
                        transition-all
                        duration-300
                        cursor-default
                        shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 
                      text-white 
                      px-4 py-2 
                      rounded-full 
                      border-2 border-sky-600
                      hover:bg-sky-600
                      transition-all
                      duration-300
                      group
                      shadow-md
                      hover:shadow-lg
                      text-sm md:text-base"
                    >
                      <i
                        className="fa-brands fa-github 
                        transition-transform 
                        duration-300"
                      ></i>
                      <span className="transition-all duration-300">
                        GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
