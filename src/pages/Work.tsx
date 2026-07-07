import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Learning experiences we've designed"
        intro="From NASA-funded platforms and full college courseware to immersive virtual field trips, every project starts with people and ends with evidence. Here's a look at what we've built across subjects, audiences, and technologies."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
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
