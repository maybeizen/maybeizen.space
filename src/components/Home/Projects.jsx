import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainProjects, secondaryProjects } from "./projects-data";
import CategoryFilters from "./CategoryFilters";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [filteredMain, setFilteredMain] = useState(mainProjects);
  const [filteredSecondary, setFilteredSecondary] = useState(secondaryProjects);

  const categories = ["All", "Frontend", "Backend"];

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
    setFlippedCard(null);
  }, [activeFilter]);

  const handleCardFlip = (index, event) => {
    event.stopPropagation();
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

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

        <CategoryFilters
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectGrid
          projects={filteredMain}
          flippedCard={flippedCard}
          handleCardFlip={handleCardFlip}
          openLink={openLink}
        />

        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 rounded-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "See More"}
          </motion.button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectGrid
                projects={filteredSecondary}
                flippedCard={flippedCard}
                handleCardFlip={handleCardFlip}
                openLink={openLink}
                isSecondary={true}
                className="mt-12"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
