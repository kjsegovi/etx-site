import { Link } from "react-router-dom";
import { SpaceBackdrop } from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { Section, SectionHeader } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { GoldBar } from "../components/ui/GoldBar";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import { PartnerRow } from "../components/PartnerRow";
import {
  brand,
  creatorMessage,
  homepageVideo,
  services,
  values,
  stats,
  partners,
  accentClasses,
} from "../data/content";
import { creatorTools } from "../data/creatorTools";
import { featuredProjects } from "../data/projects";

export function Home() {
  return (
    <>
      {/* 1) HERO */}
      <section
        className="etx-space-hero relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <SpaceBackdrop variant="home" />
        <div className="etx-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal preset="slide">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
                  Learning experience design studio
                </span>
                <h1
                  id="hero-heading"
                  className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                >
                  {brand.heroHeadline.opening}{" "}
                  <span className="text-aqua-500">
                    {brand.heroHeadline.accent}
                  </span>{" "}
                  {brand.heroHeadline.closing}
                </h1>
                <span
                  className="etx-rule-reveal mt-6 block h-1.5 w-14 rounded bg-aqua-500"
                  aria-hidden="true"
                />
              </Reveal>

              <Reveal delay={0.1} className="mt-6 max-w-2xl">
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  {brand.heroBody}
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-4">
                <Button to="/quick-start" variant="gold" size="lg">
                  Create with our tools
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

            <Reveal delay={0.3} preset="scale">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 shadow-2xl shadow-black/30">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="etx-stat-tile relative flex flex-col gap-1 overflow-hidden bg-black/60 p-5 backdrop-blur-sm"
                  >
                    <dt className="etx-stat-label order-2 text-sm leading-snug text-white/80">
                      {stat.label}
                    </dt>
                    <dd className="etx-stat-value order-1 origin-left font-display text-3xl font-bold text-aqua-500 sm:text-4xl">
                      {stat.value}
                    </dd>
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
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-star sm:text-4xl lg:text-5xl">
            {brand.missionShort}
          </h2>
          <GoldBar className="mt-6" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
            {brand.mission}
          </p>
        </Reveal>

        <Reveal delay={0.1} preset="scale" className="mt-12">
          <div className="grid overflow-hidden rounded-md border border-nebula-2 bg-space shadow-sm lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="min-w-0 p-6 sm:p-8 lg:p-10">
              <span className="etx-eyebrow">{homepageVideo.eyebrow}</span>
              <h3 className="mt-3 text-3xl text-star sm:text-4xl">
                {homepageVideo.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-mist">
                {homepageVideo.summary}
              </p>
            </div>

            <div className="min-w-0 p-4 pt-0 sm:p-6 sm:pt-0 lg:p-8">
              <div className="aspect-video overflow-hidden rounded-md border-2 border-nebula-2 bg-star shadow-lg focus-within:border-aqua-600 focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-aqua-500">
                <iframe
                  src={homepageVideo.embedUrl}
                  title={homepageVideo.iframeTitle}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <Card className="border-l-4 border-l-aqua-500 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="max-w-3xl">
                <span className="etx-eyebrow">{creatorMessage.eyebrow}</span>
                <h3 className="mt-3 text-3xl text-star sm:text-4xl">
                  {creatorMessage.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-mist">
                  {creatorMessage.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                  {creatorTools.map((tool) =>
                    tool.external ? (
                      <a
                        key={tool.name}
                        href={tool.destination}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="etx-creator-link"
                      >
                        {tool.name}
                        <span className="sr-only"> opens in a new tab</span>
                      </a>
                    ) : (
                      <Link
                        key={tool.name}
                        to={tool.destination}
                        className="etx-creator-link"
                      >
                        {tool.name}
                      </Link>
                    ),
                  )}
                </div>
              </div>
              <Button
                to="/quick-start"
                size="lg"
                className="shrink-0 self-start md:self-auto"
              >
                Explore creator tools
              </Button>
            </div>
          </Card>
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
              <Reveal
                key={service.title}
                as="article"
                preset="stagger"
                delay={i * 0.08}
              >
                <Card className="h-full">
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
              preset="stagger"
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
            <Reveal
              key={value.title}
              as="article"
              preset="stagger"
              delay={i * 0.08}
            >
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
        <Reveal>
          <PartnerRow partners={partners} align="center" tone="strong" />
        </Reveal>
      </Section>
    </>
  );
}
