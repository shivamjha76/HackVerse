import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors duration-200",
        "hover:bg-blue-700",
        "cursor-pointer",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}