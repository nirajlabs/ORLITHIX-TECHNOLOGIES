import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: "concept" | "development" | "alpha" | "neutral" | "accent";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = "neutral",
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex flex-col sm:mb-12 ${alignmentClass} ${className}`}>
      {badgeText && (
        <Badge variant={badgeVariant} className="mb-4">
          {badgeText}
        </Badge>
      )}
      <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#F4F6FF] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A5B2CC] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};
