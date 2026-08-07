import { Trophy } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
};

export default function EmptyState({
  title,
  description,
  buttonText,
  onClick,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Trophy
          size={36}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-8 cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </div>
  );
}