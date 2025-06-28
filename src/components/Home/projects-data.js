export const mainProjects = [
  {
    name: "Solar Nodes",
    description:
      "Budget-friendly EU Minecraft hosting, starting at $0.70/GB/month.",
    technologies: ["Laravel", "Docker", "Pterodactyl", "MySQL"],
    liveLink: "https://solarnodes.net",
    category: "Backend",
    archived: false,
    details:
      "Solar Nodes provides affordable Minecraft server hosting in the EU with highly competitive pricing, powered by Ryzen 9 3900X. The platform uses Laravel for backend operations, Docker containerization, and Pterodactyl panel for server management. Features include automated billing, server provisioning, and real-time monitoring.",
    imageUrl: "/images/code/solarnodes.png",
  },
  {
    name: "PteroLink",
    description:
      "npm package to communicate with the Pterodactyl API. Currently on hold but planning to resume development.",
    technologies: ["TypeScript", "Node.js", "REST API"],
    githubLink: "https://github.com/maybeizen/pterolink",
    category: "Backend",
    archived: true,
    details:
      "PteroLink is an npm package that provides a clean, typed interface to interact with the Pterodactyl game server panel API. I designed it with type safety in mind, using TypeScript to ensure all API calls and responses are properly typed. The package includes comprehensive error handling, connection management, and supports all Pterodactyl API endpoints.",
    imageUrl: "/images/code/pterolink.png",
  },
  {
    name: "NetherCore",
    description: "Custom Discord bot for Nether Host with advanced features.",
    technologies: ["TypeScript", "Node.js", "Discord.js", "MongoDB"],
    githubLink: "#",
    category: "Backend",
    archived: false,
    details:
      "A specialized Discord bot built for Nether Host's community server. The bot handles support ticket management, server status monitoring, and community engagement features. Built with Discord.js, TypeScript, and CommandKit. It includes a custom plugin system for extending functionality, automated moderation, and integration with hosting panel APIs.",
    imageUrl: "/images/code/nethercore.png",
  },
  {
    name: "PasteIt.lol",
    description:
      "A fast, minimalist pastebin alternative. Just paste your text, pick a language, and share the link. No accounts. No clutter.",
    technologies: ["Laravel", "React.js", "Inertia", "Tailwind CSS"],
    githubLink: "https://github.com/maybeizen/pasteit",
    category: "Frontend",
    archived: true,
    details:
      "I built PasteIt as a solution to the clutter found in most pastebin services. It uses Laravel as the backend with React and Inertia for a seamless SPA experience. Features include syntax highlighting for 10+ languages, configurable expiration, and unique URL generation. This project represents my transition period from frontend to backend focus.",
    imageUrl: "/images/code/pasteit.png",
  },
  {
    name: "membercat.com",
    description: "Site for Membercat Studios, built with Laravel and React.",
    technologies: ["Laravel", "React.js", "Inertia.js"],
    githubLink: "https://github.com/Membercat-Studios/membercat.com",
    category: "Frontend",
    archived: true,
    details:
      "A professional website for Membercat Studios, featuring our portfolio, products, and team information. The site uses Laravel for backend operations with React components for the frontend. Key features include a custom CMS for content management, responsive design, and SEO optimization. This was one of my last frontend-focused projects.",
    imageUrl: "/images/code/membercat.png",
  },
  {
    name: "Voxyn Labs",
    description: "Landing page and info site for Voxyn Labs.",
    technologies: ["Svelte", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/VoxynLabs/voxynlabs.github.io",
    category: "Frontend",
    archived: false,
    details:
      "This was my first project using Svelte, which I chose for its lightweight footprint and excellent animation capabilities. The site features custom hovers and animations, interactive product showcases, and responsive design. I implemented a dark/light mode toggle and optimized the site for performance. This project helped me understand the limitations of frontend-only development.",
    imageUrl: "/images/code/voxyn.png",
  },
];

export const secondaryProjects = [
  {
    name: "Performium",
    description:
      "Performance-oriented Minecraft modpack with over 100k downloads.",
    technologies: ["Java", "Fabric", "Gradle"],
    modrinthLink: "https://modrinth.com/modpack/performium-was-taken",
    category: "Backend",
    archived: false,
    details:
      "A carefully curated Minecraft modpack focused on optimizing game performance while preserving vanilla gameplay. I selected and configured over 40 mods to work harmoniously, performed extensive testing for compatibility, and created documentation for users. The pack has over 100,000 downloads on Modrinth and includes custom performance optimizations.",
    imageUrl: "/images/code/performium.png",
  },
  {
    name: "Portfolio",
    description: "This very portfolio site, built with React and Tailwind.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/maybeizen/maybeizen.space",
    category: "Frontend",
    archived: false,
    details:
      "My personal portfolio showcasing my journey as a developer and the projects I've worked on. I built it using React with Tailwind for styling and Framer Motion for animations. The site features a responsive design, interactive UI elements, and optimized performance with Vite. This represents my final frontend-focused project before transitioning to backend development.",
    imageUrl: "/images/code/portfolio.png",
  },
];
