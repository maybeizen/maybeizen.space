import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    {
      name: "GITHUB",
      href: "https://github.com/maybeizen",
      icon: "fa-brands fa-github",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-[0px_8px_0px_0px_#000000]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black uppercase text-black hover:text-[#ff1744] transition-colors">
          MAYBEIZEN
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="flex items-center gap-2 text-black hover:text-[#ff1744] transition-colors font-black uppercase text-sm border-2 border-transparent hover:border-black px-3 py-1"
            >
              {item.icon && <i className={item.icon}></i>}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="block py-3 px-4 text-black hover:bg-[#ffeb3b] transition-colors font-black uppercase border-b-2 border-black"
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
