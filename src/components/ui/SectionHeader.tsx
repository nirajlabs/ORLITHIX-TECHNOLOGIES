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
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badgeText && (
        <Badge variant={badgeVariant} className="mb-4">
          {badgeText}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F6FF] max-w-3xl leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#A5B2CC] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
