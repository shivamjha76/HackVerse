import { AlertTriangle, LogOut, Trash2 } from "lucide-react";

export default function DangerZone() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
          <AlertTriangle size={18} />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Danger Zone
        </h2>
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 py-3">
        <div>
          <p className="text-sm font-medium text-slate-700">
            Logout
          </p>

          <p className="text-xs text-slate-400">
            Sign out from your account on this device.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-red-500 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>

      <div className="flex items-center justify-between pt-3">
        <div>
          <p className="text-sm font-medium text-slate-700">
            Delete Account
          </p>

          <p className="text-xs text-slate-400">
            This action is permanent and cannot be undone.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-300"
        >
          <Trash2 size={15} />
          Coming Soon
        </button>
      </div>
    </div>
  );
}