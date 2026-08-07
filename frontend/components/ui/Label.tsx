import { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  children: ReactNode;
};

export default function Label({
  children,
  required,
  className,
  ...props
}: Props) {
  return (
    <label
      {...props}
      className={cn(
        "mb-2 block text-sm font-semibold text-slate-700",
        className
      )}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">
          *
        </span>
      )}
    </label>
  );
}