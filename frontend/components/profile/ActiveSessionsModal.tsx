"use client";

import { X } from "lucide-react";
import {
  revokeSession,
  type ActiveSession,
} from "@/services/profile";

type ActiveSessionsModalProps = {
  open: boolean;
  onClose: () => void;
  sessions: ActiveSession[];
};

export default function ActiveSessionsModal({
  open,
  onClose,
  sessions,
}: ActiveSessionsModalProps) {
 async function handleRevoke(sessionId: number) {
  try {
    await revokeSession(Number(sessionId));

    window.location.reload();
  } catch (error) {
    console.error("Failed to revoke session:", error);
  }
}
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Active Sessions
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Devices currently signed in to your account.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg cursor-pointer p-2 text-slate-400 transition hover:bg-slate-100"
          >
            <X size={19} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto px-6 py-4">
          {sessions.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500">
              No active sessions found.
            </p>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => (
  <div
    key={session.id}
    className="rounded-lg border border-slate-200 p-4"
  >
    <p className="text-sm font-medium text-slate-800">
      {session.device || "Unknown device"}
    </p>
{session.is_current && (
  <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
    Current session
  </span>
)}

    <p className="mt-1 text-xs text-slate-500">
      IP: {session.ip_address || "Unknown"}
    </p>

    <p className="mt-1 text-xs text-slate-400">
      Last active:{" "}
      {new Date(
        session.last_active_at
      ).toLocaleString()}
    </p>

{!session.is_current && (
  <button
    type="button"
    onClick={() => handleRevoke(session.id)}
    className="mt-3 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
  >
    Revoke
  </button>
)}
  </div>
))}
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg cursor-pointer border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}