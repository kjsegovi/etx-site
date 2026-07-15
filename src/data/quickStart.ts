export const advancedAuthorWikiUrl =
  "https://etx-tech.notion.site/12162d4b114581b2a87accf1f42b23c8?v=12162d4b1145811eb21f000c459461ab";

export const torusAuthorLoginUrl =
  "https://proton.oli.cmu.edu/authors/log_in";

export interface QuickStartStep {
  number: string;
  title: string;
  body: string;
  tips?: string[];
}

/** First-mile guide distilled from the Advanced Author Wiki + Scribe walkthroughs. */
export const quickStartSteps: QuickStartStep[] = [
  {
    number: "01",
    title: "Create or access your Torus account",
    body: "Open the Torus author login and sign in with your author credentials. For now, skip “Sign in with Google” and use the standard author login path.",
    tips: [
      "You need an authoring account to create and edit projects — instructor or student accounts won’t open Advanced Author.",
      "Use the Torus author login linked above (not the Google sign-in option for now).",
    ],
  },
  {
    number: "02",
    title: "Start a new project",
    body: "From the Projects view, click New Project, give it a title, and create it. You’ll land on the project overview where you can manage details and collaborators.",
    tips: [
      "Name projects clearly — you’ll search for them again when you publish or create a section later.",
    ],
  },
  {
    number: "03",
    title: "Add an adaptive page and open Advanced Author",
    body: "In your project, create a Curriculum page. Choose a practice (non-scored) adaptive page for your first build, then use Edit Page → Advanced authoring → Open In Edit Mode to start designing.",
    tips: [
      "Read-Only mode is useful when you want to inspect a build without risking edits.",
      "Advanced Author is where you author adaptive screens, components, and states.",
    ],
  },
  {
    number: "04",
    title: "Preview, then keep building",
    body: "Open Preview from the page editor to experience the lesson like a learner. Use preview’s screen-hopping and Inspector tools for troubleshooting — then return to the wiki for layers, components, states, CSS, and publishing.",
    tips: [
      "Skipping around in preview can behave differently than a real learner path if your page uses layers or initial states.",
      "When you’re ready to share, the wiki covers publishing and Direct Delivery (non-LMS) sections.",
    ],
  },
];

export const quickStartTopics = [
  {
    title: "Layers, screens & subscreens",
    blurb: "Structure adaptive pages with the building blocks learners move through.",
  },
  {
    title: "Components & states",
    blurb: "Add interactions and define correct, incorrect, and initial states.",
  },
  {
    title: "Preview & Inspector",
    blurb: "Walk the lesson as a learner and inspect CAPI for troubleshooting.",
  },
  {
    title: "Publish & Direct Delivery",
    blurb: "Publish your project and share it outside an LMS when you need a learner link.",
  },
];
