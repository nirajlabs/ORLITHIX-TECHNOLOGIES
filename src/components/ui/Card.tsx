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
    ? "transition-[background-color,border-color,box-shadow] duration-200 hover:border-[#586BFF]/50 hover:bg-[#15233c] hover:shadow-md hover:shadow-[#080D1B]/25"
    : "";

  const glowStyles = {
    none: "",
    primary: "border-[#586BFF]/40",
    accent: "border-[#40D6C5]/40",
  }[glow];

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl border border-[#263650] bg-[#121F36] p-5 sm:p-6 ${hoverStyles} ${glowStyles} ${className}`}
    >
      {children}
    </div>
  );
};
