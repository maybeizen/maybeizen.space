import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const Button = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
    secondary:
      "bg-[#1a1a1a] text-[#e5e5e5] border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:border-red-500 hover:text-red-500",
    ghost: "text-[#a0a0a0] hover:text-[#e5e5e5] hover:bg-[#1a1a1a]",
    outline:
      "border border-[#1a1a1a] text-[#e5e5e5] hover:border-red-500 hover:text-red-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm rounded-md",
    md: "h-10 px-4 text-sm rounded-lg",
    lg: "h-12 px-6 text-base rounded-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
