import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}