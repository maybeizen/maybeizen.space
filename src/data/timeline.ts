export interface TimelineEvent {
  year: string | null;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Late 2022",
    title: "First Steps into Programming",
    description:
      "Discovered web development through HTML and CSS. Built my first static websites and fell in love with code.",
    icon: "fa-solid fa-code",
    details:
      "My journey began when I decided to build a simple website for a friend. The process of turning design into code fascinated me. I spent nights learning HTML structure and CSS styling basics. After completing a few static sites, I knew this was just the beginning of a much deeper passion.",
  },
  {
    year: "Early 2023",
    title: "Unlocking JavaScript & React",
    description:
      "Learned JavaScript and dove into React. Built interactive UIs and grasped core frontend concepts.",
    icon: "fa-brands fa-js",
    details:
      "Once comfortable with HTML and CSS, I moved to JavaScript to add interactivity. Learning concepts like the DOM, events, and asynchronous programming was challenging but rewarding. When I discovered React and the component model, everything clicked. I built small apps and started thinking in terms of reusable UI pieces.",
  },
  {
    year: "Mid 2023",
    title: "Backend Awakening",
    description:
      "Explored Node.js and MongoDB. Built Discord bots and backend APIs, learning how servers work.",
    icon: "fa-solid fa-server",
    details:
      "Realizing I needed more than just frontend skills, I jumped into Node.js and Express. Creating RESTful APIs and working with databases like MongoDB opened a whole new world. My first significant project was a Discord bot that served a community of over 500 users. This taught me about handling real-time data and maintaining services users depend on.",
  },
  {
    year: "Late 2023",
    title: "Full-Stack Realization",
    description:
      "Started integrating frontend and backend skills. Built full-stack apps and grew confident as a developer.",
    icon: "fa-solid fa-layer-group",
    details:
      "With both frontend and backend skills, I began creating complete applications. I focused on learning authentication, data validation, and deployment practices. I launched my first production web application—a custom tool for a small business—and handled the entire development lifecycle independently.",
  },
  {
    year: "2024",
    title: "Type Safety & New Languages",
    description:
      "Learned TypeScript, Python, and Lua. Embraced typed patterns and started thinking like a systems architect.",
    icon: "fa-solid fa-shield-halved",
    details:
      "As my projects grew in complexity, I needed more structure. TypeScript became essential for maintaining code quality and catching errors early. I also expanded my toolkit with Python for data processing and Lua for game development experiments. This diversity helped me understand different programming paradigms and how to choose the right tool for each job.",
  },
  {
    year: "Early 2025",
    title: "Personal Brand & Portfolio",
    description:
      "Launched my developer portfolio to showcase projects, write dev blogs, and define my online presence.",
    icon: "fa-solid fa-briefcase",
    details:
      "After building many projects, I needed a central place to showcase my work. Creating this portfolio site gave me a platform to share my journey and connect with other developers. I started writing technical blogs to document what I've learned and contribute to the developer community.",
  },
  {
    year: "2025",
    title: "Systems Programming & Beyond",
    description:
      "Diving into Go, Rust, and C. Exploring low-level systems, performance, and memory management.",
    icon: "fa-solid fa-microchip",
    details:
      "My current focus is on lower-level programming to better understand what happens beneath the abstractions. Learning Rust has been particularly eye-opening for concepts like ownership and memory safety without garbage collection. I'm also exploring OS development concepts and working on small systems programming projects to push my boundaries.",
  },
  {
    year: null,
    title: "...and I'm not even 16 years old...",
    description:
      "I'm not even 16 years old and I've gotten myself this far. I'm completely self-taught.",
    icon: "fa-solid fa-fire",
    details:
      "No bootcamps. No degree. Just pure passion, countless hours of practice, and the refusal to quit when things get tough. Every line of code, every project, every breakthrough—all learned through trial, error, and sheer determination. At 16, I've built production apps, worked with real clients, and continue to push my boundaries every single day.",
  },
];
