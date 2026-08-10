"use client";

import { X } from "lucide-react";
import { type LoginActivity } from "@/services/profile";

type LoginActivityModalProps = {
  open: boolean;
  onClose: () => void;
  activities: LoginActivity[];
};

export default function LoginActivityModal({
  open,
  onClose,
  activities,
}: LoginActivityModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Login Activity
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Recent login activity on your account.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100"
          >
            <X size={19} />
          </button>
        </div>

        {/* Activity List */}
        <div className="max-h-80 overflow-y-auto px-6 py-4">
          {activities.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500">
              No login activity found.
            </p>
          ) : (
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {activity.device || "Unknown device"}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        IP:{" "}
                        {activity.ip_address || "Unknown"}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {new Date(
                          activity.login_at
                        ).toLocaleString()}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        activity.success
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {activity.success
                        ? "Successful"
                        : "Failed"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}