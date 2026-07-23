import { Button } from "../components/ui/Button";
import { PageHero } from "../components/PageHero";

export function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="We couldn't find that page."
      intro="The link you followed doesn't lead anywhere we can find. Let's get you back on track."
      spaceVariant="lost-signal"
    >
      <div className="flex flex-wrap items-center gap-4">
        <Button to="/" size="lg">
          Back home
        </Button>
        <Button
          to="/work"
          variant="ghost"
          size="lg"
          className="border-2 border-white text-white no-underline hover:bg-white hover:text-ember-500"
        >
          See our work
        </Button>
      </div>
    </PageHero>
  );
}
