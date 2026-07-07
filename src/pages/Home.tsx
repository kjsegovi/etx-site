import { Button } from "../components/ui/Button";
import { Section, SectionHeader } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import {
  brand,
  services,
  values,
  stats,
  partners,
  accentClasses,
} from "../data/content";
import { featuredProjects } from "../data/projects";

export function Home() {
  const [clauseOne, clauseTwo, clauseThree] = brand.tagline.split(". ");
  const [missionLead, missionEmphasis] = brand.missionShort.split(". ");

  return (
    <main>
      {/* 1) HERO — ASU maroon band */}
      <section className="etx-maroon-band" aria-labelledby="hero-heading">
        <div className="etx-container py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <span className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
                  Learning-experience design studio
                </span>
                <h1
                  id="hero-heading"
                  className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                >
                  {clauseOne}.{" "}
                  <span className="text-aqua-500">{clauseTwo}.</span>{" "}
                  {clauseThree}
                </h1>
                <span
                  className="mt-6 block h-1.5 w-14 rounded bg-aqua-500"
                  aria-hidden="true"
                />
              </Reveal>

              <Reveal delay={0.1} className="mt-6 max-w-2xl">
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  {brand.positioning}
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-4">
                <Button to="/contact" variant="gold" size="lg">
                  Start a project
                </Button>
                <Button
                  to="/work"
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white no-underline hover:bg-white hover:text-ember-500"
                >
                  See our work
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/20 bg-white/20">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 bg-ember-500 p-5"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-bold text-aqua-500 sm:text-4xl">
                      {stat.value}
                    </dd>
                    <p className="text-sm leading-snug text-white/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2) MISSION MOMENT */}
      <Section className="bg-void">
        <Reveal className="max-w-4xl">
          <span className="etx-eyebrow">Why we exist</span>
          <p className="mt-5 font-display text-3xl font-bold leading-tight text-star sm:text-4xl lg:text-5xl">
            {missionLead}. {missionEmphasis}
          </p>
          <span className="etx-goldbar mt-6" aria-hidden="true" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
            {brand.mission}
          </p>
        </Reveal>
      </Section>

      {/* 3) SERVICES SNAPSHOT */}
      <Section className="bg-space">
        <SectionHeader
          eyebrow="What we do"
          title="Every layer of the learning experience"
          intro="From a single lesson to a full platform, we bring learning science, storytelling, technology, and design together in one studio."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const accent = accentClasses[service.accent];
            return (
              <Reveal key={service.title} as="article" delay={i * 0.08}>
                <Card interactive className="h-full">
                  <h3 className="font-display text-xl font-bold text-star">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {service.blurb}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-mist"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${accent.dot}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Button to="/services" variant="secondary">
            Explore our services
          </Button>
        </Reveal>
      </Section>

      {/* 4) FEATURED WORK */}
      <Section className="bg-void">
        <SectionHeader
          eyebrow="Selected work"
          title="Learning experiences we've designed"
          intro="A look at the platforms, courseware, and immersive experiences we've built with partners across education."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal
              key={project.slug}
              as="article"
              delay={i * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Button to="/work" variant="secondary">
            See all work
          </Button>
        </Reveal>
      </Section>

      {/* 5) VALUES TEASER */}
      <Section className="bg-space">
        <SectionHeader
          eyebrow="How we think"
          title="The beliefs behind every project"
          intro="A shared set of principles keeps our work human, curious, and grounded in evidence."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.slice(0, 3).map((value, i) => (
            <Reveal key={value.title} as="article" delay={i * 0.08}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold text-star">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {value.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Button to="/approach" variant="secondary">
            Our approach
          </Button>
        </Reveal>
      </Section>

      {/* 6) PARTNERS */}
      <Section className="bg-void">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <p className="etx-eyebrow text-mist-2">Trusted by</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {partners.map((partner, i) => (
              <li
                key={partner.name}
                className="flex items-center gap-x-6 font-display text-base font-bold text-star sm:text-lg"
              >
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-4 w-px bg-nebula-2"
                  />
                )}
                {partner.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </main>
  );
}
