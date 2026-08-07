import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className,
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-32 w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none transition resize-none",
        "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
        className
      )}
    />
  );
}