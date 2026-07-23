import { QuickStartGuide } from "../components/QuickStartGuide";
import {
  quickStartSupportCallout,
  tourItModulesUrl,
  tourItProductUrl,
  tourItQuickStartSteps,
  tourItQuickStartTopics,
} from "../data/quickStart";

export function TourItQuickStart() {
  return (
    <QuickStartGuide
      title="Build your first virtual field trip in Tour It"
      intro="A short first-mile guide to turning 360° panoramas and interactive media into an immersive journey learners can explore in their browser."
      primaryLink={{ label: "Tour It overview and access", href: tourItProductUrl }}
      steps={tourItQuickStartSteps}
      firstMileTitle="Four steps to your first tour"
      firstMileIntro="Start with the core workflow for planning a tour, adding scenes and hotspots, connecting the journey, and testing the learner experience."
      topics={tourItQuickStartTopics}
      deeperIntro="Continue with detailed authoring topics, or use the self paced Starting with Tour It learning modules."
      resources={{
        heading: "Keep learning with Tour It",
        description:
          "Use the self paced modules to continue through the Tour It workflow.",
        links: [
          {
            label: "View training modules",
            href: tourItModulesUrl,
          },
        ],
      }}
      supportCallout={quickStartSupportCallout}
      spaceVariant="panoramic-horizon-arc"
    />
  );
}
