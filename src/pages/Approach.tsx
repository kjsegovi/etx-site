import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Section, SectionHeader } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { GoldBar } from "../components/ui/GoldBar";
import {
  brand,
  values,
  processSteps,
  stats,
  partners,
  accentClasses,
} from "../data/content";
import { evidenceProjects } from "../data/projects";

export function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title={brand.missionShort}
        intro={brand.mission}
        spaceVariant="exploration-trajectories"
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="What we value"
          title="The principles behind every project"
          intro="These aren't posters on a wall. They're the decisions we make when the work gets hard."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              preset="stagger"
              delay={Math.min(index * 0.06, 0.3)}
              className="h-full"
            >
              <Card className="h-full overflow-hidden">
                <GoldBar className="mb-5" />
                <div className="flex flex-col gap-3">
                  <span
                    className="font-display text-3xl font-bold text-ember-500"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl text-star">{value.title}</h3>
                  <p className="text-base leading-relaxed text-mist">
                    {value.body}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-space">
        <SectionHeader
          eyebrow="How we work"
          title="A process built to learn as it goes"
          intro="Four movements, one loop. We stay close to you and to your learners from the first conversation to what comes after launch."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              preset="stagger"
              delay={Math.min(index * 0.1, 0.3)}
              className="h-full"
            >
              <div className="relative flex h-full flex-col border-t-2 border-nebula-2 pt-6">
                <span
                  className="absolute -top-[2px] left-0 h-[2px] w-12 bg-aqua-500"
                  aria-hidden="true"
                />
                <span
                  className="font-display text-4xl font-bold text-ember-500 sm:text-5xl"
                  aria-hidden
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl text-star sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-mist">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Track record"
          title="Grounded in real work, real evidence"
        />

        <Reveal preset="scale" delay={0.1} className="mt-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-nebula-2 bg-nebula-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-white p-6 sm:p-8"
              >
                <span className="font-display text-4xl font-bold text-ember-500 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm leading-snug text-mist">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <p className="etx-eyebrow text-mist-2">Trusted by</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="font-display text-lg text-mist sm:text-xl"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-16 border-t border-nebula-2 pt-12">
          <SectionHeader
            eyebrow="Evidence Matters"
            title="Research on the products themselves"
            intro="We publish posters, papers, and efficacy findings with the work — not as a separate research brochure. Start with these case studies."
            className="max-w-3xl"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {evidenceProjects.map((project) => {
              const accent = accentClasses[project.accent];
              const count = project.research?.length ?? 0;
              return (
                <li key={project.slug}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group relative flex h-full flex-col border-t-2 border-nebula-2 pt-5"
                  >
                    <span
                      className={`absolute -top-[2px] left-0 h-[2px] w-12 ${accent.bg}`}
                      aria-hidden
                    />
                    <h3 className="text-lg text-star transition-colors group-hover:text-ember-500 group-focus-visible:text-ember-500">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {count} research {count === 1 ? "item" : "items"}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Section>

      <Section className="border-t border-nebula-2 bg-space">
        <Reveal preset="scale" className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-3xl text-star sm:text-4xl">
            Let's design something worth learning from.
          </h2>
          <GoldBar />
          <p className="max-w-xl text-lg leading-relaxed text-mist">
            Bring us your subject, your learners, and your ambitions. We'll bring
            the science, the story, and the craft.
          </p>
          <Button to="/quick-start" size="lg">
            Quick start
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
