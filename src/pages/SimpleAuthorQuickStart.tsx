import { QuickStartGuide } from "../components/QuickStartGuide";
import {
  simpleAuthorDemoUrl,
  simpleAuthorModulesUrl,
  simpleAuthorProductUrl,
  simpleAuthorQuickStartSteps,
  simpleAuthorQuickStartTopics,
} from "../data/quickStart";

export function SimpleAuthorQuickStart() {
  return (
    <QuickStartGuide
      title="Build your first adaptive activity in Simple Author"
      intro="A guided first mile path for creating interactive digital learning activities with templates, adaptive pathways, media, and personalized feedback."
      primaryLink={{
        label: "Explore the guest demo lesson",
        href: simpleAuthorDemoUrl,
      }}
      secondaryLink={{
        label: "Simple Author overview and access",
        href: simpleAuthorProductUrl,
      }}
      steps={simpleAuthorQuickStartSteps}
      firstMileTitle="Four steps to your first activity"
      firstMileIntro="Start by experiencing a lesson as a learner, then request access and use the visual authoring workflow to build and preview your own activity."
      topics={simpleAuthorQuickStartTopics}
      deeperIntro="Continue with templates, flowcharts, adaptive pathways, interactive media, personalized feedback, and LMS delivery."
      resourceHeading="Keep learning with Simple Author"
      resourceDescription="Explore the official overview and access instructions, try the guest demo, or continue with the self paced training modules."
      resourceLinks={[
        {
          label: "Explore the guest demo",
          href: simpleAuthorDemoUrl,
        },
        {
          label: "View training modules",
          href: simpleAuthorModulesUrl,
        },
        {
          label: "Simple Author overview and access",
          href: simpleAuthorProductUrl,
          emphasis: "primary",
        },
      ]}
      spaceVariant="adaptive-pathways"
    />
  );
}
