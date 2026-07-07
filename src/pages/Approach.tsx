import { PageHero } from "../components/PageHero";
import { Section, SectionHeader } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  brand,
  values,
  processSteps,
  stats,
  partners,
} from "../data/content";

export function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title={brand.missionShort}
        intro={brand.mission}
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
              delay={Math.min(index * 0.06, 0.3)}
              className="h-full"
            >
              <Card interactive className="h-full overflow-hidden">
                <span
                  className="etx-goldbar mb-5"
                  aria-hidden="true"
                />
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
            <Reveal key={step.number} delay={Math.min(index * 0.1, 0.3)} className="h-full">
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

        <Reveal delay={0.1} className="mt-12">
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
                className="font-display text-lg text-mist transition-colors hover:text-star sm:text-xl"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="etx-maroon-band">
        <Reveal className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">
            Let's design something worth learning from.
          </h2>
          <span className="etx-goldbar" aria-hidden="true" />
          <p className="max-w-xl text-lg leading-relaxed text-white/90">
            Bring us your subject, your learners, and your ambitions. We'll bring
            the science, the story, and the craft.
          </p>
          <Button to="/contact" variant="gold" size="lg">
            Start a project
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
