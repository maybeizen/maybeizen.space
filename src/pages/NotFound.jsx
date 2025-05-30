import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  const [keySequence, setKeySequence] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [portalCharges, setPortalCharges] = useState(0);

  const secretCode = "term";

  useEffect(() => {
    if (keySequence.endsWith(secretCode)) {
      setTimeout(() => {
        navigate("/secret");
      }, 2000);
    }

    let matchCount = 0;
    for (let i = 0; i < keySequence.length; i++) {
      const lastChars = keySequence.slice(-(i + 1));
      const codeStart = secretCode.slice(0, lastChars.length);
      if (lastChars === codeStart) {
        matchCount = lastChars.length;
        break;
      }
    }
    setPortalCharges(matchCount);
  }, [keySequence, navigate]);

  const handleKeyDown = (e) => {
    if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
      const newSequence = keySequence + e.key.toLowerCase();
      setKeySequence(newSequence.slice(-10));
      setShowHint(true);
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {portalCharges > 0 && (
        <motion.div
          className="fixed inset-0 pointer-events-none bg-black z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(20)].map((_, i) => (
              <React.Fragment key={`grid-${i}`}>
                <motion.div
                  className="absolute h-px bg-blue-500 left-0 right-0"
                  style={{ top: `${i * 5}%` }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: portalCharges >= 1 ? 1 : 0,
                    opacity: portalCharges >= 1 ? 0.7 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.02,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-px bg-blue-500 top-0 bottom-0"
                  style={{ left: `${i * 5}%` }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{
                    scaleY: portalCharges >= 1 ? 1 : 0,
                    opacity: portalCharges >= 1 ? 0.7 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.02 + 0.5,
                    ease: "easeInOut",
                  }}
                />
              </React.Fragment>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className={`absolute rounded-full border-2 ${
                  portalCharges > i
                    ? "border-blue-500 border-opacity-70"
                    : "border-blue-900 border-opacity-30"
                }`}
                style={{
                  width: `${60 - i * 10}vmin`,
                  height: `${60 - i * 10}vmin`,
                  boxShadow:
                    portalCharges > i
                      ? `0 0 20px rgba(59, 130, 246, ${0.2 + i * 0.1})`
                      : "none",
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: i * 30,
                }}
                animate={{
                  opacity: portalCharges > i ? 1 : 0.3,
                  scale: portalCharges > i ? [1, 1.05, 1] : 0.8,
                  rotate: portalCharges > i ? i * 30 + 360 : i * 30,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}

            {portalCharges >= 2 && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`beam-${i}`}
                    className="absolute bg-blue-500 rounded-full origin-center"
                    style={{
                      width: "2px",
                      height: "40vmin",
                      rotate: `${i * 45}deg`,
                      opacity: 0.6,
                    }}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </>
            )}

            {portalCharges >= 3 && (
              <motion.div
                className="absolute bg-blue-400 rounded-full blur-md"
                initial={{ width: "5vmin", height: "5vmin", opacity: 0 }}
                animate={{
                  width: ["5vmin", "10vmin", "5vmin"],
                  height: ["5vmin", "10vmin", "5vmin"],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {portalCharges >= 2 && (
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute text-xs text-blue-500 font-mono opacity-70"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: "-20%",
                      opacity: 0,
                    }}
                    animate={{
                      y: "120%",
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  >
                    {Math.random() > 0.5 ? "1" : "0"}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {portalCharges === 4 && (
        <motion.div
          className="fixed inset-0 bg-black z-30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 border border-blue-500 rounded-md opacity-70" />

            <motion.div
              className="absolute h-px w-full bg-blue-400 opacity-50 blur-sm"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="font-mono mb-4">
                <div className="text-blue-500 mb-2 text-sm">SYSTEM ACCESS</div>
                <div className="text-2xl font-bold text-blue-400">
                  TERMINAL ACCESS GRANTED
                </div>
              </div>

              <motion.div
                className="font-mono text-blue-300 text-sm mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div>Establishing secure connection...</div>
                <div>Authentication successful</div>
                <div>Redirecting to command interface...</div>
              </motion.div>

              <motion.div
                className="w-16 h-1 bg-blue-500 mx-auto"
                animate={{ width: ["0%", "100%"] }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-blue-500">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found.</p>
          <p className="text-lg text-gray-400 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {showHint && (
            <motion.p
              className="text-sm text-blue-400 mb-8 italic font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              System detected. Type "term" to access terminal...
            </motion.p>
          )}

          <Link
            to="/"
            className="text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
