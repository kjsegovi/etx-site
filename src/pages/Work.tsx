import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, SpaceBackdrop } from "../components/PageHero";
import { Card } from "../components/ui/Card";
import { GoldBar } from "../components/ui/GoldBar";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import {
  creatorTools,
  workShowcase,
  type CreatorTool,
} from "../data/creatorTools";
import { projects } from "../data/projects";

function CreatorToolCard({ tool }: { tool: CreatorTool }) {
  const content = (
    <Card interactive className="flex h-full flex-col p-6">
      <h3 className="text-xl text-star transition-colors group-hover:text-ember-500 group-focus-visible:text-ember-500">
        {tool.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
        {tool.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-ember-500">
        Explore {tool.name}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none"
        >
          →
        </span>
      </span>
    </Card>
  );

  if (tool.external) {
    return (
      <a
        href={tool.destination}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {content}
        <span className="sr-only"> opens in a new tab</span>
      </a>
    );
  }

  return (
    <Link to={tool.destination} className="group block h-full">
      {content}
    </Link>
  );
}

export function Work() {
  const [tourState, setTourState] = useState<"idle" | "loading" | "loaded">(
    "idle",
  );
  const tourRegionRef = useRef<HTMLDivElement>(null);
  const isTourRequested = tourState !== "idle";

  useEffect(() => {
    if (isTourRequested) {
      tourRegionRef.current?.focus();
    }
  }, [isTourRequested]);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Learning experiences we've designed"
        intro="From NASA-funded platforms and full college courseware to immersive virtual field trips, every project starts with people and ends with evidence. Here's a look at what we've built across subjects, audiences, and technologies."
        spaceVariant="constellation-clusters"
      />

      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <Reveal preset="slide">
            <span className="etx-eyebrow">Tour It showcase</span>
            <h2 className="mt-4 text-3xl text-star sm:text-4xl">
              {workShowcase.title}
            </h2>
            <GoldBar className="mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-mist">
              {workShowcase.description}
            </p>
            <div className="mt-8">
              <a
                href={workShowcase.fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="etx-text-link group"
              >
                Open the tour in a new tab
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none"
                >
                  →
                </span>
              </a>
            </div>
            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {tourState === "loading"
                ? "Grand Canyon Caverns virtual field trip is loading."
                : tourState === "loaded"
                  ? "Grand Canyon Caverns virtual field trip is ready."
                  : ""}
            </p>
          </Reveal>

          <Reveal preset="scale" delay={0.1}>
            {isTourRequested ? (
              <div
                ref={tourRegionRef}
                tabIndex={-1}
                role="region"
                aria-label={workShowcase.iframeTitle}
                aria-busy={tourState === "loading" ? true : undefined}
                className="aspect-video overflow-hidden rounded-md border-2 border-aqua-500/70 bg-star shadow-lg"
              >
                <iframe
                  src={workShowcase.embedUrl}
                  title={workShowcase.iframeTitle}
                  loading="lazy"
                  allow="fullscreen; accelerometer; gyroscope"
                  allowFullScreen
                  onLoad={() => setTourState("loaded")}
                  className="h-full w-full border-0"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setTourState("loading")}
                aria-label="Load the Grand Canyon Caverns tour in this page"
                className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border-2 border-aqua-500/60 bg-star p-3 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500 hover:shadow-[0_18px_50px_rgba(25,25,25,0.24),0_0_32px_rgba(255,198,39,0.18)] focus-visible:-translate-y-1 focus-visible:border-aqua-500 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <span
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <SpaceBackdrop variant="home" />
                </span>
                <span className="relative z-10 max-w-lg">
                  <span className="font-display text-[0.6875rem] font-bold uppercase leading-tight tracking-wider text-aqua-500 sm:text-sm">
                    Interactive Tour It preview
                  </span>
                  <span className="mt-2 block font-display text-lg font-bold leading-snug text-white sm:mt-4 sm:text-3xl sm:leading-tight">
                    Load the Grand Canyon Caverns tour
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-white/80 sm:mt-4 sm:text-base sm:leading-relaxed">
                    Select anywhere in this preview to open the tour here.
                  </span>
                </span>
              </button>
            )}
          </Reveal>
        </div>
      </Section>

      <Section className="bg-space">
        <Reveal preset="slide" className="max-w-2xl">
          <span className="etx-eyebrow">Creator tools</span>
          <h2 className="mt-4 text-3xl text-star sm:text-4xl">
            Build learning experiences of your own
          </h2>
          <GoldBar className="mt-6" />
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Choose a tool that matches the experience you want to create.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {creatorTools.map((tool, index) => (
            <Reveal
              key={tool.name}
              as="li"
              preset="stagger"
              delay={index * 0.08}
              className="h-full"
            >
              <CreatorToolCard tool={tool} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <Reveal preset="slide" className="max-w-2xl">
          <span className="etx-eyebrow">Project library</span>
          <h2 className="mt-4 text-3xl text-star sm:text-4xl">
            Explore all projects
          </h2>
          <GoldBar className="mt-6" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              preset="stagger"
              delay={Math.min(index * 0.08, 0.32)}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
