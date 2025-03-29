import React from "react";
import { motion } from "framer-motion";

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:40px_40px] animate-subtle-shift"></div>

      {/* Border gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </motion.div>

      {/* Top gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/[0.03] to-transparent"
      ></motion.div>

      {/* Bottom gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/[0.03] to-transparent"
      ></motion.div>
    </div>
  );
};

export default BackgroundPattern;
