import { QuickStartGuide } from "../components/QuickStartGuide";
import {
  quickStartSupportCallout,
  torusQuickStartSteps,
  torusQuickStartTopics,
  torusAuthorLoginUrl,
} from "../data/quickStart";

export function QuickStart() {
  return (
    <QuickStartGuide
      title="Build your first basic page in Torus"
      intro="A short first mile guide to creating a project, adding a Foundation page, and previewing a simple learning experience."
      primaryLink={{ label: "Open Torus author login", href: torusAuthorLoginUrl }}
      steps={torusQuickStartSteps}
      firstMileTitle="Four steps to your first page"
      firstMileIntro="Start with the standard page editor and a focused learning goal. You can explore adaptive authoring after the basic page works well."
      topics={torusQuickStartTopics}
      deeperIntro="Continue with Advanced Author, adaptive rules, responsive layouts, testing tools, and publishing when your project needs them."
      supportCallout={quickStartSupportCallout}
      spaceVariant="gold-network-constellation"
    />
  );
}
