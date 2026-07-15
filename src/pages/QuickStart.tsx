import { PageHero } from "../components/PageHero";
import { Section, SectionHeader } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import {
  advancedAuthorWikiUrl,
  quickStartSteps,
  quickStartTopics,
  torusAuthorLoginUrl,
} from "../data/quickStart";

export function QuickStart() {
  return (
    <>
      <PageHero
        eyebrow="Quick start"
        title="Build your first adaptive page in Torus"
        intro="A short first-mile guide for Advanced Author — then jump into the full wiki when you’re ready for deeper topics."
      >
        <div className="flex flex-wrap gap-4">
          <Button href={torusAuthorLoginUrl} variant="gold" size="lg">
            Open Torus author login
          </Button>
          <Button
            href={advancedAuthorWikiUrl}
            variant="ghost"
            size="lg"
            className="border-2 border-white text-white no-underline hover:bg-white hover:text-ember-500"
          >
            Full Advanced Author Wiki
          </Button>
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="First mile"
          title="Four steps to get editing"
          intro="Distilled from the Advanced Author Wiki’s “Getting into Torus and Starting a Project” walkthrough. Details and screenshots live in the full wiki."
        />

        <ol className="mt-14 flex flex-col gap-10">
          {quickStartSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={Math.min(index * 0.06, 0.3)}
              as="li"
              className="grid gap-6 border-t border-nebula-2 pt-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] lg:gap-12"
            >
              <div>
                <span
                  className="font-display text-4xl font-bold text-ember-500"
                  aria-hidden
                >
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl text-star sm:text-2xl">{step.title}</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-mist">{step.body}</p>
                {step.tips && step.tips.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {step.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-3 text-sm leading-relaxed text-mist-2"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="bg-space">
        <SectionHeader
          eyebrow="Go deeper"
          title="What the full wiki covers next"
          intro="If you want to dive deeper into creating lessons, follow the wiki. You’ll be able to create adaptive rules, responsive layouts, and scored lessons."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {quickStartTopics.map((topic, index) => (
            <Reveal
              key={topic.title}
              delay={Math.min(index * 0.06, 0.3)}
              className="rounded-md border border-nebula-2 bg-white p-6"
            >
              <span className="etx-goldbar mb-4" aria-hidden="true" />
              <h3 className="text-lg text-star">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{topic.blurb}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-col items-start gap-5 rounded-md border border-nebula-2 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl text-star">
                Continue in the Advanced Author Wiki
              </h3>
              <p className="mt-2 text-base leading-relaxed text-mist">
                Step-by-step Scribe guides, interface notes, components, variables,
                troubleshooting, and publishing.
              </p>
            </div>
            <Button href={advancedAuthorWikiUrl} variant="primary" size="lg">
              Open the wiki
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
