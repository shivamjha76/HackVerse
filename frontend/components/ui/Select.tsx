import {
  SelectHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type Props =
  SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  className,
  children,
  ...props
}: Props) {
  return (
    <select
      {...props}
      className={cn(
        "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-all duration-200",
        "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
        className
      )}
    >
      {children}
    </select>
  );
}