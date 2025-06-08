import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const mainProjects = [
    {
      name: "PasteIt.lol",
      description:
        "A fast, minimalist pastebin alternative. Just paste your text, pick a language, and share the link. No accounts. No clutter.",
      technologies: ["Laravel", "React.js", "Inertia", "Tailwind CSS"],
      githubLink: "https://github.com/maybeizen/pasteit",
      category: "Frontend",
    },
    {
      name: "PteroLink",
      description:
        "npm package to communicate with the Pterodactyl API. Unfortunately, the project is currently on hold.",
      technologies: ["TypeScript", "Node.js"],
      githubLink: "https://github.com/maybeizen/pterolink",
      category: "Backend",
    },
    {
      name: "membercat.com",
      description: "Site for Membercat Studios, built with Laravel and React.",
      technologies: ["Laravel", "React.js", "Inertia.js"],
      githubLink: "https://github.com/Membercat-Studios/membercat.com",
      category: "Frontend",
    },
    {
      name: "Voxyn Labs",
      description: "Landing page and info site for Voxyn Labs.",
      technologies: ["Svelte", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/VoxynLabs/voxynlabs.github.io",
      category: "Frontend",
    },
    {
      name: "Portfolio",
      description: "This very portfolio site, built with React and Tailwind.",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/maybeizen/maybeizen.space",
      category: "Frontend",
    },
  ];

  const secondaryProjects = [
    {
      name: "NetherCore",
      description: "Custom Discord bot for Nether Host.",
      technologies: ["JavaScript", "TypeScript", "Node.js"],
      githubLink: "#",
      category: "Backend",
    },
    {
      name: "Performium",
      description: "Performance-oriented Minecraft modpack.",
      technologies: ["Java", "Fabric"],
      modrinthLink: "https://modrinth.com/modpack/performium-was-taken",
      category: "Backend",
    },
  ];

  const categories = ["All", "Frontend", "Backend"];
  const [filteredMain, setFilteredMain] = useState(mainProjects);
  const [filteredSecondary, setFilteredSecondary] = useState(secondaryProjects);

  useEffect(() => {
    setFilteredMain(
      activeFilter === "All"
        ? mainProjects
        : mainProjects.filter((p) => p.category === activeFilter)
    );
    setFilteredSecondary(
      activeFilter === "All"
        ? secondaryProjects
        : secondaryProjects.filter((p) => p.category === activeFilter)
    );
  }, [activeFilter]);

  const openLink = (url) => {
    if (url && url !== "#") window.open(url, "_blank");
  };

  return (
    <section id="projects" className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-6"
        >
          Projects
        </motion.h2>
        <div className="h-[2px] bg-violet-500 w-24 mx-auto mb-12"></div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm border rounded-sm transition-colors ${
                activeFilter === category
                  ? "bg-violet-500 text-black"
                  : "border-white/20 text-white/70 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredMain.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/5 p-6 rounded-md hover:border-violet-500 transition cursor-pointer"
                onClick={() => openLink(project.githubLink)}
              >
                <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 border border-white/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 rounded-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredSecondary.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 bg-white/5 p-6 rounded-md hover:border-violet-500 transition cursor-pointer"
                  onClick={() =>
                    openLink(project.githubLink || project.modrinthLink)
                  }
                >
                  <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                  <p className="text-white/70 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 border border-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
