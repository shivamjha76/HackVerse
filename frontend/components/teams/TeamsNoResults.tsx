import { Search, X } from "lucide-react";

export default function TeamsNoResults() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <Search size={24} />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-slate-900">
        No teams found
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        We couldn't find any teams matching your search or selected filters.
      </p>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
      >
        <X size={16} />
        Clear Filters
      </button>
    </div>
  );
}