import { ArrowLeft, Users } from "lucide-react";

import TeamActionsMenu from "./TeamActionsMenu";

export default function TeamDetailsHeader() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Users size={22} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900">
                Code Warriors
              </h1>

              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                Active
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              HackVerse 2026
            </p>
          </div>
        </div>

        {/* Team Actions */}
        <TeamActionsMenu />
      </div>
    </div>
  );
}