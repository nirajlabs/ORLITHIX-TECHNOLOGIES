import { DevelopmentApproachStep } from "@/types";

export const developmentApproachData: DevelopmentApproachStep[] = [
  {
    stepNumber: "01",
    name: "Discover",
    tagline: "First-Principles Problem Decomposition",
    description: "Clarify the problem, users, available evidence, and operating constraints before selecting a technical direction.",
    keyDeliverables: [
      "Problem and user context",
      "Constraints and assumptions",
      "Open questions to validate",
    ],
  },
  {
    stepNumber: "02",
    name: "Design",
    tagline: "Formal Architecture & Type Contracts",
    description: "Compare possible system boundaries, data flows, privacy considerations, and failure modes before implementation.",
    keyDeliverables: [
      "Architecture options",
      "Data and integration flows",
      "Risk and privacy considerations",
    ],
  },
  {
    stepNumber: "03",
    name: "Engineer",
    tagline: "High-Assurance Code Construction",
    description: "If a concept is selected for development, favor modularity, accessibility, maintainability, and appropriate tools.",
    keyDeliverables: [
      "A scoped implementation plan",
      "Maintainable components",
      "Testing and delivery considerations",
    ],
  },
  {
    stepNumber: "04",
    name: "Validate",
    tagline: "Rigorous Empirical Verification",
    description: "Evaluate concepts against explicit criteria and communicate what has—and has not—been validated.",
    keyDeliverables: [
      "Relevant tests and reviews",
      "Measured evaluation where appropriate",
      "Clear limitations and next steps",
    ],
  },
];
