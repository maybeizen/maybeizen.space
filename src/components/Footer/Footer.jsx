import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/maybeizen",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/maybeizen",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Email",
      url: "mailto:contact@maybeizen.com",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <footer className="bg-zinc-950 py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-zinc-500 
          hover:text-sky-300 
          transition-colors 
          duration-300"
        >
          © {new Date().getFullYear()}. Made with ❤️ by maybeizen.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
