// NOT INCLUDED IN PRODUCTION

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    {
      name: "GitHub",
      href: "https://github.com/maybeizen",
      icon: "fa-brands fa-github",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white hover:text-sky-400 transition-colors"
        >
          maybeizen
        </motion.div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none 
            hover:text-sky-400 
            transition-colors 
            text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className=" flex items-center gap-2 text-sky-300 
                hover:text-sky-400 
                hover:scale-105 
                transition-all 
                duration-300 
                font-semibold"
            >
              {item.icon && <i className={item.icon}></i>}
              <span>{item.name}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 px-4 pt-4 pb-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="block 
                  py-2 
                  text-sky-300 
                  hover:text-sky-400 
                  hover:bg-zinc-800 
                  transition-all 
                  duration-300 
                  rounded-md 
                  font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
