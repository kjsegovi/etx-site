import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { Section, SectionHeader } from "../components/ui/Section";
import { quickStartProducts } from "../data/quickStart";

export function QuickStartChooser() {
  return (
    <>
      <PageHero
        eyebrow="Quick start"
        title="What do you want to build?"
        intro="Choose an authoring tool for a focused first-mile guide. Each path gets you into the product, through a first build, and on to deeper documentation."
      />

      <Section>
        <SectionHeader
          eyebrow="Choose your path"
          title="Start with the right authoring workflow"
          intro="Build an adaptive learning page in Torus or create an immersive 360° field trip in Tour It."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quickStartProducts.map((product, index) => (
            <Reveal
              key={product.name}
              delay={Math.min(index * 0.08, 0.24)}
              className="h-full"
            >
              <Link
                to={product.to}
                className="group block h-full"
                aria-label={`${product.cta}: ${product.blurb}`}
              >
                <Card interactive className="flex h-full flex-col p-8 sm:p-10">
                  <span className="etx-eyebrow">{product.eyebrow}</span>
                  <span className="etx-goldbar mt-5" aria-hidden="true" />
                  <h2 className="mt-6 text-3xl text-star transition-colors group-hover:text-ember-500">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-lg font-bold leading-snug text-star">
                    {product.blurb}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-mist">
                    {product.detail}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-ember-500">
                    {product.cta}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
