import { ShieldCheck } from "lucide-react";

const items = [
  ["Role", "Organizer"],
  ["Account Status", "Active"],
  ["Member Since", "Aug 6, 2026"],
  ["Last Login", "Aug 8, 2026, 10:30 AM"],
  ["Account ID", "HV-ORG-2026-0001"],
];

export default function AccountInformation() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ShieldCheck size={18} />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Account Information
        </h2>
      </div>

      <div>
        {items.map(([label, value], index) => (
          <div
            key={label}
            className={`flex items-center justify-between gap-6 py-3 text-sm ${
              index !== items.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <span className="text-slate-500">{label}</span>

            {label === "Role" ? (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                {value}
              </span>
            ) : label === "Account Status" ? (
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                {value}
              </span>
            ) : (
              <span className="text-right text-slate-700">
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}