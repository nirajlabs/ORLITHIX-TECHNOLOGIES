"use client";

import React, { useState } from "react";
import { Brain, Cpu, Database, Network, ShieldCheck, Activity } from "lucide-react";

export const TechVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("kernel");

  const nodes = [
    {
      id: "ai-engine",
      title: "Neural Inference Engine",
      category: "Cognitive Layer",
      latency: "4.2ms",
      throughput: "24.8k ops/s",
      icon: Brain,
      x: "18%",
      y: "28%",
    },
    {
      id: "kernel",
      title: "Orlithix Core Nexus",
      category: "Parent Architecture",
      latency: "0.8ms",
      throughput: "128.4k ops/s",
      icon: Cpu,
      x: "50%",
      y: "50%",
    },
    {
      id: "telemetry",
      title: "Unified Telemetry Fabric",
      category: "Data Plane",
      latency: "1.1ms",
      throughput: "94.2k ops/s",
      icon: Database,
      x: "82%",
      y: "28%",
    },
    {
      id: "orchestrator",
      title: "Agent Swarm Coordinator",
      category: "Autonomous Systems",
      latency: "12.4ms",
      throughput: "8.6k ops/s",
      icon: Network,
      x: "24%",
      y: "74%",
    },
    {
      id: "zero-trust",
      title: "Cryptographic Gateways",
      category: "Security Boundary",
      latency: "0.3ms",
      throughput: "150.0k ops/s",
      icon: ShieldCheck,
      x: "76%",
      y: "74%",
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 rounded-2xl border border-[#263650] bg-[#0c1424] p-4 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#586BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#40D6C5]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#263650] pb-4 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#263650]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#263650]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#586BFF]/60" />
          </div>
          <span className="font-mono text-xs text-[#A5B2CC] tracking-wider uppercase">
            ORLITHIX // SYSTEM TOPOLOGY & DISTRIBUTED FABRIC
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-[#A5B2CC]">
          <span className="flex items-center gap-1.5 text-[#40D6C5]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            SYNCHRONIZED
          </span>
          <span className="hidden sm:inline border-l border-[#263650] pl-3">
            NODES: 5/5 ONLINE
          </span>
        </div>
      </div>

      {/* Interactive Topology Visual Surface */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl bg-[#080D1B]/90 border border-[#263650]/60 overflow-hidden">
        {/* Vector Grid Background */}
        <div className="absolute inset-0 tech-grid-pattern opacity-40" />

        {/* Dynamic Bus Interconnects (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="busGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#586BFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#40D6C5" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="busGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#40D6C5" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#586BFF" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Central concentric orbital radar guides */}
          <circle cx="50%" cy="50%" r="90" stroke="#263650" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.6" />
          <circle cx="50%" cy="50%" r="160" stroke="#263650" strokeWidth="1" strokeDasharray="3 8" fill="none" opacity="0.4" />

          {/* Interconnect lines from center (50%, 50%) to satellites */}
          {/* To AI Engine (18%, 28%) */}
          <line x1="50%" y1="50%" x2="18%" y2="28%" stroke="url(#busGrad1)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          {/* To Telemetry (82%, 28%) */}
          <line x1="50%" y1="50%" x2="82%" y2="28%" stroke="url(#busGrad2)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          {/* To Swarm Coordinator (24%, 74%) */}
          <line x1="50%" y1="50%" x2="24%" y2="74%" stroke="url(#busGrad1)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          {/* To Zero-Trust Gateway (76%, 74%) */}
          <line x1="50%" y1="50%" x2="76%" y2="74%" stroke="url(#busGrad2)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />

          {/* Peripheral bridge connecting top nodes */}
          <path d="M 180 120 Q 500 50 820 120" stroke="#263650" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>

        {/* Interactive Node Anchors */}
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          const isCenter = node.id === "kernel";
          const NodeIcon = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              style={{ left: node.x, top: node.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all duration-300 focus:outline-none z-10 ${
                isSelected ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`relative flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isCenter
                    ? "w-14 h-14 sm:w-16 sm:h-16 bg-[#10192B] border-2 border-[#586BFF] shadow-[0_0_25px_rgba(88,107,255,0.4)]"
                    : isSelected
                    ? "w-11 h-11 sm:w-12 sm:h-12 bg-[#121F36] border-2 border-[#40D6C5] shadow-[0_0_20px_rgba(64,214,197,0.3)]"
                    : "w-11 h-11 sm:w-12 sm:h-12 bg-[#10192B]/90 border border-[#263650] hover:border-[#586BFF]/60"
                }`}
              >
                <NodeIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
                    isSelected ? "text-[#40D6C5]" : "text-[#F4F6FF]/80 group-hover:text-[#586BFF]"
                  }`}
                />
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#40D6C5] animate-ping" />
                )}
              </div>

              {/* Node Label Below */}
              <span
                className={`mt-2 font-mono text-[10px] sm:text-xs tracking-wider whitespace-nowrap px-2 py-0.5 rounded border transition-colors ${
                  isSelected
                    ? "bg-[#121F36] text-[#F4F6FF] border-[#40D6C5]/50"
                    : "bg-[#080D1B]/80 text-[#A5B2CC] border-[#263650] group-hover:text-[#F4F6FF]"
                }`}
              >
                {node.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Telemetry Inspector Bar */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#10192B] border border-[#263650] rounded-xl p-4 text-xs font-mono">
        <div className="flex flex-col">
          <span className="text-[#A5B2CC]/70 uppercase tracking-wider text-[10px]">
            Selected Nexus Layer
          </span>
          <span className="text-[#F4F6FF] font-semibold text-sm mt-0.5">
            {activeNodeData.title}
          </span>
          <span className="text-[#40D6C5] text-[11px] mt-0.5">
            {activeNodeData.category}
          </span>
        </div>

        <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-[#263650] pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[#A5B2CC]/70 uppercase tracking-wider text-[10px]">
            Execution Benchmark
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-[#F4F6FF] font-semibold text-sm">
              {activeNodeData.latency}
            </span>
            <span className="text-[#A5B2CC] text-[11px]">kernel transit</span>
          </div>
          <span className="text-[#7888FF] text-[11px] mt-0.5">
            Deterministic Sync
          </span>
        </div>

        <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-[#263650] pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[#A5B2CC]/70 uppercase tracking-wider text-[10px]">
            Throughput Target
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-[#F4F6FF] font-semibold text-sm">
              {activeNodeData.throughput}
            </span>
            <span className="text-[#A5B2CC] text-[11px]">telemetry events</span>
          </div>
          <span className="text-[#40D6C5] text-[11px] mt-0.5">
            Non-Blocking Bus
          </span>
        </div>
      </div>
    </div>
  );
};
