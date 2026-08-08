"use client";

import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="relative flex h-20 items-center border-b border-slate-200 bg-white px-8">

      {/* Logo */}
      <div className="flex w-56 shrink-0 items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          HackVerse
        </h1>
      </div>

      {/* Search */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="flex w-96 items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-5">

        <button className="cursor-pointer rounded-xl p-2 transition hover:bg-slate-100">
          <Bell
            size={22}
            className="text-slate-600"
          />
        </button>

        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-100">
          <UserCircle
            size={34}
            className="text-blue-600"
          />

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Shivam
            </p>

            <p className="text-xs text-slate-500">
              Organizer
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}