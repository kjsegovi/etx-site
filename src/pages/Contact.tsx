import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { brand } from "../data/content";

interface FormState {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  "A course or lesson",
  "A platform or tool",
  "A research collaboration",
  "Something else",
];

const workWith = [
  "ASU academic units",
  "Educational entrepreneurs",
  "Mission-driven organizations",
  "Educators",
];

const emptyForm: FormState = {
  name: "",
  email: "",
  organization: "",
  projectType: projectTypes[0],
  message: "",
};

const inputClasses =
  "w-full rounded-md border border-nebula-2 bg-white px-4 py-3 text-star placeholder:text-mist-2 transition-colors focus:border-ember-500 focus:outline-none focus:ring-2 focus:ring-ember-500/30";
const labelClasses = "font-display text-sm font-bold text-star";

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setForm(emptyForm);
    setSubmitted(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Have an idea? Let's build it."
        intro="Whether you're a partner, organization, or ASU unit with something you want built, or an educator who wants to use or co-create ETX experiences — we'd love to hear where you're headed. Tell us what you're imagining and we'll help shape it into something people actually want to learn from."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <Reveal>
            {submitted ? (
              <Card className="flex flex-col gap-4 border-l-4 border-l-ember-500">
                <span className="etx-eyebrow">Message received</span>
                <span className="etx-goldbar" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl text-star">
                  Thanks, {form.name || "there"} — this is a concept form, but in
                  the real thing we'd reply from {brand.email}.
                </h2>
                <p className="text-mist leading-relaxed">
                  We appreciate you taking the time to share what you're building.
                  In a live version, a real person from the studio would follow up
                  to learn more and figure out how we can help.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ember-500 px-5 py-2.5 font-display text-sm font-bold text-ember-500 transition-colors hover:bg-ember-500 hover:text-white focus-visible:outline-none"
                  >
                    Send another
                  </button>
                </div>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <p className="text-sm text-mist-2">
                  This is a demo — a concept form with no backend. Nothing you enter
                  is sent or stored.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className={labelClasses}>
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="School, unit, company, or team"
                    autoComplete="organization"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className={labelClasses}>
                    What are you thinking about?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={labelClasses}>
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you imagining? Who's it for? What would success look like?"
                    rows={6}
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-ember-500 px-5 py-2.5 font-display font-bold text-white transition-colors hover:bg-ember-600 focus-visible:outline-none"
                  >
                    Send it over
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="etx-eyebrow">Reach us directly</span>
                <a
                  href={`mailto:${brand.email}`}
                  className="font-display text-xl font-bold text-ember-500 transition-colors hover:text-ember-600"
                >
                  {brand.email}
                </a>
                <p className="text-sm text-mist-2">Part of {brand.parent}</p>
              </div>

              <div className="border-t border-nebula-2 pt-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-mist">
                  Who we work with
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {workWith.map((item, index) => (
                    <li key={item} className="flex items-center gap-3 text-mist">
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 shrink-0 rounded-full ${
                          index % 2 === 0 ? "bg-ember-500" : "bg-aqua-500"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="border-t border-nebula-2 pt-6 text-lg leading-relaxed text-mist">
                {brand.tagline}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
