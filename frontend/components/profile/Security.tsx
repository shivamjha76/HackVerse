import { ShieldCheck } from "lucide-react";

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
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ShieldCheck size={18} />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Security
        </h2>
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
            <span className="text-sm text-slate-600">
              {item.label}
            </span>

            <div className="flex items-center gap-3">
              <span
                className={`text-sm ${
                  item.label === "Two-Factor Authentication"
                    ? "rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
                    : "text-slate-500"
                }`}
              >
                {item.value}
              </span>

              <button
                type="button"
                className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
              >
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}