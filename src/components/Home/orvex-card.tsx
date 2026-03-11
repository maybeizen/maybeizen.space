import { Project } from "../../data/projects";

interface OrvexCardProps {
  projects: Project[];
}

const ACCENT = {
  NuboDB: {
    border: "border-l-blue-400 hover:border-l-blue-400",
    text: "text-blue-400",
  },
  Fluxo: {
    border: "border-l-[#ffd952] hover:border-l-[#ffd952]",
    text: "text-[#ffd952]",
  },
} as const;

const OrvexCard = ({ projects }: OrvexCardProps) => {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Orvex</h3>
          <p className="mt-0.5 text-sm text-neutral-400">
            Projects under the Orvex brand
          </p>
        </div>
        <a
          href="https://orvex.cc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-blue-400"
        >
          orvex.cc
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const accent = ACCENT[project.name as keyof typeof ACCENT];
          if (!accent) return null;

          const links = [
            ...(project.liveLink
              ? [{ url: project.liveLink, label: "Visit" }]
              : []),
            ...(project.githubLink
              ? [{ url: project.githubLink, label: "GitHub" }]
              : []),
          ];

          return (
            <div
              key={project.name}
              className={`group rounded-xl border border-neutral-800 bg-neutral-900/80 p-5 transition-all hover:border-neutral-700 ${accent.border} border-l-4`}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h4 className={`font-semibold ${accent.text}`}>
                  {project.name}
                </h4>
                {project.archived && project.name !== "NuboDB" && (
                  <span className="shrink-0 rounded px-2 py-0.5 text-[10px] font-medium text-neutral-500">
                    Archived
                  </span>
                )}
              </div>

              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
                    >
                      {link.label === "GitHub" && (
                        <i className="fa-brands fa-github"></i>
                      )}
                      {link.label}
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-60"></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrvexCard;
