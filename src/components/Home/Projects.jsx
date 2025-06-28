import React, { useState, useEffect } from "react";
import { mainProjects, secondaryProjects } from "./projects-data";
import CategoryFilters from "./CategoryFilters";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [filteredMain, setFilteredMain] = useState(mainProjects);
  const [filteredSecondary, setFilteredSecondary] = useState(secondaryProjects);

  const categories = ["All", "Backend", "Frontend"];

  useEffect(() => {
    let filtered = mainProjects;

    // Apply category filter only
    if (activeFilter !== "All") {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    setFilteredMain(filtered);

    // Apply same filter to secondary projects
    let filteredSecondary = secondaryProjects;
    if (activeFilter !== "All") {
      filteredSecondary = filteredSecondary.filter(
        (p) => p.category === activeFilter
      );
    }
    setFilteredSecondary(filteredSecondary);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Projects
        </h2>
        <div className="h-[2px] bg-violet-500 w-24 mx-auto mb-12"></div>

        <CategoryFilters
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectGrid projects={filteredMain} />

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
