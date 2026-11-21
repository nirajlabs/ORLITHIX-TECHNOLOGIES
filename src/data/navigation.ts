import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products", badge: "R&D" },
];

export const footerNavigation = {
  divisions: [
    { label: "Artificial Intelligence & ML", href: "/capabilities/artificial-intelligence-machine-learning" },
    { label: "Software Engineering", href: "/capabilities/software-engineering" },
    { label: "Data Intelligence", href: "/capabilities/data-intelligence" },
    { label: "Automation & AI Agents", href: "/capabilities/automation-ai-agents" },
    { label: "Cloud & DevOps", href: "/capabilities/cloud-devops" },
    { label: "Mobile Development", href: "/capabilities/mobile-development" },
  ],
  company: [
    { label: "About Orlithix", href: "/about" },
    { label: "Company Introduction", href: "/about#introduction" },
    { label: "Architectural Principles", href: "/about#tenets" },
    { label: "Innovation Lab", href: "/#innovation-lab" },
    { label: "Contact & Collaboration", href: "/contact" },
  ],
};
