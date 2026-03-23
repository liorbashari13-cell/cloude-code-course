export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  projectType: ProjectType;
  budgetRange?: BudgetRange;
  message: string;
  timestamp: string;
  source: string;
}

export type ProjectType =
  | "website"
  | "webapp"
  | "automation"
  | "consulting"
  | "other";

export type BudgetRange = "5k-10k" | "10k-20k" | "20k-50k" | "50k+";

export interface ServiceItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface MethodStep {
  number: number;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface NavLink {
  href: string;
  labelKey: string;
}
