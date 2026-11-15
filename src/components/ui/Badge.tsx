import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "concept" | "development" | "alpha" | "neutral" | "accent";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  dot = true,
  className = "",
}) => {
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1.5 tracking-wider",
    md: "text-xs px-3 py-1 gap-2 tracking-widest",
  }[size];

  const variantStyles = {
    concept: {
      wrap: "bg-[#40D6C5]/10 text-[#40D6C5] border border-[#40D6C5]/30 shadow-[0_0_12px_rgba(64,214,197,0.12)]",
      dot: "bg-[#40D6C5] shadow-[0_0_6px_#40D6C5]",
    },
    development: {
      wrap: "bg-[#586BFF]/10 text-[#7888FF] border border-[#586BFF]/30 shadow-[0_0_12px_rgba(88,107,255,0.15)]",
      dot: "bg-[#586BFF] shadow-[0_0_6px_#586BFF]",
    },
    alpha: {
      wrap: "bg-purple-500/10 text-purple-300 border border-purple-500/30",
      dot: "bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]",
    },
    accent: {
      wrap: "bg-[#40D6C5]/15 text-[#40D6C5] border border-[#40D6C5]/40",
      dot: "bg-[#40D6C5]",
    },
    neutral: {
      wrap: "bg-[#10192B] text-[#A5B2CC] border border-[#263650]",
      dot: "bg-[#A5B2CC]",
    },
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono uppercase font-semibold rounded-full select-none ${sizeStyles} ${variantStyles.wrap} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse ${variantStyles.dot}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
