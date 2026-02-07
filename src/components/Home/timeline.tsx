import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineEvents } from "../../data/timeline";
import ButtonLink from "../ui/link-button";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const handleEventClick = (index: number) => {
    if (selectedEvent === index) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(index);
    }
  };

  return (
    <section id="timeline" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          My Journey
        </h2>

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-[#1a1a1a]"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const isExpanded = selectedEvent === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-3 md:left-4 top-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#0a0a0a] z-10"></div>

                  <motion.div
                    className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-lg hover:border-blue-400/30 transition-all duration-300 cursor-pointer group"
                    onClick={() => handleEventClick(index)}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6">
                      {event.year && (
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-blue-400/10 text-blue-400 text-xs font-medium rounded-md border border-blue-400/20">
                            {event.year}
                          </span>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg group-hover:bg-blue-400/20 transition-colors flex-shrink-0">
                          <i className={`${event.icon} text-lg`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold">
                            {event.title}
                          </h3>
                          <p className="text-[#a0a0a0] text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-[#1a1a1a]">
                              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                {event.details}
                              </p>
                              <div className="mt-4 flex items-center gap-2 text-xs text-blue-400">
                                <i className="fa-solid fa-chevron-up"></i>
                                <span>Click to collapse</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isExpanded && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-[#a0a0a0] group-hover:text-blue-400 transition-colors">
                          <i className="fa-solid fa-chevron-down"></i>
                          <span>Click to expand</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <ButtonLink href="#projects">
            See My Work
            <i className="fa-solid fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform"></i>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
