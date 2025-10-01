import React, { useState, useEffect } from "react";
import { mainProjects, secondaryProjects } from "./projects-data";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [filteredMain, setFilteredMain] = useState(mainProjects);
  const [filteredSecondary, setFilteredSecondary] = useState(secondaryProjects);

  useEffect(() => {
    let filtered = mainProjects;

    setFilteredMain(filtered);

    let filteredSecondary = secondaryProjects;
    setFilteredSecondary(filteredSecondary);
  }, []);

  return (
    <section id="projects" className="bg-black text-white py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Projects
        </h2>

        <div className="text-left">
          <ProjectGrid projects={filteredMain} />
        </div>

        {filteredSecondary.length > 0 && (
          <>
            <div className="text-center mt-16">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 rounded-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
              >
                {showMore ? "Show Less" : "See More"}
              </button>
            </div>

            {showMore && (
              <div className="mt-12 text-left">
                <ProjectGrid projects={filteredSecondary} isSecondary={true} />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
