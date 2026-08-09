"use client";

import { ArrowDownUp, Filter, RefreshCw, Search } from "lucide-react";

export default function TeamsToolbar() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search teams..."
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Status */}
        <button
          type="button"
          className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-slate-50"
        >
          <Filter size={17} />
          Status
        </button>

        {/* Sort */}
        <button
          type="button"
          className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-slate-50"
        >
          <ArrowDownUp size={17} />
          Sort
        </button>

        {/* Refresh */}
        <button
          type="button"
          className="flex h-12 items-center justify-center rounded-xl border border-slate-200 px-4 text-slate-600 transition hover:bg-slate-50"
        >
          <RefreshCw size={17} />
        </button>
      </div>
    </div>
  );
}