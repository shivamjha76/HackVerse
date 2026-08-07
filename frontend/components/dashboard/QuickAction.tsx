import { ReactNode } from "react";

type QuickActionProps = {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
};

export default function QuickAction({
  title,
  description,
  icon,
  onClick,
}: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>
    </button>
  );
}