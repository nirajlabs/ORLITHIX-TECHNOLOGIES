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
    "group inline-flex min-h-11 items-center justify-center rounded-lg border font-medium select-none transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40D6C5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1B] disabled:cursor-not-allowed disabled:opacity-50";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#586BFF] text-[#F4F6FF] border-[#586BFF] hover:bg-[#4d5fe8] hover:border-[#7180ff] shadow-sm shadow-[#080D1B]/20",
    secondary:
      "bg-[#10192B] text-[#F4F6FF] border-[#263650] hover:bg-[#121F36] hover:border-[#586BFF]/60",
    accent:
      "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/40 hover:bg-[#40D6C5]/15 hover:border-[#40D6C5]/70",
    outline:
      "bg-transparent text-[#F4F6FF] border-[#263650] hover:border-[#586BFF]/70 hover:bg-[#10192B]",
    ghost:
      "bg-transparent text-[#A5B2CC] border-transparent hover:text-[#F4F6FF] hover:bg-[#10192B]",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span aria-hidden="true">
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
