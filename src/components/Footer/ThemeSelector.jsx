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

  const getThemePreviewColors = (themeId) => {
    switch (themeId) {
      case "light":
        return ["#f5f5f5", "#1a1a1a", "#7c3aed"];
      case "dark":
        return ["#121212", "#ffffff", "#8b5cf6"];
      case "anime":
        return ["#2a1b3d", "#f6e58d", "#ff9ff3"];
      case "cyberpunk":
        return ["#0a0a18", "#f9ca24", "#00ff9f"];
      case "terminal":
        return ["#0c0c0c", "#00ff00", "#ffffff"];
      default:
        return ["#121212", "#ffffff", "#8b5cf6"];
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors bg-white/5 hover:bg-white/10"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <i className={`fa-solid ${currentThemeObj.icon}`}></i>
        <span>{currentThemeObj.name}</span>
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
            className="absolute bottom-full mb-2 right-4 min-w-[200px] bg-zinc-900 border border-white/10 rounded-md shadow-lg z-50 py-2 overflow-hidden"
          >
            {Object.values(themes).map((theme) => {
              const isActive = currentTheme === theme.id;
              const colors = getThemePreviewColors(theme.id);

              return (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors hover:bg-white/5 ${
                    isActive ? "bg-white/10" : ""
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center border border-white/20 overflow-hidden"
                    style={{ backgroundColor: colors[0] }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: colors[2] }}
                    ></div>
                  </div>
                  <span>{theme.name}</span>
                  {isActive && (
                    <i className="fa-solid fa-check ml-auto text-violet-400"></i>
                  )}
                </button>
              );
            })}

            <div className="border-t border-white/10 mt-2 pt-2 px-4">
              <p className="text-xs text-white/40 italic">
                Current: {themes[effectiveTheme].name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
