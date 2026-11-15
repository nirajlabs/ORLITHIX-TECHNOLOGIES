export type ProductStatus = 
  | 'CONCEPT_VALIDATION'
  | 'IN_DEVELOPMENT'
  | 'ALPHA_PREVIEW'
  | 'PLANNED_INITIATIVE';

export interface Product {
  id: string;
  name: string;
  slug: string;
  divisionId: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  tags: string[];
  features: string[];
  techStack: string[];
  targetAudience: string;
  isFeatured: boolean;
}

export interface Division {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  coreVectors: string[];
  status: 'ESTABLISHED_FOCUS' | 'ACTIVE_RESEARCH' | 'EXPLORATORY';
}

export interface Capability {
  id: string;
  title: string;
  divisionId: string;
  summary: string;
  description: string;
  architecturalPillars: string[];
  iconName: string;
  benchmarkMetric?: {
    label: string;
    value: string;
  };
}

export interface DevelopmentApproachStep {
  stepNumber: string;
  name: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface CompanyConfig {
  name: string;
  legalEntityNotice: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  aboutHeadline: string;
  aboutSummary: string;
  aboutVision: string;
  aboutMission: string[];
  aboutTechnologyPhilosophy: Array<{
    title: string;
    description: string;
  }>;
  aboutFutureDirection: string;
  contactCtaHeadline: string;
  contactCtaDescription: string;
  contactDetails: {
    email?: string;
    phone?: string;
    address?: string;
    socialLinks?: Array<{
      label: string;
      url: string;
    }>;
  };
  foundedYear: string;
}
