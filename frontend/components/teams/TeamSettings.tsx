import {
  Bell,
  Lock,
  Settings,
  Shield,
  Trash2,
} from "lucide-react";

export default function TeamSettings() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Settings size={18} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Team Settings
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Manage your team's preferences and permissions.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-slate-400" />

            <div>
              <p className="text-sm font-medium text-slate-700">
                Team Notifications
              </p>

              <p className="text-xs text-slate-400">
                Receive updates about team activity.
              </p>
            </div>
          </div>

          <div className="flex h-5 w-9 items-center rounded-full bg-blue-600 p-0.5">
            <div className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <Shield size={18} className="text-slate-400" />

            <div>
              <p className="text-sm font-medium text-slate-700">
                Member Permissions
              </p>

              <p className="text-xs text-slate-400">
                Control what team members can do.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Manage
          </button>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <Lock size={18} className="text-slate-400" />

            <div>
              <p className="text-sm font-medium text-slate-700">
                Team Visibility
              </p>

              <p className="text-xs text-slate-400">
                Control who can see your team.
              </p>
            </div>
          </div>

          <select className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 outline-none">
            <option>Members only</option>
            <option>Hackathon participants</option>
            <option>Everyone</option>
          </select>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between rounded-lg border border-red-100 bg-red-50/50 p-4">
          <div className="flex items-center gap-3">
            <Trash2 size={18} className="text-red-500" />

            <div>
              <p className="text-sm font-medium text-red-600">
                Delete Team
              </p>

              <p className="text-xs text-red-400">
                Permanently delete this team and its data.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}