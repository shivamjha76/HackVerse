import { Plus, Users } from "lucide-react";

export default function TeamsEmptyState() {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Users size={24} />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-slate-900">
        No teams yet
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        Create your first team and start collaborating with other members.
      </p>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <Plus size={17} />
        Create Team
      </button>
    </div>
  );
}