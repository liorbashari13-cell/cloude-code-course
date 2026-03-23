import type { NavLink, ServiceItem, MethodStep, TechItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#services", labelKey: "nav.services" },
  { href: "#method", labelKey: "nav.method" },
  { href: "#tech", labelKey: "nav.tech" },
  { href: "#contact", labelKey: "nav.contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: "Code",
    titleKey: "services.custom.title",
    descriptionKey: "services.custom.description",
  },
  {
    icon: "Server",
    titleKey: "services.systems.title",
    descriptionKey: "services.systems.description",
  },
  {
    icon: "Zap",
    titleKey: "services.automation.title",
    descriptionKey: "services.automation.description",
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: 1,
    titleKey: "method.step1.title",
    descriptionKey: "method.step1.description",
    icon: "FileText",
  },
  {
    number: 2,
    titleKey: "method.step2.title",
    descriptionKey: "method.step2.description",
    icon: "Code2",
  },
  {
    number: 3,
    titleKey: "method.step3.title",
    descriptionKey: "method.step3.description",
    icon: "Rocket",
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Python", icon: "python" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/lior-bashari",
  github: "https://github.com/lior-bashari",
};

export const PROJECT_TYPES = [
  "website",
  "webapp",
  "automation",
  "consulting",
  "other",
] as const;

export const BUDGET_RANGES = [
  "5k-10k",
  "10k-20k",
  "20k-50k",
  "50k+",
] as const;
