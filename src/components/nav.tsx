import { useState } from "react";
import { navItems } from "../data/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-lg font-semibold text-[#e5e5e5] hover:text-blue-400 transition-colors"
        >
          maybeizen
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center text-[#a0a0a0] hover:text-blue-400 transition-colors rounded-lg hover:bg-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-blue-400 transition-colors font-medium"
            >
              {item.icon && <i className={item.icon}></i>}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="block py-3 px-6 text-sm text-[#a0a0a0] hover:text-blue-400 hover:bg-[#1a1a1a] transition-colors font-medium"
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
