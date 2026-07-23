import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

const accentBar: Record<Project["accent"], string> = {
  ember: "bg-ember-500",
  aqua: "bg-aqua-500",
  iris: "bg-ember-400",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardAccent = project.cardAccent ?? project.accent;

  return (
    <Link
      to={`/work/${project.slug}`}
      className="etx-interactive-surface group flex h-full flex-col overflow-hidden rounded-md border border-nebula-2 bg-white shadow-sm"
    >
      <span
        className={`h-1.5 w-full origin-left transition-transform duration-300 group-hover:scale-x-[1.03] group-focus-visible:scale-x-[1.03] motion-reduce:transform-none ${accentBar[cardAccent]}`}
        aria-hidden="true"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-xs font-bold uppercase tracking-wider text-ember-500">
            {project.category}
          </span>
          <span className="text-xs text-mist-2">{project.subject}</span>
        </div>
        <h3 className="etx-interactive-title font-display text-xl font-bold text-star">
          {project.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-mist">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-nebula-2 bg-space px-2.5 py-1 text-xs text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ember-500">
          View case study
          <span
            aria-hidden
            className="etx-interactive-arrow"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
