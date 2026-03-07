import { ArrowUpRight, FolderGit2, Github } from "lucide-react";
import type { ResumeProject } from "../../types/resume";
import { Section } from "../ui/Section";

interface ProjectsSectionProps {
  projects: ResumeProject[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few builds I am proud of."
      icon={FolderGit2}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="h-full rounded-2xl border border-light/10 bg-light/5 p-6 hover:border-rust/40 transition-all"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-light">{project.title}</h3>
              {project.status && (
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border font-semibold shrink-0 ${
                    project.status === "in-progress"
                      ? "text-gold border-gold/40 bg-gold/10"
                      : "text-light/80 border-light/20 bg-light/10"
                  }`}
                >
                  {project.status === "in-progress"
                    ? "In Progress"
                    : "Completed"}
                </span>
              )}
            </div>
            <p className="text-light/70 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-2 mb-5 text-light/70 text-sm">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-rust shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md border border-light/10 text-light/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-rust hover:text-light transition-colors text-sm font-semibold"
              >
                <Github size={16} />
                GitHub
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-rust hover:text-light transition-colors text-sm font-semibold"
                >
                  Live
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
