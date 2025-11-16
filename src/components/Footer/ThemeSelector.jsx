import React, { useState, useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

const ThemeSelector = () => {
  const { currentTheme, changeTheme, effectiveTheme } =
    useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (themeId) => {
    changeTheme(themeId);
    setIsOpen(false);
  };

  const currentThemeObj = themes[currentTheme];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="neobrutal-btn neobrutal-btn-secondary flex items-center gap-2 px-4 py-2 text-sm"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <i className={`fa-solid ${currentThemeObj.icon}`}></i>
        <span className="uppercase">{currentThemeObj.name}</span>
        <i
          className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} text-xs`}
        ></i>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 right-0 min-w-[200px] bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] z-50 py-2"
          >
            {Object.values(themes).map((theme) => {
              const isActive = currentTheme === theme.id;

              return (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-all hover:bg-[#ffeb3b] font-bold uppercase ${
                    isActive ? "bg-[#ffeb3b]" : ""
                  }`}
                >
                  <i className={`fa-solid ${theme.icon}`}></i>
                  <span>{theme.name}</span>
                  {isActive && (
                    <i className="fa-solid fa-check ml-auto"></i>
                  )}
                </button>
              );
            })}

            <div className="border-t-4 border-black mt-2 pt-2 px-4">
              <p className="text-xs font-bold uppercase italic">
                CURRENT: {themes[effectiveTheme].name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
