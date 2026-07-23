export interface CreatorTool {
  name: string;
  description: string;
  destination: string;
  external: boolean;
}

export const creatorTools: CreatorTool[] = [
  {
    name: "Torus",
    description:
      "Create adaptive learning experiences with an open authoring and delivery platform.",
    destination: "/quick-start/torus",
    external: false,
  },
  {
    name: "Simple Author",
    description:
      "Build responsive adaptive pages with a guided authoring workflow.",
    destination: "/quick-start/simple-author",
    external: false,
  },
  {
    name: "Tour It",
    description:
      "Turn 360 degree panoramas and media into immersive virtual field trips.",
    destination: "/quick-start/tour-it",
    external: false,
  },
];

export interface WorkShowcase {
  embedUrl: string;
  experienceName: string;
  title: string;
  description: string;
  iframeTitle: string;
  fallbackUrl: string;
}

export const workShowcase: WorkShowcase = {
  embedUrl:
    "https://p.tourit.etx.asu.edu/tl2jve4u/0iukh0mkixvj3ss/index.html",
  experienceName: "Nāhuku Lava Tubes",
  title: "Explore Nāhuku Lava Tubes",
  description:
    "See how Tour It combines panoramic scenes, media, and guided exploration in a virtual field trip. Select the preview below to load the optional interactive example. The description on this page provides the essential context.",
  iframeTitle:
    "Exploring Nāhuku Lava Tubes on a Rainy Day virtual field trip created with Tour It.",
  fallbackUrl:
    "https://p.tourit.etx.asu.edu/tl2jve4u/0iukh0mkixvj3ss/index.html",
};
