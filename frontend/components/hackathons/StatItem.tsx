import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  iconBg: string;
  iconColor: string;
};

export default function StatItem({
  icon,
  title,
  value,
  subtitle,
  iconBg,
  iconColor,
}: Props) {
  return (
    <div className="flex items-start gap-3">

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h3 className="mt-1 text-xl font-bold text-slate-900">
          {value}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

    </div>
  );
}