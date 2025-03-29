import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
              MAYBEIZEN
            </h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Full stack developer passionate about creating elegant, functional
              solutions to complex problems.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/maybeizen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-medium text-white mb-8 tracking-wider">
              NAVIGATION
            </h3>
            <ul className="space-y-4">
              {["Home", "Skills", "Projects"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-lg flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
                    <span>{item.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium text-white mb-8 tracking-wider">
              CONTACT
            </h3>
            <p className="text-white/70 mb-6 text-lg leading-relaxed">
              Interested in working together? Feel free to reach out.
            </p>
            <a
              href="mailto:contact@maybeizen.space"
              className="text-white border-b-2 border-white/30 hover:border-white pb-1 inline-flex items-center gap-2 transition-all duration-300 text-lg"
            >
              <span>EMAIL ME</span>
              <span className="text-xs">↗</span>
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/50 text-sm"
          >
            © {new Date().getFullYear()} maybeizen. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3 mt-6 md:mt-0"
          >
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="text-white/70 text-sm tracking-wider">
              DESIGNED & BUILT WITH PRECISION
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
