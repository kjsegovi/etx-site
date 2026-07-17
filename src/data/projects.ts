export type Accent = "ember" | "aqua" | "iris";

export type ResearchKind = "poster" | "paper" | "study" | "article";

export interface ResearchItem {
  title: string;
  kind: ResearchKind;
  url: string;
  summary?: string;
}

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
  research?: ResearchItem[];
}

export const projects: Project[] = [
  {
    slug: "tour-it",
    name: "Tour It",
    category: "Authoring Tool",
    subject: "Immersive Field Trips",
    tagline: "Turn places into immersive learning journeys",
    summary:
      "A free, browser-based authoring tool that helps educators build 360° virtual field trips with panoramas, interactive hotspots, and connected scenes.",
    accent: "iris",
    tags: ["Authoring", "360°", "K-12"],
    url: "https://infiniscope.org/page/tour-it",
    featured: true,
    challenge:
      "Place-based learning can make complex ideas tangible, but travel, cost, geography, and accessibility keep many learners from experiencing the places where those ideas come alive.",
    approach: [
      "Created a browser-based authoring workflow for uploading 360° panoramas and arranging them into a guided journey.",
      "Enabled educators to layer text, video, websites, PDFs, images, and audio into interactive hotspots.",
      "Connected Tour It to free Infiniscope accounts so educators can create, preview, and share immersive field trips without specialized software.",
    ],
    outcomes: [
      "Educators can build and deliver place-based learning experiences on the web using their own imagery and media.",
      "Connected panoramas and flexible hotspots support journeys that range from guided explanations to open exploration.",
      "Free access and browser-based delivery make immersive field trips available beyond the limits of physical travel.",
    ],
    stat: { value: "360°", label: "browser-based field trip authoring" },
  },
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
    research: [
      {
        title: "DOT",
        kind: "poster",
        url: "https://drive.google.com/file/d/1WYP1_X3jKRog9XTJSIebBALiuYU8TcWJ/view?pli=1",
      },
      {
        title: "Keeping Chemistry Relevant",
        kind: "poster",
        url: "https://drive.google.com/file/d/1aNJVL-0UTkayd0pWQK8Ja5mgvIDpY6MH/view",
      },
      {
        title: "Not All Practice is Equal",
        kind: "poster",
        url: "https://drive.google.com/file/d/12sb_XBT5vYVRyQww7-5Cw7cxrnYXtqXJ/view",
      },
      {
        title: "Mastery Learning",
        kind: "poster",
        url: "https://drive.google.com/file/d/1F_SspsEtPcuZw4KISZCeAlkqhqdzU-a6/view",
      },
      {
        title: "How Students Really Use Courseware",
        kind: "poster",
        url: "https://drive.google.com/file/d/15Rz6k5qCIx9eaGDQ1zWuznceU7K0OKHs/view",
      },
      {
        title: "Building Bonds",
        kind: "poster",
        url: "https://drive.google.com/file/d/1z3Bu7xvfBxTXObuEUS8OYPOcgy3S7snY/view",
      },
      {
        title: "Designing for Student Engagement with AI (DOT)",
        kind: "paper",
        url: "https://drive.google.com/file/d/1LMMR7jXZ1xahyEs4gzLnnArXU7IAsVCK/view",
      },
      {
        title: "Implementing Mastery Grading",
        kind: "paper",
        url: "https://drive.google.com/file/d/1gPbegltvaWxQfRJP7Ny3AkAkqPw8MpKi/view",
      },
      {
        title: "Mathematics Matters",
        kind: "paper",
        url: "https://drive.google.com/file/d/1OVrfu3lSCdwAY1vjbUMyoJiPdmnFoyHS/view",
      },
      {
        title: "Promise of Mastery-Based Testing",
        kind: "paper",
        url: "https://drive.google.com/file/d/1iz0cJRELewfSEPjcwphi_qa4jWXEyYnY/view",
      },
      {
        title: "REAL CHEM Action Research LearnLab",
        kind: "paper",
        url: "https://drive.google.com/file/d/1KQ4W7SrfdejFqEoui0_QJD68tKiNnBOi/view",
      },
    ],
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
    research: [
      {
        title: "Increased grades & decreased withdraw rates",
        kind: "study",
        url: "https://inspark.education/teach/efficacy/#course-habworlds",
        summary:
          "At Glendale Community College, HabWorlds sections earned significantly more As and Bs, fewer Ds and Fs, and fewer withdrawals than traditional sections (n = 306; p = .009).",
      },
      {
        title: "Habitable Worlds: Delivering on the Promises of Online Education",
        kind: "paper",
        url: "http://online.liebertpub.com/doi/10.1089/ast.2016.1550",
        summary: "Journal publication on Habitable Worlds and online science education.",
      },
      {
        title: "How one instructor uses HabWorlds simulations for active learning",
        kind: "article",
        url: "https://inspark.education/teach/case-study/sally-watt/",
      },
      {
        title: "How HabWorlds leads students to deeper understanding of science",
        kind: "article",
        url: "https://inspark.education/teach/case-study/stephan-martin/",
      },
      {
        title: "Inspark efficacy studies overview",
        kind: "study",
        url: "https://inspark.education/teach/efficacy/",
        summary:
          "Summary of HabWorlds efficacy findings and further reading from the Inspark Science Network.",
      },
    ],
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
    research: [
      {
        title: "Higher end-of-course grades (SRI Education)",
        kind: "study",
        url: "https://www.sri.com/wp-content/uploads/pdf/next_generation_courseware_challenge_evaluation_final_report_dec_2018.pdf",
        summary:
          "Independent SRI evaluation across four institutions found BioBeyond improved end-of-course grades by up to half a letter grade versus traditional courses (n = 620 BioBeyond; 2,900 traditional).",
      },
      {
        title: "Improved success across student demographics",
        kind: "study",
        url: "https://inspark.education/teach/efficacy/#course-biobeyond",
        summary:
          "In the SRI study, gender and underrepresented status had no effect on the ability to predict student performance after controlling for demographics.",
      },
      {
        title: "Same instructor, same exam, better results",
        kind: "study",
        url: "https://inspark.education/teach/efficacy/#course-biobeyond",
        summary:
          "At Miami Dade College, BioBeyond sections produced more As and Bs than traditional Biology 100 with the same instructor and exam (33% vs. 19%; n = 239; p < .001).",
      },
      {
        title: "Inspark efficacy studies overview",
        kind: "study",
        url: "https://inspark.education/teach/efficacy/",
        summary:
          "Summary of BioBeyond efficacy findings, awards, and further reading from the Inspark Science Network.",
      },
      {
        title: "Adaptive Bio course finds success with simulation & virtual field trips",
        kind: "article",
        url: "https://campustechnology.com/articles/2017/10/02/adaptive-bio-course-for-non-majors-finds-success-with-simulation-virtual-field-trips.aspx",
      },
    ],
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
    url: "https://vft.asu.edu",
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

export const evidenceProjects = projects.filter(
  (p) => p.research && p.research.length > 0,
);
