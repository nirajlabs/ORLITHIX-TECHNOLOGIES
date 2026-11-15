import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#586BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1B] disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#586BFF] text-[#F4F6FF] hover:bg-[#4a5ceb] shadow-[0_0_24px_rgba(88,107,255,0.25)] hover:shadow-[0_0_32px_rgba(88,107,255,0.4)] active:scale-[0.98] border border-[#586BFF]/30",
    secondary:
      "bg-[#10192B] text-[#F4F6FF] hover:bg-[#182642] border border-[#263650] hover:border-[#586BFF]/40 active:scale-[0.98]",
    accent:
      "bg-[#40D6C5]/10 text-[#40D6C5] border border-[#40D6C5]/30 hover:bg-[#40D6C5]/20 hover:border-[#40D6C5]/60 shadow-[0_0_20px_rgba(64,214,197,0.15)] active:scale-[0.98]",
    outline:
      "bg-transparent text-[#F4F6FF] border border-[#263650] hover:border-[#586BFF] hover:text-[#586BFF] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#A5B2CC] hover:text-[#F4F6FF] hover:bg-[#10192B]/60",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
