export type ProductStage =
  | "research_and_validation"
  | "future_concept"
  | "prototype"
  | "pilot"
  | "launched";

export type ProductCategory =
  | "AI & ML"
  | "Enterprise Software"
  | "Data Intelligence"
  | "Automation";

export interface ProductFeature {
  title: string;
  description: string;
  technicalDetail?: string;
}

export interface ProductRoadmapMilestone {
  phase: string;
  title: string;
  description: string;
  targetHorizon: string;
  status: "completed" | "in_progress" | "planned";
}

export interface ProductCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent";
  note?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: ProductCategory;
  stage: ProductStage;
  statusLabel: string;
  stageBadgeVariant: "concept" | "development" | "alpha" | "neutral" | "accent";
  problemStatement: string;
  solution: string;
  description: string;
  longOverview: string;
  features: ProductFeature[];
  techStack: string[];
  image?: string;
  cta: ProductCTA;
  futureUpdates: ProductRoadmapMilestone[];
  targetAudience: string;
  architecturalHighlights: string[];
  relatedCapabilities: Array<{ name: string; slug: string }>;
  published: boolean;
}

export const productsList: ProductItem[] = [
  {
    id: "handover-readiness-ai",
    name: "Software Handover Readiness AI",
    slug: "software-handover-readiness-ai",
    tagline: "Autonomous Verification of Codebase Integrity, Technical Documentation & Operational Readiness",
    category: "Automation",
    stage: "research_and_validation",
    statusLabel: "Research and Validation",
    stageBadgeVariant: "concept",
    problemStatement:
      "When software projects transition between engineering teams or AI coding agents, handover evidence can be incomplete or inconsistent. Unverified completion claims, unresolved issues, and outdated documentation can create onboarding friction and operational uncertainty.",
    solution:
      "A proposed verification workflow for inspecting codebases, comparing documentation with source structures, reviewing test evidence, identifying unresolved issues, and assembling a structured handover readiness dossier.",
    description:
      "AI-powered analysis of software project handover evidence, technical documentation, unresolved issues and operational readiness.",
    longOverview:
      "Software Handover Readiness AI is a research and validation concept for human-to-human, human-to-agent, and agent-to-agent software transitions. The proposed approach explores parsing abstract syntax trees (ASTs), mapping repository dependencies, comparing documentation with source interfaces, and identifying areas where additional tests or handover evidence may be needed. These capabilities are under research and are not presented as a completed product.",
    features: [
      {
        title: "AST-Driven Documentation Drift Detection",
        description:
          "Parses source code into abstract syntax trees to detect undocumented API changes, missing environment variables, and stale architectural claims.",
        technicalDetail: "Type-level static AST analysis across TypeScript, Python, and Rust source files.",
      },
      {
        title: "Empirical Test Harness Verification",
        description:
          "Directly executes unit, integration, and linting suites, verifying actual test exit codes and reporting real branch coverage rather than self-reported claims.",
        technicalDetail: "Sandboxed execution runner with cryptographic hash verification of test outputs.",
      },
      {
        title: "Unresolved Issue & Technical Debt Mining",
        description:
          "Scans codebases for TODOs, FIXMEs, unhandled promise rejections, type assertions (`any`), and untracked edge cases.",
        technicalDetail: "Semantic embedding clustering to categorize hidden operational debt.",
      },
      {
        title: "Multi-Agent State Serialization",
        description:
          "Generates standardized, portable machine-readable handover protocols allowing secondary AI coding agents to resume development without losing context.",
        technicalDetail: "Structured JSON schema specifications with deterministic state trees.",
      },
    ],
    techStack: [
      "TypeScript",
      "Python",
      "Tree-sitter AST",
      "Next.js",
      "FastAPI",
      "Vector Embeddings",
      "Deterministic Test Harness",
    ],
    cta: {
      label: "View Enquiry Options",
      href: "/contact?subject=handover-readiness-ai",
      variant: "primary",
      note: "Research concept only; no evaluation or collaboration channel is currently configured.",
    },
    futureUpdates: [
      {
        phase: "Phase 1",
        title: "Algorithmic AST Drift Engine",
        description: "Benchmark static comparison against TypeScript and Python enterprise repositories.",
        targetHorizon: "Research and Validation",
        status: "planned",
      },
      {
        phase: "Phase 2",
        title: "Multi-Agent State Protocol Standard",
        description: "Drafting the open Handover Specification (OHS) for cross-agent state persistence.",
        targetHorizon: "Next Research Cycle",
        status: "planned",
      },
      {
        phase: "Phase 3",
        title: "Automated Regression Synthesizer",
        description: "Zero-shot synthesis of missing regression tests for undocumented functions.",
        targetHorizon: "Future Horizon",
        status: "planned",
      },
    ],
    targetAudience: "Engineering Leadership, Enterprise DevOps Teams, and Multi-Agent AI Swarms",
    architecturalHighlights: [
      "Evidence-Linked Readiness Reporting",
      "AST-Based Documentation Review",
      "Repository Dependency Mapping",
      "Test and Handover Evidence Checks",
    ],
    relatedCapabilities: [
      { name: "Automation & AI Agents", slug: "automation-ai-agents" },
      { name: "Software Engineering", slug: "software-engineering" },
      { name: "Artificial Intelligence & ML", slug: "artificial-intelligence-machine-learning" },
    ],
    published: true,
  },
  {
    id: "datapilot-ai",
    name: "DataPilot AI",
    slug: "datapilot-ai",
    tagline: "Enterprise Data Onboarding, Automated Schema Mapping & Continuous Quality Validation",
    category: "Data Intelligence",
    stage: "future_concept",
    statusLabel: "Future Concept",
    stageBadgeVariant: "concept",
    problemStatement:
      "Enterprise data onboarding across legacy databases, files, and partner feeds can require substantial manual schema mapping. Upstream schema drift and invalid rows can affect downstream analytical models and databases.",
    solution:
      "An intelligent autonomous data copilot that analyzes raw unstructured or tabular data sources, infers semantic schemas, proposes type-safe normalization mappings, and continuously monitors data streams with declarative quality sentinels.",
    description:
      "Enterprise data onboarding and quality validation platform.",
    longOverview:
      "DataPilot AI is conceptualized as an intelligent data intake and validation fabric for modern enterprises. Operating as a pre-ingestion governance barrier, DataPilot AI analyzes heterogeneous inbound datasets, detects anomalies in statistical distributions, flags nullability or format violations, and auto-generates PostgreSQL and columnar database migrations without manual data engineering intervention.",
    features: [
      {
        title: "Semantic Schema Auto-Inference",
        description:
          "Automatically deduces nested data structures, relational foreign keys, timestamp formats, and categorical enums from raw data streams.",
        technicalDetail: "Statistical column profiling combined with domain semantic classifiers.",
      },
      {
        title: "Automated Data Quality Sentinels",
        description:
          "Enforces row-level constraints, value range validations, uniqueness guarantees, and cross-column dependency rules prior to database writes.",
        technicalDetail: "Streaming circuit-breaker architecture with automated quarantine staging.",
      },
      {
        title: "Zero-Code Columnar Transformation Synthesis",
        description:
          "Translates plain-English transformation directives into optimized SQL and Python Polars execution scripts.",
        technicalDetail: "Deterministic code generation with automated regression unit testing.",
      },
      {
        title: "Upstream Schema Drift Alerter",
        description:
          "Detects breaking changes in incoming API payloads or partner database schemas and generates non-destructive migration patches.",
        technicalDetail: "Schema diffing with automated semantic backwards-compatibility scoring.",
      },
    ],
    techStack: [
      "Python",
      "PostgreSQL",
      "Apache Arrow",
      "Polars",
      "TypeScript",
      "Vector Embeddings",
    ],
    cta: {
      label: "Explore Concept Whitepaper",
      href: "/contact?subject=datapilot-ai",
      variant: "primary",
      note: "Concept phase initiative. Inquire for early technical architecture collaboration.",
    },
    futureUpdates: [
      {
        phase: "Phase 1",
        title: "Semantic Schema Inference Proof of Concept",
        description: "Benchmark testing on high-variance enterprise CSV and JSON dataset dumps.",
        targetHorizon: "Concept Milestone",
        status: "planned",
      },
      {
        phase: "Phase 2",
        title: "PostgreSQL Migration & Ingestion Engine",
        description: "Direct streaming pipeline into partitioned relational and columnar stores.",
        targetHorizon: "Architecture Milestone",
        status: "planned",
      },
      {
        phase: "Phase 3",
        title: "Continuous Telemetry Sentinel Network",
        description: "Real-time drift detection hooks integrated directly into Kafka and Cloud Storage.",
        targetHorizon: "Expansion Milestone",
        status: "planned",
      },
    ],
    targetAudience: "Chief Data Officers, Data Engineers, Enterprise Analytics Teams",
    architecturalHighlights: [
      "Sub-Second Schema Identification",
      "Quarantine and Recovery Workflow",
      "ACID-Compliant PostgreSQL Pipeline",
      "Declarative Data Contract Modeling",
    ],
    relatedCapabilities: [
      { name: "Data Intelligence", slug: "data-intelligence" },
      { name: "Cloud & DevOps", slug: "cloud-devops" },
    ],
    published: true,
  },
  {
    id: "proofflow",
    name: "ProofFlow",
    slug: "proofflow",
    tagline: "AI-Powered Commercial Reconciliation, Contract Audit & Deliverable Verification",
    category: "Enterprise Software",
    stage: "future_concept",
    statusLabel: "Future Concept",
    stageBadgeVariant: "concept",
    problemStatement:
      "Enterprise vendor management and procurement teams may need to reconcile contracts with milestone deliverables, timesheets, and technical outputs. Discrepancies can lead to invoice disputes and audit challenges.",
    solution:
      "An automated commercial reconciliation platform that correlates contractual milestone clauses, code commits, delivery receipts, and invoices into an immutable verification chain, flagging discrepancies before financial disbursement.",
    description:
      "AI-powered project commercial reconciliation platform.",
    longOverview:
      "ProofFlow is a proposed enterprise platform designed to bridge technical deliverables with legal and commercial agreements. By ingesting master service agreements (MSAs), statements of work (SOWs), and correlating them against technical telemetry—such as Git pull requests, deployment logs, and verified work tickets—ProofFlow ensures commercial payments strictly mirror verified technical deliverables.",
    features: [
      {
        title: "Contract Milestone Parsing & Clause Extraction",
        description:
          "Extracts acceptance criteria, delivery dates, penalty clauses, and SLA thresholds from legal agreements into structured milestone models.",
        technicalDetail: "Proposed constrained extraction with review paths for uncertain fields.",
      },
      {
        title: "Technical Deliverable Correlator",
        description:
          "Validates software deliverables against contractual acceptance criteria by auditing Git commits, artifact builds, and deployment verification logs.",
        technicalDetail: "Cryptographic Git commit hash tracing and automated artifact verification.",
      },
      {
        title: "Commercial Discrepancy Sentinel",
        description:
          "Cross-references billed hours, contractor invoices, and vendor line items against verified technical milestones, flagging billing anomalies.",
        technicalDetail: "Deterministic mathematical reconciliation engine with comprehensive audit logging.",
      },
      {
        title: "Immutable Commercial Audit Ledger",
        description:
          "Maintains a tamper-evident audit trail of all verified milestones, approvals, and dispute resolutions for corporate compliance and financial audits.",
        technicalDetail: "Append-only cryptographic state chain storing milestone verification proofs.",
      },
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "Python",
      "PostgreSQL",
      "FastAPI",
      "Document AI",
      "Cryptographic State Ledger",
    ],
    cta: {
      label: "Register Early Concept Interest",
      href: "/contact?subject=proofflow",
      variant: "primary",
      note: "Proposed commercial software concept. Not yet available for commercial licensing.",
    },
    futureUpdates: [
      {
        phase: "Phase 1",
        title: "SOW Acceptance Criteria Extraction Model",
        description: "Fine-tuning domain models on technology service contracts and milestone schedules.",
        targetHorizon: "Concept Milestone",
        status: "planned",
      },
      {
        phase: "Phase 2",
        title: "Git & Jira Verification Connector",
        description: "Automated verification linking technical deliverables directly to commercial line items.",
        targetHorizon: "Alpha Architecture",
        status: "planned",
      },
      {
        phase: "Phase 3",
        title: "Enterprise ERP & Accounting Gateway",
        description: "Automated reconciliation feeds for SAP, NetSuite, and QuickBooks.",
        targetHorizon: "Future Roadmap",
        status: "planned",
      },
    ],
    targetAudience: "Chief Financial Officers, Enterprise Procurement Directors, Legal Operations",
    architecturalHighlights: [
      "Cryptographic Milestone Verification",
      "Evidence-Linked Contract Parsing",
      "Tamper-Evident Audit Ledger",
      "Enterprise Multi-Tenant Security",
    ],
    relatedCapabilities: [
      { name: "Software Engineering", slug: "software-engineering" },
      { name: "Automation & AI Agents", slug: "automation-ai-agents" },
    ],
    published: true,
  },
  {
    id: "ragproof",
    name: "RAGProof",
    slug: "ragproof",
    tagline: "Enterprise Generative AI Evaluation, Hallucination Benchmarking & Reliability Testing",
    category: "AI & ML",
    stage: "future_concept",
    statusLabel: "Future Concept",
    stageBadgeVariant: "concept",
    problemStatement:
      "Enterprise teams deploying Retrieval-Augmented Generation (RAG) and LLM applications face unpredictable hallucinations, context contamination, and retrieval failures in production, risking severe reputational and compliance damage.",
    solution:
      "A comprehensive evaluation and reliability testing suite that runs adversarial perturbations, evaluates factual recall, measures context adherence, and provides automated regression testing for generative AI pipelines.",
    description:
      "Enterprise generative AI evaluation and reliability testing platform.",
    longOverview:
      "RAGProof is conceptualized as the definitive reliability testing and continuous validation harness for enterprise generative AI systems. Operating similarly to automated unit test frameworks in traditional software engineering, RAGProof runs synthetic test matrices, adversarial prompt injections, and factual ground-truth tests across vector databases and language models, ensuring that generative pipelines meet strict enterprise SLAs before deployment.",
    features: [
      {
        title: "Automated Factual Faithfulness Scoring",
        description:
          "Quantifies the exact mathematical adherence of model responses to the retrieved source documentation, detecting subtle hallucinations.",
        technicalDetail: "NLI-based entailment modeling combined with token-level lexical overlap matrices.",
      },
      {
        title: "Adversarial Stress Testing & Prompt Injection Sentinels",
        description:
          "Generates thousands of edge-case queries, jailbreak attempts, and corrupted context chunks to evaluate pipeline resilience under attack.",
        technicalDetail: "Dynamic red-teaming generator simulating multi-turn conversational exploit vectors.",
      },
      {
        title: "Retrieval Quality & Relevancy Benchmarking",
        description:
          "Measures Mean Reciprocal Rank (MRR), Precision@K, and NDCG across embedding models and vector index partitions.",
        technicalDetail: "Deterministic retrieval evaluation metrics benchmarked across synthetic query distributions.",
      },
      {
        title: "CI/CD Model Regression Gate",
        description:
          "Integrates directly into software deployment pipelines, blocking model updates or vector database re-indexations if accuracy dips below threshold.",
        technicalDetail: "Lightweight CLI runner returning deterministic exit codes for GitHub Actions and GitLab CI.",
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Vector Indexing",
      "Statistical Benchmarking",
    ],
    cta: {
      label: "Inquire Regarding Benchmark R&D",
      href: "/contact?subject=ragproof",
      variant: "primary",
      note: "Early-stage algorithmic concept. Inquire to review our evaluation methodology.",
    },
    futureUpdates: [
      {
        phase: "Phase 1",
        title: "Factual Faithfulness Metric Formulation",
        description: "Benchmark testing across open-source legal and biomedical RAG corpora.",
        targetHorizon: "Concept Milestone",
        status: "planned",
      },
      {
        phase: "Phase 2",
        title: "Automated Synthetic Evaluation Generator",
        description: "Generating high-coverage test QA pairs directly from raw unstructured enterprise PDFs.",
        targetHorizon: "Prototype Phase",
        status: "planned",
      },
      {
        phase: "Phase 3",
        title: "Real-Time Production Hallucination Firewall",
        description: "Explore low-latency review of generated token streams before end-user delivery.",
        targetHorizon: "Production Horizon",
        status: "planned",
      },
    ],
    targetAudience: "Chief AI Officers, Enterprise ML Engineers, Compliance & Governance Officers",
    architecturalHighlights: [
      "Deterministic Mathematical Faithfulness Scoring",
      "Automated CI/CD Quality Gates",
      "Adversarial Robustness Testing",
      "Vector Indexing Performance Profiling",
    ],
    relatedCapabilities: [
      { name: "Artificial Intelligence & ML", slug: "artificial-intelligence-machine-learning" },
      { name: "Software Engineering", slug: "software-engineering" },
    ],
    published: true,
  },
];

// Helper Functions for Data-Driven Architecture (Only returning published: true)
export function getAllProducts(): ProductItem[] {
  return productsList.filter((product) => product.published);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsList.find((product) => product.slug === slug && product.published);
}

export function getProductsByCategory(category: ProductCategory | "all"): ProductItem[] {
  const publishedProducts = getAllProducts();
  if (category === "all") return publishedProducts;
  return publishedProducts.filter((product) => product.category === category);
}

export function getAdjacentProducts(slug: string): {
  prev: ProductItem;
  next: ProductItem;
} {
  const published = getAllProducts();
  const index = published.findIndex((p) => p.slug === slug);
  const total = published.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return {
    prev: published[prevIndex],
    next: published[nextIndex],
  };
}
