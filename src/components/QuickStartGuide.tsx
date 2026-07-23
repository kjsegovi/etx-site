import {
  PageHero,
  type PageHeroSpaceVariant,
} from "./PageHero";
import { Button } from "./ui/Button";
import { GoldBar } from "./ui/GoldBar";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeader } from "./ui/Section";
import type { QuickStartStep, QuickStartTopic } from "../data/quickStart";

interface GuideLink {
  label: string;
  href: string;
  emphasis?: "primary" | "secondary";
}

interface QuickStartGuideProps {
  title: string;
  intro: string;
  primaryLink: GuideLink;
  secondaryLink: GuideLink;
  steps: QuickStartStep[];
  firstMileTitle: string;
  firstMileIntro: string;
  topics: QuickStartTopic[];
  deeperIntro: string;
  resourceHeading: string;
  resourceDescription: string;
  resourceLinks: GuideLink[];
  spaceVariant: PageHeroSpaceVariant;
}

export function QuickStartGuide({
  title,
  intro,
  primaryLink,
  secondaryLink,
  steps,
  firstMileTitle,
  firstMileIntro,
  topics,
  deeperIntro,
  resourceHeading,
  resourceDescription,
  resourceLinks,
  spaceVariant,
}: QuickStartGuideProps) {
  return (
    <>
      <PageHero
        eyebrow="Quick start"
        title={title}
        intro={intro}
        spaceVariant={spaceVariant}
      >
        <div className="flex flex-wrap gap-4">
          <Button href={primaryLink.href} variant="gold" size="lg">
            {primaryLink.label}
          </Button>
          <Button
            href={secondaryLink.href}
            variant="ghost"
            size="lg"
            className="border-2 border-white text-white no-underline hover:bg-white hover:text-ember-500"
          >
            {secondaryLink.label}
          </Button>
        </div>
      </PageHero>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="First mile"
          title={firstMileTitle}
          intro={firstMileIntro}
        />

        <ol className="mt-14 flex flex-col gap-10">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              preset="stagger"
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
          title="What the full guide covers next"
          intro={deeperIntro}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <Reveal
              key={topic.title}
              delay={Math.min(index * 0.06, 0.3)}
              preset="stagger"
              className="rounded-md border border-nebula-2 bg-white p-6"
            >
              <GoldBar className="mb-4" />
              <h3 className="text-lg text-star">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{topic.blurb}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} preset="scale" className="mt-12">
          <div className="flex flex-col items-start gap-5 rounded-md border border-nebula-2 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl text-star">{resourceHeading}</h3>
              <p className="mt-2 text-base leading-relaxed text-mist">
                {resourceDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {resourceLinks.map((link) => (
                <Button
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  variant={link.emphasis ?? "secondary"}
                  size="lg"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
