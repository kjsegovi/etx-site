export type Accent = "ember" | "aqua" | "iris";

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  subject: string;
  tagline: string;
  summary: string;
  accent: Accent;
  tags: string[];
  url: string;
  featured: boolean;
  challenge: string;
  approach: string[];
  outcomes: string[];
  stat?: { value: string; label: string };
}

export const projects: Project[] = [
  {
    slug: "infiniscope",
    name: "Infiniscope",
    category: "Platform & Community",
    subject: "Earth & Space Science",
    tagline: "Transforming Earth & space science education",
    summary:
      "A NASA-funded network that gives educators free, NGSS-designed digital lessons, virtual field trips, and the creative tools to build their own.",
    accent: "aqua",
    tags: ["NASA", "Platform", "K-12", "Community"],
    url: "https://infiniscope.org",
    featured: true,
    challenge:
      "Educators everywhere wanted engaging, standards-aligned digital science resources — and the ability to personalize or create their own — but high-quality, free options were scarce and scattered.",
    approach: [
      "Designed a content library of NGSS-aligned digital lessons, visualizations, and virtual field trips.",
      "Built Tour It, a free browser-based platform for educators to author their own immersive virtual field trips.",
      "Grew a professional community with free accounts, professional development, and content-creation tools.",
    ],
    outcomes: [
      "A national network of educators with free access to digital learning resources.",
      "Reusable creation tools that let teachers adapt content to their own classrooms.",
      "Prototypes like 'Are We Alone?' translating NASA astrobiology research into adaptive learning.",
    ],
    stat: { value: "Free", label: "for educators nationwide" },
  },
  {
    slug: "real-chem",
    name: "REAL CHEM",
    category: "Courseware",
    subject: "General Chemistry",
    tagline: "General chemistry, tied to the world students care about",
    summary:
      "General Chemistry I & II courseware that opens the atomic foundations of our world with engaging video and hands-on explorations tied to real issues.",
    accent: "ember",
    tags: ["Courseware", "Higher Ed", "Video", "Assessment"],
    url: "https://inspark.education",
    featured: true,
    challenge:
      "Introductory chemistry too often reads like a dry textbook, leaving students unable to connect abstract concepts to anything they care about.",
    approach: [
      "Wrote and produced high-quality video that ties chemistry concepts to real-world issues.",
      "Designed interactive explorations and problem sets for genuine learn-by-doing practice.",
      "Built continuous, formative assessment into the flow of the course.",
    ],
    outcomes: [
      "A complete, engaging general chemistry sequence usable online or blended.",
      "A growing body of efficacy evidence for ETX-designed courseware.",
    ],
    stat: { value: "I & II", label: "full course sequence" },
  },
  {
    slug: "habworlds",
    name: "HabWorlds",
    category: "Courseware",
    subject: "Astrobiology",
    tagline: "Is there life in the universe?",
    summary:
      "A general-education astrobiology course that guides students through the formation of stars, planets, Earth, life, intelligence, and civilization.",
    accent: "aqua",
    tags: ["Higher Ed", "Astrobiology", "Gen Ed", "Inquiry"],
    url: "https://inspark.education",
    featured: true,
    challenge:
      "Astrobiology spans astronomy, geology, biology, and more — a sweeping story that is hard to teach as one coherent, engaging general-education experience.",
    approach: [
      "Designed a driving-question course around 'Is there life in the universe?'",
      "Guided learners through the formation of stars, planets, Earth, life, intelligence, and civilization.",
      "Wove active, inquiry-based exploration through the entire narrative rather than isolated lectures.",
    ],
    outcomes: [
      "A cohesive gen-ed astrobiology course that connects multiple sciences into one story.",
      "An engaging model for teaching big, cross-disciplinary questions.",
    ],
    stat: { value: "Gen ed", label: "cross-disciplinary science" },
  },
  {
    slug: "polar-explorer",
    name: "Polar Explorer",
    category: "Learning Experience",
    subject: "Earth & Climate Science",
    tagline: "Explore Earth's changing poles through real data",
    summary:
      "An exploratory learning experience that invites students to investigate the polar regions and reason from real scientific data.",
    accent: "iris",
    tags: ["Data-Driven", "Exploration", "Climate"],
    url: "https://etx.asu.edu",
    featured: true,
    challenge:
      "Climate and earth-science topics can feel remote and abstract, making it hard for learners to engage with the underlying evidence.",
    approach: [
      "Designed an inquiry-driven experience around authentic polar data.",
      "Guided learners to make observations, form hypotheses, and draw conclusions.",
      "Wrapped the science in narrative and exploration rather than lecture.",
    ],
    outcomes: [
      "A model for turning real scientific datasets into approachable, exploratory learning.",
    ],
    stat: { value: "Real data", label: "at the center of learning" },
  },
  {
    slug: "nasa-scope",
    name: "NASA SCoPE",
    category: "Community of Practice",
    subject: "STEM Engagement",
    tagline: "Connecting NASA science experts with education",
    summary:
      "The NASA SMD Community of Practice for Education, cultivating collaboration between NASA science and engineering experts, early-career scientists, and Science Activation.",
    accent: "aqua",
    tags: ["NASA", "Community", "Grants", "STEM"],
    url: "https://etx.asu.edu/major-projects/scope/",
    featured: false,
    challenge:
      "NASA scientists and early-career researchers needed clearer pathways to collaborate with education and Science Activation teams.",
    approach: [
      "Built programs connecting subject-matter experts with Science Activation teams.",
      "Supported grant proposal preparation and seed-grant opportunities.",
      "Created AGU/SciAct affiliate pathways to help experts share their work.",
    ],
    outcomes: [
      "An active community of practice bridging NASA expertise and education.",
    ],
    stat: { value: "NASA", label: "Science Activation partner" },
  },
  {
    slug: "inspark",
    name: "Inspark & BioBeyond",
    category: "Courseware Network",
    subject: "Biology & Science",
    tagline: "A better way to learn science",
    summary:
      "A global network of educators creating and sharing next-generation courseware — including BioBeyond, an inquiry-driven introductory biology course.",
    accent: "ember",
    tags: ["Network", "Higher Ed", "Biology", "OER"],
    url: "https://inspark.education",
    featured: true,
    challenge:
      "Faculty wanted active, personalized alternatives to the traditional textbook — without building everything from scratch alone.",
    approach: [
      "Designed textbook-replacement smart courses built around driving questions.",
      "Enabled cross-institutional collaboration so educators create and share courseware.",
      "Embedded simulations, projects, and continuous assessment throughout.",
    ],
    outcomes: [
      "A catalog of smart courses, labs, and lessons across biology, chemistry, and more.",
      "A model of shared, community-built, next-generation courseware.",
    ],
    stat: { value: "Global", label: "network of educators" },
  },
  {
    slug: "virtual-field-trips",
    name: "Virtual Field Trips",
    category: "Immersive Learning",
    subject: "Earth & Space Science",
    tagline: "Go anywhere, from the origins of life to distant worlds",
    summary:
      "Browser-based immersive field trips that take learners from the earliest record of life on Earth to the search for life beyond it.",
    accent: "iris",
    tags: ["Immersive", "Tour It", "Exploration"],
    url: "https://infiniscope.org",
    featured: false,
    challenge:
      "Real field experiences are powerful but rarely accessible — most learners can't visit a 3.5-billion-year-old rock formation.",
    approach: [
      "Designed immersive, narrative-driven expeditions using the Tour It platform.",
      "Connected each destination to authentic scientific evidence and reasoning.",
      "Made every experience run in the browser for any learner, anywhere.",
    ],
    outcomes: [
      "Accessible expeditions like the Earliest Record of Life and First Multicellular Organisms.",
    ],
    stat: { value: "Any device", label: "runs in the browser" },
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);
