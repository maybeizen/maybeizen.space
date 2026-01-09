export interface Skill {
    name: string;
    icon: string;
    description: string;
    mastery: number;
}

export const skills: Skill[] = [
    {
        name: "GoLang",
        icon: "/images/code/golang.svg",
        description:
            "Statically typed, compiled language designed at Google for building scalable systems.",
        mastery: 65,
    },
    {
        name: "Rust",
        icon: "/images/code/rust.svg",
        description:
            "Systems programming language focused on safety, speed, and concurrency.",
        mastery: 10,
    },
    {
        name: "Node.js",
        icon: "/images/code/nodejs.svg",
        description:
            "JavaScript runtime for building fast, scalable server-side applications.",
        mastery: 90,
    },
    {
        name: "Python",
        icon: "/images/code/python.svg",
        description:
            "Powerful, readable language for everything from scripts to data processing.",
        mastery: 61,
    },
    {
        name: "Typescript",
        icon: "/images/code/typescript.svg",
        description:
            "Typed superset of Javascript for large-scale applications with better tooling.",
        mastery: 99,
    },
    {
        name: "Javascript",
        icon: "/images/code/javascript.svg",
        description:
            "High-level language for creating dynamic web content and applications.",
        mastery: 99,
    },
    {
        name: "React",
        icon: "/images/code/react.svg",
        description:
            "Library for building modern UIs with reusable components and hooks.",
        mastery: 87,
    },
    {
        name: "Next.js",
        icon: "/images/code/nextjs.svg",
        description:
            "React framework with SSR, static site generation, and optimized performance.",
        mastery: 70,
    },
    {
        name: "Svelte",
        icon: "/images/code/svelte.svg",
        description:
            "Modern frontend framework that compiles to efficient vanilla JavaScript.",
        mastery: 41,
    },
    {
        name: "Astro",
        icon: "/images/code/astro.svg",
        description:
            "Modern static site builder with component islands and optimal performance.",
        mastery: 38,
    },
    {
        name: "Tailwind CSS",
        icon: "/images/code/tailwindcss.svg",
        description:
            "Utility-first CSS framework for rapid UI development with custom design.",
        mastery: 99,
    },
    {
        name: "HTML",
        icon: "/images/code/html.svg",
        description:
            "Standard markup language for web page structure and semantics.",
        mastery: 99,
    },
    {
        name: "MySQL",
        icon: "/images/code/mysql.svg",
        description:
            "Open-source relational database management system for structured data.",
        mastery: 75,
    },
    {
        name: "PostgreSQL",
        icon: "/images/code/postgresql.svg",
        description:
            "Advanced open-source relational database with extensibility and standards compliance.",
        mastery: 30,
    },
];
