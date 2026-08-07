import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle?: string;
};

export default function InfoCard({
  icon,
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-slate-100 p-3">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <h3 className="mt-1 text-xl font-bold text-slate-900">
          {value}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}