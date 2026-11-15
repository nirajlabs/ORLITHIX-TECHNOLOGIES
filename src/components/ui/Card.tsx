import React from "react";

interface CardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  hoverEffect?: boolean;
  glow?: "none" | "primary" | "accent";
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  id,
  className = "",
  hoverEffect = true,
  glow = "none",
  onClick,
}) => {
  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:border-[#586BFF]/50 hover:bg-[#15233c] hover:shadow-[0_8px_30px_rgba(88,107,255,0.08)] hover:-translate-y-1"
    : "";

  const glowStyles = {
    none: "",
    primary: "shadow-[0_0_25px_rgba(88,107,255,0.12)] border-[#586BFF]/40",
    accent: "shadow-[0_0_25px_rgba(64,214,197,0.12)] border-[#40D6C5]/40",
  }[glow];

  return (
    <div
      onClick={onClick}
      className={`relative bg-[#121F36] border border-[#263650] rounded-xl p-6 sm:p-7 overflow-hidden ${hoverStyles} ${glowStyles} ${className}`}
    >
      {/* Subtle top edge border gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/30 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
