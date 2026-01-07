export interface ExperienceCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  links?: Array<{ name: string; url: string }>;
}

export const experienceCards: ExperienceCard[] = [
  {
    icon: "fa-brands fa-linux",
    title: "Linux Systems",
    description:
      "Extensive experience with Linux administration and server management across various hosting environments and distributions. Proficient in automation and infrastructure scaling.",
    tags: [
      "Ubuntu",
      "Debian",
      "Docker",
      "Systemd",
      "GRUB",
    ],
  },
  {
    icon: "fa-solid fa-tools",
    title: "IT & Repair",
    description:
      "Hands-on experience with hardware troubleshooting, system repair, and technical support across various platforms. Strong problem-solving skills and attention to detail.",
    tags: [
      "Hardware Diagnostics",
      "System Repair",
      "Network Troubleshooting",
      "Data Recovery",
      "Technical Support",
    ],
  },
  {
    icon: "fa-solid fa-server",
    title: "Game Hosting Industry",
    description:
      "Former COO of Nether Host (100,000+ users) and working with BreezeNodes. Experience in game hosting infrastructure and business operations.",
    tags: [
      "Nether Host",
      "BreezeNodes",
      "Pterodactyl Panel",
      "WHMCompleteSolution",
    ],
    links: [
      { name: "Nether Host", url: "https://netherhost.cc" },
      { name: "BreezeNodes", url: "https://breezenodes.com" },
    ],
  },
];

export const organizationCards: ExperienceCard[] = [
  {
    icon: "fa-solid fa-users",
    title: "Business Professionals of America",
    description:
      "Active member of Business Professionals of America (BPA), the nation's leading Career Technical Student Organization for students pursuing careers in business management, information technology, and related fields.",
    tags: [
      "BPA",
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
      "Competed in AFA CyberPatriot 18, the nation's largest youth cyber defense competition, showcasing cybersecurity skills and technical expertise in securing virtual networks.",
    tags: [
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
