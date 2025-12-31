import { experienceCards, organizationCards } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {experienceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/30 transition-colors"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg">
                  <i className={`text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-lg font-semibold">{card.title}</h4>
              </div>
              <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-md text-xs text-[#a0a0a0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {card.links && (
                <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
                  <div className="flex flex-wrap gap-2">
                    {card.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg text-sm hover:bg-blue-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            Organizations & Competitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {organizationCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border border-blue-400/20 p-6 rounded-lg hover:border-blue-400/40 transition-colors"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg">
                    <i className={`text-lg ${card.icon}`}></i>
                  </div>
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                </div>
                <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-md text-xs text-[#a0a0a0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {card.links && (
                  <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
                    <div className="flex flex-wrap gap-2">
                      {card.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg text-sm hover:bg-blue-400 transition-colors inline-flex items-center gap-2"
                        >
                          {link.name}
                          <i className="fa-solid fa-external-link-alt text-xs"></i>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
