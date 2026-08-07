import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  iconBg: string;
  iconColor: string;
};

export default function StatCard({
  icon,
  title,
  value,
  iconBg,
  iconColor,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold text-slate-900">
        {value}
      </h3>

    </div>
  );
}