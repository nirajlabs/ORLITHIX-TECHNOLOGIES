export interface Founder {
  name: string;
  designation: string;
  leadershipRole: string;
  image: string;
  imageAlt: string;
  description: string;
  specialisations: string[];
}

export const founders: Founder[] = [
  {
    name: "Vishnu Vardhan",
    designation: "Founder & CEO",
    leadershipRole: "Investigator of Orlithix Technologies",
    image: "/images/vishnu.jpeg",
    imageAlt: "Vishnu Vardhan wearing a blue shirt and grey blazer",
    description:
      "An innovation-driven AI/ML enthusiast focused on investigation, technical exploration and discovering new possibilities in intelligent technologies. Vishnu contributes through research, experimentation and innovative thinking at Orlithix Technologies.",
    specialisations: [
      "AI/ML Engineer",
      "Innovator",
      "Experimenter",
      "Research Specialist",
    ],
  },
  {
    name: "Niraj Khawash",
    designation: "Co-Founder & Developer",
    leadershipRole: "Developer of Orlithix Technologies",
    image: "/images/niraj.png",
    imageAlt: "Niraj Khawash wearing a dark green polo shirt",
    description:
      "An AI/ML-focused technology enthusiast driven by research, experimentation and the development of intelligent software solutions. Niraj contributes to the technical direction, product development and coordination of innovation initiatives at Orlithix Technologies.",
    specialisations: [
      "AI/ML Engineer",
      "Research Specialist",
      "Experimenter",
      "Team Coordinator",
      "Product Manager",
    ],
  }
] as const;
