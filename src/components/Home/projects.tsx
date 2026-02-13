import { useState, useEffect } from "react";
import { mainProjects, secondaryProjects, orvexProjects, Project } from "../../data/projects";
import ProjectGrid from "./project-grid";
import OrvexCard from "./orvex-card";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [filteredMain, setFilteredMain] = useState<Project[]>(mainProjects);
  const [filteredSecondary, setFilteredSecondary] =
    useState<Project[]>(secondaryProjects);
  const [filteredOrvex, setFilteredOrvex] =
    useState<Project[]>(orvexProjects);

  useEffect(() => {
    setFilteredMain(mainProjects);
    setFilteredSecondary(secondaryProjects);
    setFilteredOrvex(orvexProjects);
  }, []);

  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Projects
        </h2>

        <div>
          <ProjectGrid projects={filteredMain} />
        </div>

        {filteredOrvex.length > 0 && (
          <div className="mt-12">
            <OrvexCard projects={filteredOrvex} />
          </div>
        )}

        {filteredSecondary.length > 0 && (
          <>
            <div className="text-center mt-16">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-3 border border-[#1a1a1a] text-[#e5e5e5] font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                {showMore ? "Show Less" : "See More"}
              </button>
            </div>

            {showMore && (
              <div className="mt-12">
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
