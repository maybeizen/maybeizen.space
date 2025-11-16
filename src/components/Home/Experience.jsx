import React from "react";

const Experience = () => {
  const cardColors = ["bg-white", "bg-[#ffeb3b]", "bg-[#2196f3]", "bg-[#ff1744]"];

  return (
    <section id="experience" className="bg-[#fffbf0] py-28 text-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-heading text-black">EXPERIENCE</h2>

        <div className="mb-20">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] text-left max-w-3xl mx-auto">
            <p className="text-lg font-bold leading-relaxed">
              MY JOURNEY IN TECHNOLOGY SPANS ACROSS MULTIPLE DOMAINS, FROM HANDS-ON HARDWARE REPAIR TO BUILDING AND SCALING HOSTING INFRASTRUCTURE. THIS DIVERSE BACKGROUND GIVES ME A UNIQUE PERSPECTIVE ON HOW DIFFERENT TECHNOLOGIES INTERCONNECT AND HOW TO BUILD SOLUTIONS THAT WORK IN THE REAL WORLD.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {experienceCards.map((card, idx) => (
            <div
              key={idx}
              className={`${cardColors[idx % cardColors.length]} border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] text-left transition-all hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                  <i className={`text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-black text-xl font-black uppercase">{card.title}</h4>
              </div>
              <p className="text-black font-bold text-sm mb-4 leading-relaxed">{card.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="neobrutal-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {card.links && (
                <div className="mt-6 pt-4 border-t-4 border-black">
                  <div className="flex flex-wrap gap-2">
                    {card.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neobrutal-btn neobrutal-btn-blue text-sm"
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
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12">
            ORGANIZATIONS & COMPETITIONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {organizationCards.map((card, idx) => (
              <div
                key={idx}
                className={`${idx % 2 === 0 ? 'bg-[#4caf50]' : 'bg-[#9c27b0]'} border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] text-left transition-all hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 text-white`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                    <i className={`text-lg ${card.icon}`}></i>
                  </div>
                  <h4 className="text-white text-xl font-black uppercase">{card.title}</h4>
                </div>
                <p className="text-white font-bold text-sm mb-4 leading-relaxed">{card.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="neobrutal-tag bg-white text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {card.links && (
                  <div className="mt-6 pt-4 border-t-4 border-white">
                    <div className="flex flex-wrap gap-2">
                      {card.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neobrutal-btn neobrutal-btn-secondary text-sm"
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

const organizationCards = [
  {
    icon: "fa-solid fa-users",
    title: "Business Professionals of America",
    description:
      "Active member of Business Professionals of America (BPA), the nation's leading Career Technical Student Organization for students pursuing careers in business management, information technology, and related fields.",
    tags: [
      "BPA Member",
      "CTSO",
      "Leadership",
      "Professional Development",
      "Networking",
    ],
    links: [{ name: "BPA", url: "https://bpa.org" }],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "AFA CyberPatriot",
    description:
      "Competed in AFA CyberPatriot 17 and 18, the nation's largest youth cyber defense competition, showcasing cybersecurity skills and technical expertise in securing virtual networks.",
    tags: [
      "AFA CyberPatriot 17",
      "AFA CyberPatriot 18",
      "Cybersecurity",
      "Competition",
      "Network Defense",
    ],
    links: [
      { name: "AFA CyberPatriot", url: "https://www.uscyberpatriot.org" },
    ],
  },
];

export default Experience;
