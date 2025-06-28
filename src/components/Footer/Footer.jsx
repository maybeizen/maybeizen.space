import React from "react";
import ThemeSelector from "./ThemeSelector";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 tracking-tight">
            maybeizen
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Backend developer passionate about building robust, scalable systems
            and APIs.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-violet-400 transition-colors"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:contact@maybeizen.space"
              className="text-white/50 hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Navigation</h3>
          <ul className="space-y-3 text-white/60 text-sm">
            {["Home", "Skills", "Projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Want to collaborate or have questions? I'm always open to chat.
          </p>
          <a
            href="mailto:contact@maybeizen.space"
            className="inline-block text-sm text-violet-400 hover:text-white transition-colors"
          >
            contact@maybeizen.space
          </a>
        </div>
      </div>

      <div className="border-t max-w-6xl mx-auto border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white/40 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} maybeizen. Crafted with care.
        </div>

        <div>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
