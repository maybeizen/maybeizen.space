import { createContext, useState, useEffect, ReactNode } from "react";

export interface Theme {
  id: string;
  name: string;
  icon: string;
}

export const themes: Record<string, Theme> = {
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
};

interface ThemeContextType {
  currentTheme: string;
  changeTheme: (theme: string) => void;
  availableThemes: Record<string, Theme>;
  effectiveTheme: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(themes.dark.id);
  const [systemTheme, setSystemTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && Object.keys(themes).includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const activeTheme = theme === "system" ? systemTheme : theme;
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("theme", theme);
  }, [theme, systemTheme]);

  const changeTheme = (newTheme: string) => {
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

