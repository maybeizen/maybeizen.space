export interface Project {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  archived: boolean;
  liveLink?: string;
  githubLink?: string;
  modrinthLink?: string;
}

export const mainProjects: Project[] = [
  {
    name: "Portfolio",
    description: "This very portfolio site, built with React and Tailwind.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/maybeizen/maybeizen.space",
    liveLink: "https://maybeizen.space",
    category: "Frontend",
    archived: false,
  },
  {
    name: "EasyTPA",
    description: "Simple, powerful teleport requests for Minecraft servers",
    technologies: ["Java", "Fabric", "Gradle", "PaperMC"],
    githubLink: "https://github.com/Membercat-Studios/EasyTPA",
    modrinthLink: "https://modrinth.com/plugin/easytpa",
    category: "Backend",
    archived: false,
  },
  {
    name: "Performium",
    description:
      "Performance-oriented Minecraft modpack with 250,000+ downloads.",
    technologies: ["Java", "Fabric"],
    modrinthLink: "https://modrinth.com/modpack/performium-was-taken",
    githubLink: "https://github.com/Membercat-Studios/performium",
    category: "Backend",
    archived: false,
  },
];

export const secondaryProjects: Project[] = [
  {
    name: "DriftLabs",
    description: "Developer utilities made easy.",
    technologies: ["TypeScript", "MongoDB", "React", "GoLang"],
    liveLink: "https://driftlabs.dev",
    category: "Backend",
    archived: true,
  },
  {
    name: "PasteIt.lol",
    description:
      "A fast, minimalist pastebin alternative. Just paste your text, pick a language, and share the link. No accounts. No clutter.",
    technologies: ["Laravel", "React", "Tailwind CSS"],
    githubLink: "https://github.com/maybeizen/pasteit",
    liveLink: "https://pasteit.lol",
    category: "Frontend",
    archived: true,
  },
  {
    name: "NuboDB",
    description: "A straightfoward document-based local storage solution.",
    technologies: ["TypeScript", "Node.js", "BSON"],
    githubLink: "https://github.com/maybeizen/nubodb",
    category: "Backend",
    archived: true,
  },
  {
    name: "NetherCore",
    description: "Custom Discord bot for Nether Host with advanced features.",
    technologies: ["TypeScript", "Node.js", "Discord.js", "MongoDB"],
    githubLink: "https://github.com/NetherHost/nethercore",
    category: "Backend",
    archived: true,
  },
  {
    name: "PteroLink",
    description:
      "npm package to communicate with the Pterodactyl API. Currently on hold but planning to resume development.",
    technologies: ["TypeScript", "Node.js", "REST API"],
    githubLink: "https://github.com/maybeizen/pterolink",
    category: "Backend",
    archived: true,
  },
];

export const orvexProjects: Project[] = [
  {
    name: "Orvex Monitor",
    description:
      "A modern uptime monitoring SaaS platform built with SvelteKit, featuring real-time status tracking, incident management, and comprehensive monitoring capabilities for your services.",
    technologies: ["SvelteKit", "TypeScript", "GoLang", "PostgreSQL"],
    category: "Backend",
    archived: false,
    githubLink: "https://github.com/maybeizen/orvex-monitor",
  },
  {
    name: "Fluxo",
    description:
      "An open-source and completely free billing panel designed specifically for hosting providers, built with Next.js. Streamline invoicing, client management, and service provisioning.",
    technologies: ["Next.js", "TypeScript"],
    category: "Backend",
    archived: false,
    githubLink: "https://github.com/maybeizen/fluxo",
  },
];
