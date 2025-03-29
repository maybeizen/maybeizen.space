import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", mouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHover);
      element.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHover);
        element.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-30 opacity-10 blur-3xl"
        style={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1.3 : 1,
        }}
      >
        <div className="w-72 h-72 bg-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-30 opacity-20 blur-xl"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.1 : 1,
        }}
      >
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </motion.div>
    </>
  );
};

export default MouseEffect;
