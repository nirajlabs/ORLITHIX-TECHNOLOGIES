import { Capability } from "@/types";

export const capabilitiesData: Capability[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    divisionId: "ai-research",
    summary: "Applied machine learning architectures, neural models, and cognitive reasoning engines engineered for deterministic enterprise operations.",
    description: "Deep exploration of specialized transformer models, retrieval-augmented neural pipelines, and predictive algorithms tuned for mission-critical enterprise workflows.",
    architecturalPillars: [
      "Deterministic Inference Pipelines",
      "Retrieval-Augmented Architecture (RAG)",
      "Model Quantization & Edge Deployment",
      "Zero-Hallucination Guardrails",
    ],
    iconName: "Brain",
    benchmarkMetric: {
      label: "Architectural Focus",
      value: "Sub-100ms Inference",
    },
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    divisionId: "distributed-systems",
    summary: "High-concurrency microservices, modular monoliths, and resilient distributed architectures built with strict type safety and fault tolerance.",
    description: "End-to-end software engineering leveraging modern compile-time safe languages, asynchronous event brokers, and contract-driven API surfaces.",
    architecturalPillars: [
      "Distributed Event-Driven Architecture",
      "Strict Compile-Time Type Safety",
      "Fault-Tolerant Circuit Breakers",
      "Modular Domain-Driven Design (DDD)",
    ],
    iconName: "Code2",
    benchmarkMetric: {
      label: "Availability Target",
      value: "99.99% Reliability",
    },
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence",
    divisionId: "data-platforms",
    summary: "Real-time stream processing, unified telemetry fabrics, and analytical engines transforming raw enterprise signals into actionable intelligence.",
    description: "High-throughput data ingestion fabrics, real-time analytics pipelines, and semantic knowledge graphs for complex organizational intelligence.",
    architecturalPillars: [
      "Real-Time Telemetry & Log Fabrics",
      "Semantic Knowledge Graphs",
      "High-Throughput Stream Aggregation",
      "Columnar & Vector Indexing",
    ],
    iconName: "DatabaseZap",
    benchmarkMetric: {
      label: "Processing Model",
      value: "Sub-Second Ingestion",
    },
  },
  {
    id: "automation-agents",
    title: "Automation & AI Agents",
    divisionId: "autonomous-agents",
    summary: "Self-healing orchestration workflows and goal-driven autonomous agents designed to eliminate repetitive operational bottlenecks.",
    description: "Autonomous software agents capable of executing multi-stage engineering tasks, dynamic verification loops, and automated platform maintenance.",
    architecturalPillars: [
      "Multi-Agent Swarm Orchestration",
      "Goal-Oriented Planning State Machines",
      "Self-Healing Infrastructure Loops",
      "Human-in-the-Loop Governance",
    ],
    iconName: "Cpu",
    benchmarkMetric: {
      label: "Autonomy Level",
      value: "Governed Multi-Agent",
    },
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    divisionId: "cloud-infrastructure",
    summary: "Cloud-native infrastructure as code, immutable container platforms, and continuous automated delivery pipelines with zero downtime.",
    description: "Resilient multicloud infrastructure engineering with declarative provisioning, automated canary deployments, and proactive security policy enforcement.",
    architecturalPillars: [
      "Declarative Infrastructure as Code (IaC)",
      "Zero-Downtime Blue/Green Deployments",
      "Container Orchestration & Service Mesh",
      "Zero-Trust Network Microsegmentation",
    ],
    iconName: "CloudCog",
    benchmarkMetric: {
      label: "Deployment Model",
      value: "Zero-Downtime Canary",
    },
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    divisionId: "mobile-ecosystems",
    summary: "High-performance cross-platform mobile architectures engineered for seamless offline-first synchronization and native responsive fluidity.",
    description: "Enterprise and consumer mobile applications designed with local SQLite/vector persistence, bi-directional sync engines, and native UI responsiveness.",
    architecturalPillars: [
      "Offline-First Data Synchronization",
      "Cross-Platform Native Runtimes",
      "Biometric Hardware Security Hooks",
      "Optimistic UI State Updating",
    ],
    iconName: "Smartphone",
    benchmarkMetric: {
      label: "Rendering Target",
      value: "60-120 FPS Fluidity",
    },
  },
];
