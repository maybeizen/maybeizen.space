/* 
  !!!!
  !!!!

  NOT INCLUDED IN PRODUCTION

  !!!!
  !!!!
*/

import React, { useState } from "react";

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
        <div className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
          maybeizen
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none hover:text-sky-400 transition-colors text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="flex items-center gap-2 text-sky-300 hover:text-sky-400 transition-colors font-semibold"
            >
              {item.icon && <i className={item.icon}></i>}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 px-4 pt-4 pb-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="block py-2 text-sky-300 hover:text-sky-400 hover:bg-zinc-800 transition-colors rounded-md font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
