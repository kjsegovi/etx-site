import type { Accent } from "./projects";

export const brand = {
  name: "ETX",
  fullName: "Center for Education Through Exploration",
  tagline: "The science of learning. The art of storytelling. Education for everyone.",
  heroHeadline: {
    opening: "The science of learning.",
    accent: "The art of storytelling.",
    closing: "Education for everyone.",
  },
  heroBody:
    "We combine learning science, storytelling, technology, and human centered design to create meaningful learning experiences. We also build tools that empower educators, instructors, and organizations to create, adapt, and deliver their own.",
  positioning:
    "We're a learning-experience design studio. Partner with us to turn ideas into educational experiences people actually want to learn from.",
  mission:
    "Scientists, educators, and learning designers work together to transform authentic research into engaging educational experiences. Every project is grounded in learning science and designed to inspire curiosity, exploration, and discovery.",
  missionShort:
    "We don’t build lessons. We design learning experiences and the tools that bring them to life.",
  email: "etx@asu.edu",
  parent: "Arizona State University",
};

export const creatorMessage = {
  eyebrow: "Creator tools",
  title: "We catalyze creators.",
  body: "Educators, instructors, and organizations can use Torus, Simple Author, and Tour It to create, adapt, and deliver meaningful learning experiences of their own.",
};

export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Approach", to: "/approach" },
];

export interface Service {
  title: string;
  blurb: string;
  points: string[];
  accent: Accent;
}

export const services: Service[] = [
  {
    title: "Digital lessons & courseware",
    blurb:
      "From a single tight lesson to a full textbook replacement, in any subject — from NASA science to criminal justice.",
    points: [
      "Standards-aligned digital lessons & problem sets",
      "Full courses and textbook replacements",
      "One-on-one development with your faculty",
    ],
    accent: "ember",
  },
  {
    title: "Edtech and platform design",
    blurb:
      "We design, build, and offer open, flexible tools for real classrooms. Educators can use them as they are, adapt existing content, or create learning experiences of their own.",
    points: [
      "Torus for adaptive authoring and delivery",
      "Simple Author for guided experience creation",
      "Tour It for immersive virtual field trips",
    ],
    accent: "aqua",
  },
  {
    title: "Learning research",
    blurb:
      "We ground everything in evidence — measuring, studying, and improving what we make.",
    points: [
      "Efficacy studies and learning analytics",
      "Formative assessment and knowledge modeling",
      "Data-driven iteration, not assumptions",
    ],
    accent: "iris",
  },
  {
    title: "STEM outreach & delivery",
    blurb:
      "We help great learning reach real people — and we support them once it does.",
    points: [
      "Community building and professional development",
      "Delivery across institutions and audiences",
      "Fast, human support after launch",
    ],
    accent: "ember",
  },
];

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: "People First",
    body: "Great learning starts with people. We build genuine relationships with educators and learners, listening carefully to their needs, and we design with people, not just for them.",
  },
  {
    title: "Curiosity Drives Learning",
    body: "Curiosity, exploration, discovery, and storytelling are at the heart of meaningful learning. We create experiences that invite learners to ask questions and uncover understanding for themselves.",
  },
  {
    title: "Evidence Matters",
    body: "We ground our work in research and learning science, continually measuring, studying, and improving what we create. We value evidence over assumptions.",
  },
  {
    title: "Education for Everyone",
    body: "Meaningful learning opportunities should be accessible to all. Through open educational practices and thoughtful design, we work to remove barriers and expand access.",
  },
  {
    title: "Purposeful Design",
    body: "Every element — from technology and narrative to feedback and interaction — should serve a meaningful purpose and support learning.",
  },
  {
    title: "Human-Centered Innovation",
    body: "Technology is most powerful when it helps people learn, connect, and grow. We embrace innovation because it makes learning more human, not because it's flashy.",
  },
];

export interface Differentiator {
  them: string;
  us: string;
}

export const themVsUs: Differentiator[] = [
  { them: "Flashy technology for its own sake", us: "Purposeful technology that serves learning" },
  { them: "One audience: students", us: "Students, instructors, and the support ecosystem" },
  { them: "A lesson: a few slides of content", us: "A designed experience across every layer" },
  { them: "A big, slow, impersonal vendor", us: "A responsive studio that implements your feedback fast" },
  { them: "Claims and assumptions", us: "Measurable impact, grounded in research" },
];

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    body: "We start with people. We listen to your goals, your learners, and your constraints — even when you're not yet sure what's possible.",
  },
  {
    number: "02",
    title: "Design",
    body: "We shape the experience across every layer: knowledge, narrative, interaction, feedback, and exploration.",
  },
  {
    number: "03",
    title: "Build",
    body: "Our generalist team builds fast and collaboratively, developing one-on-one with you and adapting as we go.",
  },
  {
    number: "04",
    title: "Measure & iterate",
    body: "We study how learners actually do, then refine. Evidence, not assumptions, drives what comes next.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "15+", label: "years designing learning experiences" },
  { value: "6", label: "flagship products & platforms" },
  { value: "1000s", label: "of educators & learners reached" },
  { value: "NASA", label: "funded research and content" },
];

export interface Partner {
  name: string;
}

export const partners: Partner[] = [
  { name: "NASA" },
  { name: "Arizona State University" },
  { name: "Bill & Melinda Gates Foundation" },
  { name: "Howard Hughes Medical Institute" },
  { name: "U.S. Department of Education" },
];

// ASU-aligned accents. Text stays maroon for contrast on white; gold is used
// only for fills/dots/underlines, never as text.
export const accentClasses: Record<
  Accent,
  { text: string; bg: string; border: string; ring: string; dot: string }
> = {
  ember: {
    text: "text-ember-500",
    bg: "bg-ember-500",
    border: "border-ember-500/40",
    ring: "hover:border-ember-500/60",
    dot: "bg-ember-500",
  },
  aqua: {
    text: "text-ember-500",
    bg: "bg-aqua-500",
    border: "border-aqua-500/60",
    ring: "hover:border-aqua-500",
    dot: "bg-aqua-500",
  },
  iris: {
    text: "text-ember-500",
    bg: "bg-ember-400",
    border: "border-ember-400/40",
    ring: "hover:border-ember-400/60",
    dot: "bg-ember-400",
  },
};
