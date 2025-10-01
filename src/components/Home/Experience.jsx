import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-black py-28 text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Experience
        </h2>

        <div className="space-y-6 text-base leading-relaxed max-w-3xl mx-auto mb-16">
          <p>
            My journey in technology spans across multiple domains, from
            hands-on hardware repair to building and scaling hosting
            infrastructure. This diverse background gives me a unique
            perspective on how different technologies interconnect and how to
            build solutions that work in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-left"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded">
                  <i className={`text-white text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-white text-lg font-medium">{card.title}</h4>
              </div>
              <p className="text-white/70 text-sm mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {card.links && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {card.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs bg-violet-500/20 border border-violet-500/30 rounded text-violet-300 hover:bg-violet-500/30 hover:border-violet-500/50 transition-colors"
                      >
                        {link.name}{" "}
                        <i className="fa-solid fa-external-link-alt ml-1"></i>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const experienceCards = [
  {
    icon: "fa-brands fa-linux",
    title: "Linux Systems",
    description:
      "Extensive experience with Linux administration and server management across various hosting environments and distributions.",
    tags: [
      "Ubuntu",
      "CentOS",
      "Debian",
      "Docker",
      "Systemd",
      "Bash Scripting",
      "Server Hardening",
    ],
  },
  {
    icon: "fa-solid fa-tools",
    title: "IT & Repair",
    description:
      "Hardware troubleshooting, system repair, and technical support experience across various platforms and devices.",
    tags: [
      "Hardware Diagnostics",
      "System Repair",
      "Network Troubleshooting",
      "Data Recovery",
      "Technical Support",
      "System Migration",
    ],
  },
  {
    icon: "fa-solid fa-server",
    title: "Game Hosting Industry",
    description:
      "Co-owner of Nether Host (100,000+ users), founder of Orvex, and developing BreezeNodes. Deep involvement in the game hosting ecosystem.",
    tags: [
      "Nether Host",
      "Orvex",
      "BreezeNodes",
      "Server Optimization",
      "Pterodactyl Panel",
      "Game Server Management",
    ],
    links: [
      { name: "Nether Host", url: "https://netherhost.cc" },
      { name: "BreezeNodes", url: "https://breezenodes.com" },
    ],
  },
];

export default Experience;
