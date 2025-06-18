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
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center interactive"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        effectiveTheme === "dark" ? "light" : "dark"
      } mode`}
      style={{
        background: ["dark", "cyberpunk", "terminal", "anime"].includes(
          effectiveTheme
        )
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        border: ["dark", "cyberpunk", "terminal", "anime"].includes(
          effectiveTheme
        )
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        animate={{
          rotate: ["dark", "cyberpunk", "terminal", "anime"].includes(
            effectiveTheme
          )
            ? 0
            : 180,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {["dark", "cyberpunk", "terminal", "anime"].includes(effectiveTheme) ? (
          <motion.i
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="far fa-sun"
          ></motion.i>
        ) : (
          <motion.i
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="far fa-moon"
          ></motion.i>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
