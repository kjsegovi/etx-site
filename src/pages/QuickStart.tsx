import { QuickStartGuide } from "../components/QuickStartGuide";
import {
  advancedAuthorWikiUrl,
  torusQuickStartSteps,
  torusQuickStartTopics,
  torusAuthorLoginUrl,
} from "../data/quickStart";

export function QuickStart() {
  return (
    <QuickStartGuide
      title="Build your first adaptive page in Torus"
      intro="A short first-mile guide for Advanced Author. Then jump into the full wiki when you are ready for deeper topics."
      primaryLink={{ label: "Open Torus author login", href: torusAuthorLoginUrl }}
      secondaryLink={{ label: "Full Advanced Author Wiki", href: advancedAuthorWikiUrl }}
      steps={torusQuickStartSteps}
      firstMileTitle="Four steps to get editing"
      firstMileIntro="Distilled from the Advanced Author Wiki’s “Getting into Torus and Starting a Project” walkthrough. Details and screenshots live in the full wiki."
      topics={torusQuickStartTopics}
      deeperIntro="Dive deeper into adaptive rules, responsive layouts, scored lessons, and the tools for testing and publishing your work."
      resourceHeading="Continue in the Advanced Author Wiki"
      resourceDescription="Step-by-step Scribe guides, interface notes, components, variables, troubleshooting, and publishing."
      resourceLinks={[
        {
          label: "Open the full wiki",
          href: advancedAuthorWikiUrl,
          emphasis: "primary",
        },
      ]}
      spaceVariant="gold-network-constellation"
    />
  );
}
