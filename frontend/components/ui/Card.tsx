import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 ease-out hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}