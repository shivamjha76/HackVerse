"use client";

import { Users, X } from "lucide-react";

type CreateTeamModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateTeamModal({
  open,
  onClose,
}: CreateTeamModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Users size={18} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Create Team
              </h2>

              <p className="text-xs text-slate-400">
                Create a team for your hackathon.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 px-5 py-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Team Name
            </label>

            <input
              type="text"
              placeholder="Enter team name"
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={3}
              placeholder="Describe your team..."
              className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Hackathon
            </label>

            <select className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
              <option>HackVerse 2026</option>
              <option>TechSprint 2026</option>
              <option>Design Hack 2026</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Maximum Members
            </label>

            <select className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
              <option>2 Members</option>
              <option>3 Members</option>
              <option>4 Members</option>
              <option>5 Members</option>
              <option>6 Members</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Create Team
          </button>
        </div>
      </div>
    </div>
  );
}