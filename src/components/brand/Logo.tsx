import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "icon";
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
  tone?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
  size = "md",
  withLink = true,
  tone = "dark",
}) => {
  const gradientPrefix = React.useId().replace(/:/g, "");
  // Dimension mapping for the SVG icon
  const iconDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 52, height: 52 },
  }[size];

  const iconSvg = (
    <svg
      width={iconDimensions.width}
      height={iconDimensions.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      role={variant === "icon" ? "img" : undefined}
      aria-label={variant === "icon" ? "Orlithix Technologies" : undefined}
      aria-hidden={variant !== "icon"}
    >
      <defs>
        {/* Primary Indigo to Teal linear gradient for the outer geometric ecosystem ring */}
        <linearGradient id={`${gradientPrefix}-ring`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#586BFF" />
          <stop offset="50%" stopColor="#4F86FF" />
          <stop offset="100%" stopColor="#40D6C5" />
        </linearGradient>

        {/* Upward Pathway Gradient */}
        <linearGradient id={`${gradientPrefix}-bridge`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#586BFF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#40D6C5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F4F6FF" />
        </linearGradient>

        {/* Core Node Glow */}
        <radialGradient id={`${gradientPrefix}-core-glow`} cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#40D6C5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#40D6C5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle outer tech circuit glow */}
      <circle cx="50" cy="50" r="46" stroke="#263650" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />

      {/* Outer Hexagonal-Octagonal Ecosystem 'O' ring */}
      <path
        d="M50 12 
           L78 24 
           L88 50 
           L78 76 
           L50 88 
           L22 76 
           L12 50 
           L22 24 Z"
        stroke={`url(#${gradientPrefix}-ring)`}
        strokeWidth="6"
        strokeLinejoin="round"
        fill="#080D1B"
        fillOpacity="0.75"
      />

      {/* Inner Ecosystem Chamber */}
      <polygon
        points="50,26 69,35 75,50 69,65 50,74 31,65 25,50 31,35"
        stroke="#263650"
        strokeWidth="2"
        fill="#10192B"
        fillOpacity="0.8"
      />

      {/* Upward Progress Pathway / Bridge Symbol */}
      {/* Anchored at bottom chamber, ascending through the center and projecting through the apex */}
      <path
        d="M40 76 L46 42 L38 42 L50 20 L62 42 L54 42 L60 76 Z"
        fill={`url(#${gradientPrefix}-bridge)`}
      />

      {/* Perspective Isometric Bridge Guideway Lines */}
      <line x1="45" y1="76" x2="48" y2="45" stroke="#40D6C5" strokeWidth="1.5" opacity="0.8" />
      <line x1="55" y1="76" x2="52" y2="45" stroke="#40D6C5" strokeWidth="1.5" opacity="0.8" />

      {/* Central Meridian Data Nodes */}
      <circle cx="50" cy="20" r="4" fill="#F4F6FF" />
      <circle cx="50" cy="20" r="8" fill={`url(#${gradientPrefix}-core-glow)`} />
      
      {/* Ecosystem Interconnected Vertex Nodes */}
      <circle cx="78" cy="24" r="3" fill="#40D6C5" />
      <circle cx="88" cy="50" r="3" fill="#586BFF" />
      <circle cx="78" cy="76" r="3" fill="#40D6C5" />
      <circle cx="22" cy="76" r="3" fill="#586BFF" />
      <circle cx="12" cy="50" r="3" fill="#40D6C5" />
      <circle cx="22" cy="24" r="3" fill="#586BFF" />
    </svg>
  );

  if (variant === "icon") {
    return withLink ? (
      <Link
        href="/"
        aria-label="Orlithix Technologies home"
        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5] ${className}`}
      >
        {iconSvg}
      </Link>
    ) : (
      <div className={`inline-flex items-center ${className}`}>{iconSvg}</div>
    );
  }

  const wordmarkColor = tone === "light" ? "text-[#080D1B]" : "text-[#F4F6FF]";
  const subtitleColor = tone === "light" ? "text-[#263650]" : "text-[#A5B2CC]";
  const textBlock = (
    <div className={`flex flex-col ${variant === "stacked" ? "items-center text-center mt-2" : "text-left"}`}>
      <div className={`flex items-baseline tracking-wider font-extrabold ${wordmarkColor}`}>
        <span
          className={`font-sans tracking-[0.18em] ${
            size === "sm" ? "text-base" : size === "md" ? "text-xl" : "text-2xl"
          }`}
        >
          ORLITHIX
        </span>
        <span className="ml-0.5 font-mono text-[#40D6C5]">.</span>
      </div>
      <span
        className={`-mt-0.5 font-mono font-medium uppercase tracking-[0.32em] ${subtitleColor} ${
          size === "sm" ? "text-[8px]" : size === "md" ? "text-[9px]" : "text-[11px]"
        }`}
      >
        TECHNOLOGIES
      </span>
    </div>
  );

  const content = (
    <div
      className={`inline-flex ${
        variant === "stacked" ? "flex-col items-center" : "flex-row items-center gap-3"
      } ${className}`}
    >
      {iconSvg}
      {textBlock}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-flex min-h-11 items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]">
        {content}
      </Link>
    );
  }

  return content;
};
