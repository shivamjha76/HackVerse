"use client";

import { ShieldCheck } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import { useEffect, useState } from "react";
import { getActiveSessions } from "@/services/profile";
import ActiveSessionsModal from "./ActiveSessionsModal";

const securityItems = [
  {
    label: "Password",
    value: "••••••••",
    action: "Change",
  },
  {
    label: "Two-Factor Authentication",
    value: "Disabled",
    action: "Enable",
  },
  {
    label: "Active Sessions",
    value: "2 sessions",
    action: "Manage",
  },
  {
    label: "Login Activity",
    value: "View recent activity",
    action: "View",
  },
];

export default function Security() {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);
  const [activeSessions, setActiveSessions] = useState<any[]>([]);
  const [activeSessionsOpen, setActiveSessionsOpen] =
  useState(false);

useEffect(() => {
  async function loadActiveSessions() {
    try {
      const sessions = await getActiveSessions();
      setActiveSessions(sessions);
    } catch (error) {
      console.error(
        "Failed to load active sessions:",
        error
      );
    }
  }

  loadActiveSessions();
}, []);

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <ShieldCheck size={18} />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">Security</h2>
        </div>

        <div>
          {securityItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-between gap-4 py-2.5 ${
                index !== securityItems.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <span className="text-sm text-slate-600">{item.label}</span>

              <div className="flex items-center gap-3">
                <span
                  className={`text-sm ${
                    item.label === "Two-Factor Authentication"
                      ? "rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
                      : "text-slate-500"
                  }`}
                >
                  {item.label === "Active Sessions"
  ? `${activeSessions.length} ${
      activeSessions.length === 1
        ? "session"
        : "sessions"
    }`
  : item.value}
                </span>

                <button
                  type="button"
                  onClick={() => {
  if (item.label === "Password") {
    setChangePasswordOpen(true);
  }

  if (item.label === "Active Sessions") {
    setActiveSessionsOpen(true);
  }
}}
                  className="rounded-lg cursor-pointer border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <ChangePasswordModal
          open={changePasswordOpen}
          onClose={() => setChangePasswordOpen(false)}
          onSuccess={() => {
            setShowPasswordSuccess(true);

            setTimeout(() => {
              setShowPasswordSuccess(false);
            }, 3000);
          }}
        />
        <ActiveSessionsModal
          open={activeSessionsOpen}
          onClose={() => setActiveSessionsOpen(false)}
          sessions={activeSessions}
        />
      </div>

      {showPasswordSuccess && (
        <div className="fixed right-6 top-6 z-[60] flex items-center gap-3 rounded-lg border border-green-200 bg-white px-4 py-3 shadow-lg">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
            ✓
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Password changed successfully
            </p>

            <p className="text-xs text-slate-500">
              Your password has been updated.
            </p>
          </div>
        </div>
      )}
    </>
  );
}