export type CapabilityStatusType = "current" | "service" | "research";

export interface CapabilityUseCase {
  title: string;
  problem: string;
  solution: string;
  architecturalImpact: string;
}

export interface RelatedProductRef {
  name: string;
  slug: string;
  relation: string;
  statusLabel: string;
}

export interface CapabilityItem {
  id: string;
  name: string;
  slug: string;
  shortTagline: string;
  description: string;
  longOverview: string;
  icon: string;
  technologies: string[];
  useCases: CapabilityUseCase[];
  statusType: CapabilityStatusType;
  statusLabel: string;
  currentSkills: string[];
  availableServices: string[];
  futureResearch: string[];
  image?: string;
  relatedProducts: RelatedProductRef[];
  architecturalPillars: string[];
  benchmarkMetric?: {
    label: string;
    value: string;
  };
}

export const capabilitiesList: CapabilityItem[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    slug: "artificial-intelligence-machine-learning",
    shortTagline: "Applied Neural Systems & Deterministic Inference",
    description:
      "Engineering specialized machine learning architectures, neural models, generative AI pipelines, and computer vision runtimes engineered for deterministic enterprise operations.",
    longOverview:
      "Our Artificial Intelligence practice focuses on moving beyond stochastic, unverified AI experiments into high-assurance, mathematically sound enterprise solutions. We specialize in domain-adapted transformer models, real-time computer vision inference, predictive signal processing, and zero-hallucination retrieval architectures. By integrating strict schema validation with neural outputs, we construct mission-critical AI systems that organizations can trust in regulated environments.",
    icon: "Brain",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Natural Language Processing",
      "Generative AI",
      "Computer Vision",
      "Predictive Machine Learning",
    ],
    statusType: "current",
    statusLabel: "Active Engineering Core",
    currentSkills: [
      "Custom Neural Network Modeling & Fine-Tuning (PyTorch & TensorFlow)",
      "High-Dimensional Vector Embeddings & Hybrid Semantic Search",
      "Computer Vision Feature Extraction & Object Classification Pipelines",
      "Statistical Time-Series Predictive Forecasting & Anomaly Detection",
    ],
    availableServices: [
      "Enterprise Retrieval-Augmented Generation (RAG) Architecture Design",
      "Custom Domain NLP & Multi-Language Entity Extraction Systems",
      "Model Quantization, ONNX Conversion & Low-Latency Edge Deployment",
      "Predictive Analytics Engines for Operations & Telemetry Data",
    ],
    futureResearch: [
      "Deterministic Multi-Hop Neural Reasoning without Cognitive Drift",
      "Zero-Shot Multimodal Verification for Autonomous Agent Actions",
      "Self-Supervised Continual Learning on Edge Compute Nodes",
    ],
    useCases: [
      {
        title: "Deterministic Enterprise Document RAG",
        problem: "Large organizations struggle with hallucinated answers when querying thousands of complex policy and technical manuals.",
        solution: "Formulate a hybrid semantic-lexical retrieval pipeline paired with strict JSON schema verification to guarantee 100% cited answers.",
        architecturalImpact: "Eliminates factual drift while delivering sub-200ms document extraction latency across petabyte corpora.",
      },
      {
        title: "Real-Time Visual Defect Telemetry",
        problem: "Manufacturing and hardware assembly lines suffer from slow, manual visual inspection bottlenecks.",
        solution: "Deploy optimized computer vision models to edge compute clusters executing localized inference directly at the camera sensor level.",
        architecturalImpact: "Over 60 frames per second classification with zero cloud bandwidth transmission overhead.",
      },
      {
        title: "Predictive Equipment Failure Modeling",
        problem: "Unscheduled downtime in cloud server fleets and industrial machinery leads to catastrophic revenue loss.",
        solution: "Implement multivariate time-series LSTM models trained on high-frequency vibrational and thermal sensor telemetry.",
        architecturalImpact: "Predicts impending hardware failures up to 72 hours prior to physical breakdown.",
      },
    ],
    relatedProducts: [
      {
        name: "Software Handover Readiness AI",
        slug: "handover-readiness-ai",
        relation: "Neural AST verification engine",
        statusLabel: "Research Concept",
      },
      {
        name: "Neural Mesh Gateway",
        slug: "neural-mesh-gateway",
        relation: "Dynamic inference router & DLP filter",
        statusLabel: "Alpha Architecture",
      },
    ],
    architecturalPillars: [
      "Deterministic Inference Pipelines",
      "Retrieval-Augmented Architecture (RAG)",
      "Model Quantization & Edge Deployment",
      "Zero-Hallucination Guardrails",
    ],
    benchmarkMetric: {
      label: "Inference Latency",
      value: "Sub-100ms Target",
    },
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    slug: "software-engineering",
    shortTagline: "High-Concurrency Distributed Systems & Modern Web Platforms",
    description:
      "Constructing resilient distributed microservices, type-safe full-stack platforms, high-throughput backend APIs, and multi-tenant enterprise SaaS applications.",
    longOverview:
      "Software Engineering at Orlithix is anchored in foundational computer science principles: clean architecture, strict compile-time type guarantees, domain-driven design, and resilient distributed coordination. We leverage modern toolchains—including Next.js, React, TypeScript, Python, and FastAPI—to build maintainable software that scales predictably from prototype to high-concurrency enterprise workloads without compounding technical debt.",
    icon: "Code2",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Enterprise SaaS",
      "Backend Engineering",
    ],
    statusType: "current",
    statusLabel: "Active Engineering Core",
    currentSkills: [
      "Strict-Mode TypeScript Architecture across Client & Server Runtimes",
      "Modern Next.js App Router & React Server Component (RSC) Engineering",
      "Asynchronous High-Throughput REST & WebSocket APIs in FastAPI and Node",
      "Multi-Tenant Architecture with Granular Role-Based Access Control (RBAC)",
    ],
    availableServices: [
      "Full-Lifecycle Enterprise SaaS Platform Architecture & Buildout",
      "High-Performance API Modernization & Microservice Decomposition",
      "Design System Development & Accessible Web UI Engineering",
      "Distributed Database Sharding & Read-Replica Synchronization",
    ],
    futureResearch: [
      "Autonomous Compiler-Assisted Refactoring for Complex Microservices",
      "Formally Verified Multi-Party Contract Execution in Distributed State",
      "Zero-Overhead Memory-Safe Microkernel Architectures for Microservices",
    ],
    useCases: [
      {
        title: "Multi-Tenant Enterprise Workflow SaaS",
        problem: "Legacy corporate portals suffer from high latency, brittle monolithic codebases, and poor data boundary isolation.",
        solution: "Engineer a Next.js App Router frontend paired with a modular FastAPI microservices fabric utilizing row-level database tenancy.",
        architecturalImpact: "Instant page hydration, absolute organizational tenant isolation, and 99.99% uptime availability.",
      },
      {
        title: "High-Frequency Event Aggregation API",
        problem: "Financial and logistics systems experience severe API thread starvation under traffic spikes exceeding 100k requests/min.",
        solution: "Deploy non-blocking asynchronous FastAPI event gateways leveraging Redis in-memory pub/sub and distributed worker pools.",
        architecturalImpact: "Sustained sub-10ms response times under peak concurrency with zero dropped HTTP sockets.",
      },
      {
        title: "Contract-Driven Developer SDKs",
        problem: "Front-end and back-end engineering teams fall out of sync due to outdated API documentation and schema drift.",
        solution: "Automate end-to-end OpenAPI contract generation yielding type-safe TypeScript and Python client SDKs upon every Git commit.",
        architecturalImpact: "Eliminates API integration bugs at compile time before staging environments are populated.",
      },
    ],
    relatedProducts: [
      {
        name: "Software Handover Readiness AI",
        slug: "handover-readiness-ai",
        relation: "Static codebase analysis & drift verification",
        statusLabel: "Research Concept",
      },
    ],
    architecturalPillars: [
      "Distributed Event-Driven Architecture",
      "Strict Compile-Time Type Safety",
      "Fault-Tolerant Circuit Breakers",
      "Modular Domain-Driven Design (DDD)",
    ],
    benchmarkMetric: {
      label: "Availability Standard",
      value: "99.99% Target",
    },
  },
  {
    id: "data-intelligence",
    name: "Data Intelligence",
    slug: "data-intelligence",
    shortTagline: "Real-Time Telemetry Fabrics & High-Integrity Analytics",
    description:
      "Architecting scalable data engineering pipelines, robust PostgreSQL infrastructure, real-time analytics aggregation, data quality enforcement, and business intelligence systems.",
    longOverview:
      "Data is the foundation of institutional intelligence. Orlithix approaches data intelligence with strict data governance, zero-loss ingestion architectures, and advanced analytical modeling. We engineer resilient data pipelines that transform messy, distributed telemetry into clean, normalized knowledge graphs and real-time business intelligence dashboards, ensuring organizations base critical choices on verified facts.",
    icon: "DatabaseZap",
    technologies: [
      "Data Engineering",
      "PostgreSQL",
      "Data Analytics",
      "Data Quality",
      "Business Intelligence",
    ],
    statusType: "current",
    statusLabel: "Active Engineering Core",
    currentSkills: [
      "Advanced Relational Database Modeling & Index Optimization in PostgreSQL",
      "Automated ETL/ELT Batch & Streaming Pipeline Construction",
      "Declarative Data Quality Testing & Automated Schema Anomaly Alerts",
      "Analytical Aggregation, Dimensional Modeling & Star Schema Formulation",
    ],
    availableServices: [
      "Data Warehouse & Lakehouse Architecture Consulting",
      "PostgreSQL Performance Tuning, Partitioning & Connection Pooling",
      "Real-Time Operational Intelligence Dashboard Engineering",
      "Data Governance & Automated Compliance Auditing Infrastructure",
    ],
    futureResearch: [
      "Self-Repairing Semantic Data Fabrics with Neural Schema Reconciliation",
      "Continuous Differential Privacy Synthesizers for Sensitive Datasets",
      "Zero-Copy In-Memory Vector & Columnar Unified Indexing",
    ],
    useCases: [
      {
        title: "Unified Enterprise Telemetry Lake",
        problem: "Siloed data sources across ERP, CRM, and cloud services prevent unified visibility into enterprise operational efficiency.",
        solution: "Construct an automated ELT pipeline centralizing disparate data streams into partitioned PostgreSQL and columnar warehouses.",
        architecturalImpact: "Reduces cross-departmental reporting latency from 3 days to instantaneous real-time querying.",
      },
      {
        title: "Automated Data Quality & Schema Sentinel",
        problem: "Silent data corruption and upstream schema breaking changes contaminate downstream reporting and analytics.",
        solution: "Deploy continuous automated data contracts validating incoming rows against distribution bounds, nullability, and foreign key integrity.",
        architecturalImpact: "Catches bad data at the perimeter, alerting engineers before reports or AI models consume corrupted payloads.",
      },
      {
        title: "Predictive Supply Chain Intelligence",
        problem: "Inventory volatility causes costly stockouts and excessive carrying overhead.",
        solution: "Formulate dimensional analytics models combining historical sales data, supplier lead times, and external economic signals.",
        architecturalImpact: "Improves inventory forecasting accuracy by 34% with automated restocking trigger alerts.",
      },
    ],
    relatedProducts: [
      {
        name: "Orlithix Telemetry Fabric",
        slug: "orlithix-telemetry-fabric",
        relation: "Distributed event tracing & observability plane",
        statusLabel: "In Active Development",
      },
    ],
    architecturalPillars: [
      "Real-Time Stream Processing",
      "ACID-Compliant Relational Design",
      "Automated Data Quality Sentinels",
      "Unified Semantic Modeling",
    ],
    benchmarkMetric: {
      label: "Ingestion Latency",
      value: "Sub-Second Ingestion",
    },
  },
  {
    id: "automation-agents",
    name: "Automation & AI Agents",
    slug: "automation-ai-agents",
    shortTagline: "Multi-Agent Swarm Orchestration & Intelligent Process Automation",
    description:
      "Designing autonomous multi-agent orchestration frameworks, end-to-end workflow automation, intelligent document processing, and deep API integrations.",
    longOverview:
      "Automation at Orlithix transcends basic script execution. We build autonomous agent swarms that observe system states, reason over complex goals, execute multi-step engineering and business tasks, and self-verify the correctness of their output. By combining intelligent document processing, deep API interconnects, and strict human-in-the-loop governance, we eliminate operational toil across technical organizations.",
    icon: "Cpu",
    technologies: [
      "Workflow Automation",
      "AI Agents",
      "API Integrations",
      "Intelligent Document Processing",
    ],
    statusType: "service",
    statusLabel: "Available Architectural Service",
    currentSkills: [
      "State-Machine Governed Multi-Agent Task Delegation & Handover Protocols",
      "Intelligent Document Parsing, Table Extraction & Semantic Verification",
      "Bi-Directional Resilient Third-Party API Integration & Webhook Gateways",
      "Automated CI/CD Verification Loops with Auto-Remediation Hooks",
    ],
    availableServices: [
      "Enterprise Cognitive Workflow Automation Architecture",
      "Multi-Agent Coding & Documentation Handover Integration",
      "Automated Invoice, Contract & Compliance Document Extraction Pipelines",
      "Legacy Process Modernization via Intelligent API Middleware",
    ],
    futureResearch: [
      "Self-Evaluating Agent Swarms with Formal Verification Proofs",
      "Cross-Organization Cognitive Agent Federation & Cryptographic Handshakes",
      "Zero-Shot Robotic Process Task Synthesis from Natural Language Directives",
    ],
    useCases: [
      {
        title: "Intelligent Engineering Handover Orchestrator",
        problem: "Software teams lose weeks of productivity during project handovers due to unwritten architectural decisions and undocumented code.",
        solution: "Deploy an agentic system that inspects Git histories, parses AST trees, runs test harnesses, and compiles exhaustive handoff dossiers.",
        architecturalImpact: "Reduces onboarding and agent handover ramp-up time by over 70% with zero lost project context.",
      },
      {
        title: "Automated Contract Extraction & Validation",
        problem: "Legal and financial departments manually review thousands of scanned vendor contracts for liability exposure.",
        solution: "Deploy intelligent document processing agents that extract key indemnity clauses, verify against corporate policy, and flag deviations.",
        architecturalImpact: "Processes 500-page contracts in 45 seconds with 99.4% precision and complete human audit trails.",
      },
      {
        title: "Autonomous SRE Incident Remediation",
        problem: "Minor infrastructure faults wake on-call engineers at 3 AM to perform repetitive restart or scaling commands.",
        solution: "Implement an agentic supervisor that detects anomaly triggers, validates healthy replica states, and safely initiates verified runbooks.",
        architecturalImpact: "Resolves 65% of transient infrastructure incidents without human intervention.",
      },
    ],
    relatedProducts: [
      {
        name: "Software Handover Readiness AI",
        slug: "handover-readiness-ai",
        relation: "Autonomous handover verification agent",
        statusLabel: "Research Concept",
      },
    ],
    architecturalPillars: [
      "Multi-Agent Swarm Orchestration",
      "Goal-Oriented Planning State Machines",
      "Self-Healing Infrastructure Loops",
      "Human-in-the-Loop Governance",
    ],
    benchmarkMetric: {
      label: "Autonomy Level",
      value: "Governed Multi-Agent",
    },
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    shortTagline: "Cloud-Native Infrastructure, GitOps Automation & Observability",
    description:
      "Engineering resilient cloud architecture, automated CI/CD deployment pipelines, immutable container platforms, continuous monitoring, and zero-trust security perimeters.",
    longOverview:
      "Modern infrastructure must be treated as software. Our Cloud & DevOps practice implements declarative, version-controlled Infrastructure as Code (IaC), zero-downtime blue/green deployment workflows, comprehensive telemetry monitoring, and immutable container orchestration. We design cloud topologies that withstand catastrophic regional failures while empowering development teams to deploy code with speed and confidence.",
    icon: "CloudCog",
    technologies: [
      "Cloud Architecture",
      "Deployment",
      "CI/CD",
      "Monitoring",
    ],
    statusType: "service",
    statusLabel: "Available Architectural Service",
    currentSkills: [
      "Cloud Architecture & Multi-Region High-Availability Engineering",
      "Automated Blue/Green and Canary Deployment Pipelines via GitOps",
      "Comprehensive Observability: Distributed Tracing, Metrics & Log Aggregation",
      "Zero-Trust Cloud Network Segmentation & Immutable Container Infrastructure",
    ],
    availableServices: [
      "Cloud-Native Migration & Serverless Architecture Strategy",
      "Automated CI/CD Pipeline Construction with Automated Security Audits",
      "Kubernetes & Container Cluster Hardening and Sizing Optimization",
      "Site Reliability Engineering (SRE) & Incident Management Automation",
    ],
    futureResearch: [
      "Self-Optimizing Multicloud Arbitrage Scheduling based on Carbon and Cost",
      "Automated Chaos Engineering with Predictive Recovery Validation",
      "Micro-VM Cold-Start Optimization for Ephemeral Edge AI Workloads",
    ],
    useCases: [
      {
        title: "Zero-Downtime Global Multi-Region Deployment",
        problem: "Releasing new application versions requires scheduled maintenance windows that disrupt 24/7 global users.",
        solution: "Implement a declarative GitOps pipeline utilizing weighted DNS routing and canary pods to validate health before traffic promotion.",
        architecturalImpact: "Achieves seamless deployments with zero downtime, instant rollback capabilities, and zero customer impact.",
      },
      {
        title: "Unified Cloud Telemetry & Distributed Tracing",
        problem: "Microservice sprawl makes diagnosing latency spikes across dozens of interconnected services nearly impossible.",
        solution: "Deploy end-to-end OpenTelemetry instrumentation propagating trace IDs through every API request, worker, and database query.",
        architecturalImpact: "Pinpoints root-cause bottlenecks within seconds, cutting mean time to resolution (MTTR) by 80%.",
      },
      {
        title: "Immutable Infrastructure Security Automation",
        problem: "Configuration drift and unpatched cloud servers expose organizations to severe security vulnerabilities.",
        solution: "Construct immutable container images rebuilt daily with automated vulnerability scanning, deployed via locked-down IaC templates.",
        architecturalImpact: "Eliminates configuration drift and guarantees that zero unverified packages execute in production.",
      },
    ],
    relatedProducts: [
      {
        name: "Orlithix Telemetry Fabric",
        slug: "orlithix-telemetry-fabric",
        relation: "Real-time distributed observability runtime",
        statusLabel: "In Active Development",
      },
    ],
    architecturalPillars: [
      "Declarative Infrastructure as Code (IaC)",
      "Zero-Downtime Blue/Green Deployments",
      "Container Orchestration & Service Mesh",
      "Zero-Trust Network Microsegmentation",
    ],
    benchmarkMetric: {
      label: "Deployment Reliability",
      value: "Zero-Downtime Canary",
    },
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    slug: "mobile-development",
    shortTagline: "Cross-Platform Native Engineering & Offline-First Runtimes",
    description:
      "Developing high-performance Android, iOS, Flutter, and cross-platform mobile applications engineered for native responsiveness, offline-first synchronization, and hardware security.",
    longOverview:
      "Mobile devices are the primary interactive touchpoint for modern enterprise field workers and end users alike. Our Mobile Development engineering covers Android, iOS, Flutter, and cross-platform native architectures. We emphasize local SQLite and vector persistence, resilient bi-directional background synchronization, biometric security integration, and buttery-smooth 60–120 FPS interface fluidity.",
    icon: "Smartphone",
    technologies: [
      "Android",
      "iOS",
      "Flutter",
      "Cross-platform Applications",
    ],
    statusType: "research",
    statusLabel: "Active R&D Expansion",
    currentSkills: [
      "Cross-Platform Native Application Engineering with Flutter & React Native",
      "Native iOS (Swift) & Android (Kotlin) Core Runtime Integration",
      "Offline-First Local Data Storage with Optimistic UI State Updates",
      "Hardware-Level Biometric Authentication & Secure Enclave Cryptography",
    ],
    availableServices: [
      "Cross-Platform Enterprise Field & Consumer Mobile App Development",
      "Offline-First Synchronization Architecture for Remote Environments",
      "Mobile Performance Auditing, Battery Profiling & Memory Leak Optimization",
      "Secure Mobile App Hardening & App Store Compliance Guidance",
    ],
    futureResearch: [
      "On-Device Quantized SLM (Small Language Model) Execution for Mobile Apps",
      "Peer-to-Peer Mesh Synchronization without Central Internet Connectivity",
      "Biometric Continuous Behavioral Verification for Ultra-Secure Mobile Sessions",
    ],
    useCases: [
      {
        title: "Offline-First Enterprise Field Logistics App",
        problem: "Field technicians operating in remote or underground sites cannot access cloud servers to complete mission-critical inspection forms.",
        solution: "Engineer a Flutter cross-platform mobile client with local SQLite and delta-sync engines that queue operations and sync upon reconnection.",
        architecturalImpact: "Guarantees 100% data capture without data loss, regardless of intermittent mobile network drops.",
      },
      {
        title: "High-Security Mobile Executive Portal",
        problem: "Corporate leadership requires mobile access to sensitive operational approvals without risking credential theft or interception.",
        solution: "Implement hardware Secure Enclave biometric validation combined with dynamic TLS certificate pinning and ephemeral session memory.",
        architecturalImpact: "Provides uncompromised cryptographic protection against man-in-the-middle attacks and rooted device extraction.",
      },
      {
        title: "High-FPS Real-Time Telemetry Dashboard",
        problem: "Mobile dashboards displaying high-frequency IoT streaming telemetry frequently freeze and drop frames.",
        solution: "Leverage native Flutter rendering threads paired with efficient binary data decoding and GPU-accelerated chart components.",
        architecturalImpact: "Smooth, continuous 120 FPS performance while processing hundreds of incoming sensor updates per second.",
      },
    ],
    relatedProducts: [
      {
        name: "Software Handover Readiness AI",
        slug: "handover-readiness-ai",
        relation: "Mobile code repository inspection",
        statusLabel: "Research Concept",
      },
    ],
    architecturalPillars: [
      "Offline-First Data Synchronization",
      "Cross-Platform Native Runtimes",
      "Biometric Hardware Security Hooks",
      "Optimistic UI State Updating",
    ],
    benchmarkMetric: {
      label: "Rendering Fluidity",
      value: "60-120 FPS Target",
    },
  },
];

// Helper Functions for Data-Driven Architecture
export function getAllCapabilities(): CapabilityItem[] {
  return capabilitiesList;
}

export function getCapabilityBySlug(slug: string): CapabilityItem | undefined {
  return capabilitiesList.find((cap) => cap.slug === slug);
}

export function getCapabilitiesByStatus(status: CapabilityStatusType): CapabilityItem[] {
  return capabilitiesList.filter((cap) => cap.statusType === status);
}

export function getAdjacentCapabilities(slug: string): {
  prev: CapabilityItem;
  next: CapabilityItem;
} {
  const index = capabilitiesList.findIndex((cap) => cap.slug === slug);
  const total = capabilitiesList.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return {
    prev: capabilitiesList[prevIndex],
    next: capabilitiesList[nextIndex],
  };
}
