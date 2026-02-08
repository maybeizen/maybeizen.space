import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ButtonLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  to?: LinkProps["to"];
  href?: string;
}

const ButtonLink = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  to,
  href,
  ...props
}: ButtonLinkProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]";

  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600",
    secondary:
      "bg-[#1a1a1a] text-[#e5e5e5] border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:border-blue-400 hover:text-blue-400",
    ghost: "text-[#a0a0a0] hover:text-[#e5e5e5] hover:bg-[#1a1a1a]",
    outline:
      "border border-[#1a1a1a] text-[#e5e5e5] hover:border-blue-400 hover:text-blue-400",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm rounded-md",
    md: "h-10 px-4 text-sm rounded-lg",
    lg: "h-12 px-6 text-base rounded-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link
        className={combinedClassName}
        to={to}
        {...(props as Omit<LinkProps, "to">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <a className={combinedClassName} href={href} {...props}>
      {children}
    </a>
  );
};

export default ButtonLink;
