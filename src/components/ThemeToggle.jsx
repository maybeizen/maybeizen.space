import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { currentTheme, changeTheme, effectiveTheme } =
    useContext(ThemeContext);

  const toggleTheme = () => {
    changeTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-6 right-6 z-50 w-16 h-16 flex items-center justify-center bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        effectiveTheme === "dark" ? "light" : "dark"
      } mode`}
    >
      <motion.div
        animate={{
          rotate: effectiveTheme === "dark" ? 0 : 180,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {effectiveTheme === "dark" ? (
          <motion.i
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="far fa-sun text-2xl"
          ></motion.i>
        ) : (
          <motion.i
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="far fa-moon text-2xl"
          ></motion.i>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
