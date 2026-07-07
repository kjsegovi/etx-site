import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-space">
      <Reveal className="etx-container flex flex-col items-center gap-6 py-24 text-center">
        <span className="font-display text-8xl font-bold text-ember-500 sm:text-9xl">
          404
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-star">
          We couldn't find that page.
        </h1>
        <span className="etx-goldbar" aria-hidden="true" />
        <p className="max-w-md text-lg leading-relaxed text-mist">
          The link you followed doesn't lead anywhere we can find. Let's get you
          back on track.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" size="lg">
            Back home
          </Button>
          <Button to="/work" variant="secondary" size="lg">
            See our work
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
