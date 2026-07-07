import { PageHero } from "../components/PageHero";
import { Section, SectionHeader } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { brand, services, themVsUs, accentClasses } from "../data/content";

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One studio, every layer of the learning experience"
        intro={brand.positioning}
      />

      <Section className="bg-white">
        <Reveal className="max-w-3xl">
          <p className="text-2xl font-bold leading-snug text-star sm:text-3xl">
            {brand.missionShort}
          </p>
          <span className="etx-goldbar mt-6" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Most partners hand you a slice — a video here, a slide deck there. We
            design across the whole stack: the knowledge, the story, the
            technology, and the evidence that it works. Here's how we can help.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-space">
        <SectionHeader
          eyebrow="What we do"
          title="Four practices, one integrated studio"
        />

        <div className="mt-12 flex flex-col gap-6">
          {services.map((service, index) => {
            const accent = accentClasses[service.accent];
            const reversed = index % 2 === 1;
            return (
              <Reveal key={service.title} delay={Math.min(index * 0.08, 0.32)}>
                <Card className={`border-l-4 ${accent.border} md:p-8`}>
                  <div
                    className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-12 ${
                      reversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2">
                      <span className={`etx-eyebrow ${accent.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-2xl text-star sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-mist">
                        {service.blurb}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-4 md:w-1/2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`}
                          />
                          <span className="text-base leading-relaxed text-mist">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Why ETX"
          title="A different kind of learning partner"
          intro="The market is crowded with vendors. Here's how the way we work sets a higher bar."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-md border border-nebula-2 bg-white shadow-sm">
            <div className="grid grid-cols-1 border-b border-nebula-2 sm:grid-cols-2">
              <div className="px-6 py-4">
                <span className="etx-eyebrow text-mist-2">The usual</span>
              </div>
              <div className="border-t border-nebula-2 px-6 py-4 sm:border-l sm:border-t-0">
                <span className="etx-eyebrow">The ETX way</span>
              </div>
            </div>

            {themVsUs.map((row) => (
              <div
                key={row.us}
                className="grid grid-cols-1 border-b border-nebula-2 last:border-b-0 sm:grid-cols-2"
              >
                <div className="flex items-start gap-3 px-6 py-5">
                  <span aria-hidden className="mt-0.5 shrink-0 text-mist-2">
                    ✕
                  </span>
                  <span className="text-mist-2">{row.them}</span>
                </div>
                <div className="flex items-start gap-3 border-t border-nebula-2 px-6 py-5 sm:border-l sm:border-t-0">
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 font-display font-bold text-ember-500"
                  >
                    ✓
                  </span>
                  <span className="font-bold text-star">{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="etx-maroon-band">
        <Reveal className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">
            Have an idea worth learning from?
          </h2>
          <span className="etx-goldbar" aria-hidden="true" />
          <p className="max-w-xl text-lg leading-relaxed text-white/90">
            Tell us what you're trying to teach and who you're trying to reach.
            We'll help you design an experience around it.
          </p>
          <Button to="/contact" variant="gold" size="lg">
            Start a project
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
