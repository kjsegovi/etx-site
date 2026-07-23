import { QuickStartGuide } from "../components/QuickStartGuide";
import {
  tourItModulesUrl,
  tourItProductUrl,
  tourItQuickStartSteps,
  tourItQuickStartTopics,
  tourItWikiUrl,
} from "../data/quickStart";

export function TourItQuickStart() {
  return (
    <QuickStartGuide
      title="Build your first virtual field trip in Tour It"
      intro="A short first-mile guide to turning 360° panoramas and interactive media into an immersive journey learners can explore in their browser."
      primaryLink={{ label: "Tour It overview and access", href: tourItProductUrl }}
      secondaryLink={{ label: "Full Tour It Wiki", href: tourItWikiUrl }}
      steps={tourItQuickStartSteps}
      firstMileTitle="Four steps to your first tour"
      firstMileIntro="Distilled from the Tour It Wiki’s getting-started and basic-task guidance. Visit the full wiki for interface details and illustrated walkthroughs."
      topics={tourItQuickStartTopics}
      deeperIntro="Use the full Tour It Wiki for detailed authoring guidance, or continue with the self-paced Starting with Tour It learning modules."
      resourceHeading="Keep learning with Tour It"
      resourceDescription="Explore detailed wiki guidance for authoring and troubleshooting, plus self-paced modules that walk through the Tour It workflow."
      resourceLinks={[
        {
          label: "View training modules",
          href: tourItModulesUrl,
        },
        {
          label: "Open the full wiki",
          href: tourItWikiUrl,
          emphasis: "primary",
        },
      ]}
      spaceVariant="panoramic-horizon-arc"
    />
  );
}
