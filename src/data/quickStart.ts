export const advancedAuthorWikiUrl =
  "https://etx-tech.notion.site/12162d4b114581b2a87accf1f42b23c8?v=12162d4b1145811eb21f000c459461ab";

export const torusAuthorLoginUrl =
  "https://proton.oli.cmu.edu/authors/log_in";

export const tourItWikiUrl =
  "https://etx-tech.notion.site/12162d4b114581fbb9e7ebc92d554885?v=12162d4b114581aa8180000c4ca6dd67";

export const tourItProductUrl = "https://infiniscope.org/page/tour-it";

export const tourItModulesUrl = "https://infiniscope.org/page/tour-it-modules";

export const simpleAuthorProductUrl =
  "https://infiniscope.org/page/simple-author";

export const simpleAuthorDemoUrl =
  "https://proton.oli.cmu.edu/sections/simple_authoring_tool_demo/join";

export const simpleAuthorModulesUrl =
  "https://infiniscope.org/page/simple-author-modules";

export interface QuickStartStep {
  number: string;
  title: string;
  body: string;
  tips?: string[];
}

export interface QuickStartTopic {
  title: string;
  blurb: string;
}

export interface QuickStartProduct {
  name: string;
  eyebrow: string;
  blurb: string;
  detail: string;
  to: string;
  cta: string;
}

export const quickStartProducts: QuickStartProduct[] = [
  {
    name: "Torus",
    eyebrow: "Adaptive authoring",
    blurb: "Build your first adaptive learning page with Advanced Author.",
    detail:
      "Create a project, add a practice page, open Advanced Author, and preview the learner experience.",
    to: "/quick-start/torus",
    cta: "Start with Torus",
  },
  {
    name: "Simple Author",
    eyebrow: "Guided adaptive authoring",
    blurb:
      "Create an interactive lesson with templates, adaptive pathways, and personalized feedback.",
    detail:
      "Use a visual editor to add questions and media, map learner routes, and preview each path before sharing.",
    to: "/quick-start/simple-author",
    cta: "Start with Simple Author",
  },
  {
    name: "Tour It",
    eyebrow: "360° authoring",
    blurb: "Build your first immersive virtual field trip.",
    detail:
      "Combine panoramas, interactive hotspots, and connected scenes into a journey learners can explore in a browser.",
    to: "/quick-start/tour-it",
    cta: "Start with Tour It",
  },
];

/** First-mile guide distilled from the Advanced Author Wiki + Scribe walkthroughs. */
export const torusQuickStartSteps: QuickStartStep[] = [
  {
    number: "01",
    title: "Create or access your Torus account",
    body: "Open the Torus author login and sign in with your author credentials. For now, skip “Sign in with Google” and use the standard author login path.",
    tips: [
      "You need an authoring account to create and edit projects. Instructor or student accounts will not open Advanced Author.",
      "Use the Torus author login linked above (not the Google sign-in option for now).",
    ],
  },
  {
    number: "02",
    title: "Start a new project",
    body: "From the Projects view, click New Project, give it a title, and create it. You’ll land on the project overview where you can manage details and collaborators.",
    tips: [
      "Name projects clearly because you will search for them again when you publish or create a section later.",
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
    body: "Open Preview from the page editor to experience the lesson like a learner. Use preview’s screen-hopping and Inspector tools for troubleshooting. Then return to the wiki for layers, components, states, CSS, and publishing.",
    tips: [
      "Skipping around in preview can behave differently than a real learner path if your page uses layers or initial states.",
      "When you’re ready to share, the wiki covers publishing and Direct Delivery (non-LMS) sections.",
    ],
  },
];

export const torusQuickStartTopics: QuickStartTopic[] = [
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

/** First-mile guide distilled from the Tour It Wiki's getting-started tasks. */
export const tourItQuickStartSteps: QuickStartStep[] = [
  {
    number: "01",
    title: "Access Tour It through Infiniscope",
    body: "Create or sign in to your free Infiniscope account, open Creative Tools & The Community, and launch Tour It from the available authoring tools.",
    tips: [
      "Tour It runs in the browser, so you do not need to install authoring software.",
      "Use an Infiniscope account that you can return to when you want to edit or share the tour.",
    ],
  },
  {
    number: "02",
    title: "Start a tour and set the basics",
    body: "Create a new tour, add a clear title and project details, and decide what place, question, or learning journey will connect your scenes.",
    tips: [
      "A short story outline helps you decide which panoramas you need before you begin connecting them.",
    ],
  },
  {
    number: "03",
    title: "Add panoramas and hotspots",
    body: "Upload your 360° imagery, then place hotspots where learners should investigate. Hotspots can introduce text, video, websites, PDFs, images, and audio.",
    tips: [
      "Choose hotspot locations that are easy to notice without covering the most important part of the panorama.",
      "Keep media focused on what learners should observe, understand, or do in that scene.",
    ],
  },
  {
    number: "04",
    title: "Connect, preview, and share",
    body: "Link panoramas into a journey, preview the tour from a learner’s perspective, and test every hotspot and scene transition before sharing your experience.",
    tips: [
      "Check the tour on the devices your learners are most likely to use.",
      "The full wiki covers sharing options, including Simple Author and VR paths.",
    ],
  },
];

export const tourItQuickStartTopics: QuickStartTopic[] = [
  {
    title: "Interface & navigation",
    blurb: "Learn where Tour It keeps project settings, scene tools, previews, and authoring controls.",
  },
  {
    title: "Connecting panoramas",
    blurb: "Build clear routes between scenes so learners can move through a coherent journey.",
  },
  {
    title: "Sharing & Simple Author",
    blurb: "Explore sharing workflows, Simple Author options, and paths for viewing a tour in VR.",
  },
  {
    title: "Media tips & troubleshooting",
    blurb: "Prepare 360° imagery and hotspot media, then diagnose common authoring and playback issues.",
  },
];

/** First mile guide distilled from the official Simple Author overview. */
export const simpleAuthorQuickStartSteps: QuickStartStep[] = [
  {
    number: "01",
    title: "Explore the guest demo lesson",
    body: "Open the guest demo to experience a Simple Author activity as a learner. Look for how questions, media, adaptive pathways, and feedback shape what appears next.",
    tips: [
      "Guest participation is anonymous, and progress in the demo is not saved.",
      "Notice how learner responses can lead to different feedback or content.",
    ],
  },
  {
    number: "02",
    title: "Request free access through Infiniscope",
    body: "Open the Simple Author overview, complete the access form, and follow the instructions Infiniscope sends to create an account and open the free authoring tool.",
    tips: [
      "The official overview includes the access form and links to the demo and training.",
    ],
  },
  {
    number: "03",
    title: "Start with a template and visual editor",
    body: "Choose a screen template, add your own text and images, and arrange the activity with the drag and drop interface, rich text editor, and flowchart tool.",
    tips: [
      "Use the one click preview as you build so you can check the learner experience early.",
    ],
  },
  {
    number: "04",
    title:
      "Add questions, media, adaptive pathways, and response-specific feedback",
    body: "Add questions and embedded media, route learners through adaptive pathways, and write response specific feedback. Preview every route before you share or deliver the activity through an LMS.",
    tips: [
      "Simple Author provides six question types and supports embedded videos, websites, simulations, and images.",
      "Test routes that support struggling learners, challenge high achievers, and offer student agency.",
    ],
  },
];

export const simpleAuthorQuickStartTopics: QuickStartTopic[] = [
  {
    title: "Templates and visual editing",
    blurb:
      "Choose a screen template, arrange content with visual editing tools, and preview changes quickly.",
  },
  {
    title: "Flowcharts and adaptive pathways",
    blurb:
      "Map routes that address misconceptions, fill learning gaps, extend learning, and support student agency.",
  },
  {
    title: "Questions and interactive media",
    blurb:
      "Use six question types and add videos, simulations, websites, images, and other rich media.",
  },
  {
    title: "Personalized feedback and delivery",
    blurb:
      "Write feedback for individual responses, test every path, and prepare the activity for LMS delivery.",
  },
];
