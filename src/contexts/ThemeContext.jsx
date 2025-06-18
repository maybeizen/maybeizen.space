import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const themes = {
  light: {
    id: "light",
    name: "Light",
    icon: "fa-sun",
  },
  dark: {
    id: "dark",
    name: "Dark",
    icon: "fa-moon",
  },
  system: {
    id: "system",
    name: "System",
    icon: "fa-desktop",
  },
  anime: {
    id: "anime",
    name: "Anime",
    icon: "fa-sparkles",
  },
  cyberpunk: {
    id: "cyberpunk",
    name: "Cyberpunk",
    icon: "fa-robot",
  },
  terminal: {
    id: "terminal",
    name: "Terminal",
    icon: "fa-terminal",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark.id);
  const [systemTheme, setSystemTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && Object.keys(themes).includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const activeTheme = theme === "system" ? systemTheme : theme;

    document.body.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-anime",
      "theme-cyberpunk",
      "theme-terminal"
    );

    document.body.classList.add(`theme-${activeTheme}`);

    document.body.classList.remove("dark-mode", "light-mode");

    if (["light", "dark"].includes(activeTheme)) {
      document.body.classList.add(
        activeTheme === "dark" ? "dark-mode" : "light-mode"
      );
    } else {
      document.body.classList.add("dark-mode");
    }

    document.documentElement.style.setProperty(
      "color-scheme",
      ["dark", "cyberpunk", "terminal"].includes(activeTheme) ? "dark" : "light"
    );

    localStorage.setItem("theme", theme);
  }, [theme, systemTheme]);

  const changeTheme = (newTheme) => {
    if (Object.keys(themes).includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeTheme,
        availableThemes: themes,
        effectiveTheme: theme === "system" ? systemTheme : theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
