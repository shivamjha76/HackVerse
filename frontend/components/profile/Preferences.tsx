import { Bell, Settings2 } from "lucide-react";

export default function Preferences() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Settings2 size={18} />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">
            Preferences
          </h2>
        </div>

        <button
          type="button"
          className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Edit
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between border-b border-slate-100 py-2.5">
          <div>
            <p className="text-sm font-medium text-slate-700">
              Email Notifications
            </p>
            <p className="text-xs text-slate-400">
              Receive email updates and important alerts.
            </p>
          </div>

          <div className="flex h-5 w-9 items-center rounded-full bg-blue-600 p-0.5">
            <div className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-slate-100 py-2.5">
          <div>
            <p className="text-sm font-medium text-slate-700">
              Hackathon Notifications
            </p>
            <p className="text-xs text-slate-400">
              Get notified about hackathons and events.
            </p>
          </div>

          <div className="flex h-5 w-9 items-center rounded-full bg-blue-600 p-0.5">
            <div className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-slate-100 py-2.5">
          <div>
            <p className="text-sm font-medium text-slate-700">
              Marketing Notifications
            </p>
            <p className="text-xs text-slate-400">
              Receive updates about new features.
            </p>
          </div>

          <div className="flex h-5 w-9 items-center rounded-full bg-slate-200 p-0.5">
            <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        <div className="flex items-center justify-between py-2.5">
          <span className="text-sm text-slate-600">
            Theme
          </span>

          <select className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 outline-none">
            <option>System</option>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}