import React from "react";
import PropTypes from "prop-types";

const CategoryFilters = ({ categories, activeFilter, setActiveFilter }) => {
  return (
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
  );
};

CategoryFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default CategoryFilters;
