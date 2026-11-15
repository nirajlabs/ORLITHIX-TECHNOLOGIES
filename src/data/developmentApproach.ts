import { DevelopmentApproachStep } from "@/types";

export const developmentApproachData: DevelopmentApproachStep[] = [
  {
    stepNumber: "01",
    name: "Discover",
    tagline: "First-Principles Problem Decomposition",
    description: "Every architectural initiative begins by dissecting the underlying engineering bottlenecks, data realities, and operational constraints before selecting technologies or drafting code.",
    keyDeliverables: [
      "Domain constraint mapping",
      "Data topology analysis",
      "Technical risk assessment",
    ],
  },
  {
    stepNumber: "02",
    name: "Design",
    tagline: "Formal Architecture & Type Contracts",
    description: "We formulate strictly typed schemas, event boundaries, failure recovery strategies, and security perimeters to ensure structural integrity across the entire solution lifecycle.",
    keyDeliverables: [
      "Strict data models & API contracts",
      "System boundary & latency budgets",
      "Zero-trust security model",
    ],
  },
  {
    stepNumber: "03",
    name: "Engineer",
    tagline: "High-Assurance Code Construction",
    description: "Building with modern compile-time safe languages, modular decoupling, and scalable cloud-native primitives. Every line of code is structured for clarity, testability, and low maintenance overhead.",
    keyDeliverables: [
      "Modular components & microservices",
      "Deterministic execution paths",
      "Continuous CI/CD integration",
    ],
  },
  {
    stepNumber: "04",
    name: "Validate",
    tagline: "Rigorous Empirical Verification",
    description: "Verification is never assumed or claimed without proof. We run automated regression suites, chaos simulations, benchmark evaluations, and multi-agent handover audits.",
    keyDeliverables: [
      "Automated test verification",
      "Stress & latency benchmarking",
      "Comprehensive drift-free handovers",
    ],
  },
];
