import {Globe, Link2 } from "lucide-react";

const accounts = [
  {
    name: "GitHub",
    icon: Link2,
    status: "Connected",
  },
  {
    name: "LinkedIn",
    icon: Link2,
    status: "Connected",
  },
  {
    name: "Twitter / X",
    icon: Link2,
    status: "Not connected",
  },
  {
    name: "Website",
    icon: Globe,
    status: "Not connected",
  },
];

export default function SocialAccounts() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Link2 size={18} />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">
            Social Accounts
          </h2>
        </div>

        <button className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50">
          Manage
        </button>
      </div>

      <div>
        {accounts.map(({ name, icon: Icon, status }, index) => (
          <div
            key={name}
            className={`flex items-center justify-between py-2.5 ${
              index !== accounts.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon size={17} className="text-slate-700" />
              <span className="text-sm text-slate-700">
                {name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  status === "Connected"
                    ? "bg-green-50 text-green-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {status}
              </span>

              <button className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50">
                {status === "Connected" ? "View" : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}