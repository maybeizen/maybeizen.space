import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SecretPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState("/");
  const [username, setUsername] = useState("visitor");
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const fileSystem = {
    "/": ["home", "etc", "usr", "var"],
    "/home": ["visitor", "readme.txt"],
    "/home/visitor": ["stats.txt"],
    "/etc": ["website.config"],
    "/usr": ["share", "local"],
    "/var": ["www"],
  };

  const fileContents = {
    "/home/readme.txt":
      'Welcome to the Secret Terminal\n\nThis terminal gives you access to the website system.\nType "help" to see available commands.',
    "/home/visitor/stats.txt": () =>
      `Visitor number: ${visitorCount}\nAccess granted at: ${new Date().toLocaleString()}`,
    "/etc/website.config":
      "SITE_NAME=MaybeIzen\nVERSION=1.0.0\nTHEME=dark\nDEBUG_MODE=false\nSECRET_TERMINAL=enabled",
  };

  const commands = {
    help: () => {
      return {
        output: `Available commands:
  ls                  - List directory contents
  cd [directory]      - Change directory
  cat [file]          - Display file contents
  clear               - Clear terminal
  whoami              - Display current user
  theme [color]       - Change terminal color (green, blue, amber, red)
  stats               - Display visitor statistics
  ascii-art           - Display ASCII art
  exit                - Return to main website`,
        newPath: currentPath,
      };
    },

    ls: (args) => {
      const path = args[0] || currentPath;
      const normalizedPath = normalizePath(path);

      if (!fileSystem[normalizedPath]) {
        return {
          output: `ls: cannot access '${path}': No such file or directory`,
          newPath: currentPath,
        };
      }

      return {
        output: fileSystem[normalizedPath].join("  "),
        newPath: currentPath,
      };
    },

    cd: (args) => {
      if (!args[0]) {
        return { output: "", newPath: "/" };
      }

      const targetPath = normalizePath(args[0], currentPath);

      if (!fileSystem[targetPath] && targetPath !== "/") {
        return {
          output: `cd: ${args[0]}: No such file or directory`,
          newPath: currentPath,
        };
      }

      return { output: "", newPath: targetPath };
    },

    cat: (args) => {
      if (!args[0]) {
        return {
          output: "cat: missing file operand",
          newPath: currentPath,
        };
      }

      const targetPath = normalizePath(args[0], currentPath);

      if (fileSystem[targetPath]) {
        return {
          output: `cat: ${args[0]}: Is a directory`,
          newPath: currentPath,
        };
      }

      const parentDir = targetPath.substring(0, targetPath.lastIndexOf("/"));
      const filename = targetPath.substring(targetPath.lastIndexOf("/") + 1);

      if (!fileSystem[parentDir] || !fileSystem[parentDir].includes(filename)) {
        return {
          output: `cat: ${args[0]}: No such file or directory`,
          newPath: currentPath,
        };
      }

      const content = fileContents[targetPath];
      if (typeof content === "function") {
        return { output: content(), newPath: currentPath };
      }

      return {
        output: content || `cat: ${args[0]}: Empty file`,
        newPath: currentPath,
      };
    },

    clear: () => {
      setHistory([]);
      return { output: "", newPath: currentPath };
    },

    whoami: () => {
      return {
        output: username,
        newPath: currentPath,
      };
    },

    theme: (args) => {
      const validThemes = ["green", "blue", "amber", "red"];
      const theme = args[0]?.toLowerCase();

      if (!theme || !validThemes.includes(theme)) {
        return {
          output: `Usage: theme [${validThemes.join("|")}]\nCurrent theme: ${
            localStorage.getItem("terminalTheme") || "green"
          }`,
          newPath: currentPath,
        };
      }

      localStorage.setItem("terminalTheme", theme);
      document.documentElement.style.setProperty(
        "--terminal-color",
        getThemeColor(theme)
      );

      return {
        output: `Terminal theme changed to ${theme}`,
        newPath: currentPath,
      };
    },

    stats: () => {
      return {
        output: `Terminal Statistics:
Visitor number: ${visitorCount}
Current user: ${username}
Terminal access count: ${localStorage.getItem("terminalAccessCount") || 1}
First access: ${
          localStorage.getItem("firstAccess") || new Date().toLocaleString()
        }`,
        newPath: currentPath,
      };
    },

    "ascii-art": () => {
      return {
        output: `
   _____                     _   _____                   _             _ 
  / ____|                   | | |_   _|                 (_)           | |
 | (___   ___  ___ _ __ ___| |_  | |  ___ _ __ _ __ ___  _ _ __   __ _| |
  \\___ \\ / _ \\/ __| '__/ _ \\ __| | | / _ \\ '__| '_ ' _ \\| | '_ \\ / _' | |
  ____) |  __/ (__| | |  __/ |_ _| ||  __/ |  | | | | | | | | | | (_| | |
 |_____/ \\___|\\___|_|  \\___|\\__|_____|___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
        `,
        newPath: currentPath,
      };
    },

    exit: () => {
      setTimeout(() => {
        navigate("/");
      }, 500);

      return {
        output: "Closing terminal session...\nRedirecting to main site...",
        newPath: currentPath,
      };
    },
  };

  function normalizePath(path, basePath = "/") {
    if (path.startsWith("/")) {
      return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
    }

    let resolvedPath;
    if (basePath === "/") {
      resolvedPath = "/" + path;
    } else {
      resolvedPath = basePath + "/" + path;
    }

    if (path === "..") {
      const parts = basePath.split("/");
      if (parts.length > 1) {
        parts.pop();
        return parts.join("/") || "/";
      }
      return "/";
    }

    return resolvedPath.endsWith("/") && resolvedPath !== "/"
      ? resolvedPath.slice(0, -1)
      : resolvedPath;
  }

  function getThemeColor(theme) {
    const themeColors = {
      green: "#00ff00",
      blue: "#00bfff",
      amber: "#ffbf00",
      red: "#ff3333",
    };

    return themeColors[theme] || themeColors.green;
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("terminalTheme") || "green";
    document.documentElement.style.setProperty(
      "--terminal-color",
      getThemeColor(savedTheme)
    );

    const accessCount = parseInt(
      localStorage.getItem("terminalAccessCount") || "0"
    );
    localStorage.setItem("terminalAccessCount", (accessCount + 1).toString());

    if (!localStorage.getItem("firstAccess")) {
      localStorage.setItem("firstAccess", new Date().toLocaleString());
    }

    const storedCount = localStorage.getItem("secretVisitorCount") || "0";
    const newCount = parseInt(storedCount) + 1;
    localStorage.setItem("secretVisitorCount", newCount.toString());
    setVisitorCount(newCount);

    const timer = setTimeout(() => {
      setIsLoaded(true);
      setHistory([
        { type: "system", content: `Secret Terminal v1.0 - Access Granted` },
        { type: "system", content: `Type 'help' for available commands.` },
      ]);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }

    if (inputRef.current && isLoaded) {
      inputRef.current.focus();
    }
  }, [history, isLoaded]);

  const handleCommand = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const parts = input.trim().split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        content: `${username}@terminal:${currentPath}$ ${input}`,
      },
    ]);

    if (commands[cmd]) {
      const result = commands[cmd](args);

      if (result.output) {
        setHistory((prev) => [
          ...prev,
          { type: "output", content: result.output },
        ]);
      }

      if (result.newPath) {
        setCurrentPath(result.newPath);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: ${cmd}. Type 'help' for available commands.`,
        },
      ]);
    }

    setInput("");
  };

  return (
    <div
      className="min-h-screen bg-black overflow-hidden relative font-mono"
      style={{ backgroundColor: "#121212" }}
    >
      <style>
        {`
          :root {
            --terminal-color: #00ff00;
          }
          
          .terminal-output {
            color: var(--terminal-color);
          }
          
          .terminal-command {
            color: var(--terminal-color);
          }
          
          .terminal-input {
            color: var(--terminal-color);
            caret-color: var(--terminal-color);
          }
          
          .terminal-error {
            color: #ff3333;
          }
          
          .terminal-system {
            color: #ffffff;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          .cursor {
            display: inline-block;
            width: 8px;
            height: 16px;
            background-color: var(--terminal-color);
            animation: blink 1s step-end infinite;
            margin-left: 2px;
            vertical-align: middle;
          }
        `}
      </style>

      {!isLoaded ? (
        <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
          <div className="w-16 h-16 border-4 border-t-green-500 border-green-200/30 rounded-full animate-spin mb-8"></div>
          <div className="text-green-500 text-xl font-mono">
            <span>Initializing terminal</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ...
            </motion.span>
          </div>
          <div className="text-green-300/70 text-sm mt-2 font-mono">
            Establishing connection
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 max-w-4xl">
          <div className="bg-gray-800 rounded-t-md p-2 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-center flex-grow text-sm text-gray-400">
              Secret Terminal - User: {username}
            </div>
          </div>

          <div
            ref={terminalRef}
            className="bg-black/90 h-[70vh] p-4 overflow-y-auto rounded-b-md font-mono text-sm"
          >
            {history.map((entry, index) => (
              <div
                key={index}
                className={`mb-1 whitespace-pre-wrap terminal-${entry.type}`}
              >
                {entry.content}
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex">
              <span className="terminal-command">
                {username}@terminal:{currentPath}${" "}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent flex-grow outline-none ml-2 terminal-input"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretPage;
