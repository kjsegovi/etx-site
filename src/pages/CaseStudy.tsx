import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Section, SectionHeader } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { accentClasses } from "../data/content";
import {
  getProject,
  projects,
  type ResearchItem,
  type ResearchKind,
} from "../data/projects";

const researchKindLabel: Record<ResearchKind, string> = {
  poster: "Poster",
  paper: "Paper",
  study: "Study",
  article: "Article",
};

function ResearchList({ items, accentDot }: { items: ResearchItem[]; accentDot: string }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((item) => (
        <li key={`${item.kind}-${item.title}`} className="flex gap-3">
          <span
            className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${accentDot}`}
            aria-hidden
          />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold text-star underline decoration-2 underline-offset-4 transition-colors hover:text-ember-500"
              >
                {item.title}
              </a>
              <span className="font-display text-xs font-bold uppercase tracking-wider text-mist-2">
                {researchKindLabel[item.kind]}
              </span>
            </div>
            {item.summary && (
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-mist">
                {item.summary}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const accent = accentClasses[project.accent];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · ${project.subject}`}
        title={project.name}
        intro={project.summary}
      >
        <p className="max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="gold" size="lg" href={project.url}>
            Visit {project.name}
          </Button>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-white underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
          >
            <span aria-hidden>←</span> All work
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-white/30 px-3 py-1 text-xs font-bold text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
          <SectionHeader eyebrow="The challenge" title="The challenge" />
          <Reveal className="max-w-2xl text-lg leading-relaxed text-mist">
            {project.challenge}
          </Reveal>
        </div>
      </Section>

      <Section className="bg-space">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
          <SectionHeader eyebrow="Our approach" title="What we designed" />
          <Reveal>
            <ol className="flex flex-col gap-6">
              {project.approach.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-display text-sm font-bold text-white ${accent.bg}`}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="text-lg leading-relaxed text-mist">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
          <SectionHeader eyebrow="The outcome" title="The outcome" />
          <div className="flex flex-col gap-8">
            <Reveal>
              <ul className="flex flex-col gap-4">
                {project.outcomes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${accent.dot}`}
                      aria-hidden
                    />
                    <p className="text-lg leading-relaxed text-mist">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.stat && (
              <Reveal className="rounded-md border border-nebula-2 bg-space p-8">
                <span className="etx-goldbar mb-4" aria-hidden="true" />
                <div
                  className={`font-display text-5xl font-bold sm:text-6xl ${accent.text}`}
                >
                  {project.stat.value}
                </div>
                <div className="mt-3 text-mist">{project.stat.label}</div>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      {project.research && project.research.length > 0 && (
        <Section className="bg-space">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
            <SectionHeader
              eyebrow="Research & evidence"
              title="What the evidence shows"
              intro="Selected posters, papers, and studies tied to this product."
            />
            <Reveal>
              <ResearchList items={project.research} accentDot={accent.dot} />
            </Reveal>
          </div>
        </Section>
      )}

      <Section className="bg-space border-t border-nebula-2">
        <Reveal>
          <Link
            to={`/work/${next.slug}`}
            className="group flex flex-col gap-3 rounded-md border border-nebula-2 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-ember-500/40 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="etx-eyebrow">Next project</span>
              <div className="mt-3 font-display text-2xl font-bold text-star transition-colors group-hover:text-ember-500 sm:text-3xl">
                {next.name}
              </div>
              <div className="mt-1 text-mist-2">{next.tagline}</div>
            </div>
            <span
              aria-hidden
              className="font-display text-3xl font-bold text-ember-500 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
