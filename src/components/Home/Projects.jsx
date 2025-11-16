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
    <section id="projects" className="bg-[#fffbf0] text-black py-28 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-heading text-black">PROJECTS</h2>

        <div className="text-left">
          <ProjectGrid projects={filteredMain} />
        </div>

        {filteredSecondary.length > 0 && (
          <>
            <div className="text-center mt-16">
              <button
                onClick={() => setShowMore(!showMore)}
                className="neobrutal-btn neobrutal-btn-secondary"
              >
                {showMore ? "SHOW LESS" : "SEE MORE"}
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
