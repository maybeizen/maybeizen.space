import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 tracking-tight">
            maybeizen
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Full-stack developer passionate about thoughtful, practical, and
            beautiful web solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:contact@maybeizen.space"
              className="text-white/50 hover:text-blue-400 transition"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-lg font-medium mb-4">Navigation</h3>
          <ul className="space-y-3 text-white/60 text-sm">
            {["Home", "Skills", "Projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Want to collaborate or have questions? I'm always open to chat.
          </p>
          <a
            href="mailto:contact@maybeizen.space"
            className="inline-block text-sm text-blue-400 hover:text-white transition"
          >
            contact@maybeizen.space
          </a>
        </motion.div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          &copy; {new Date().getFullYear()} maybeizen. Crafted with care.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
