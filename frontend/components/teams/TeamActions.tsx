import {
  Edit3,
  Settings,
  UserPlus,
  LogOut,
  Trash2,
} from "lucide-react";

const actions = [
  {
    label: "Edit Team",
    icon: Edit3,
  },
  {
    label: "Invite Members",
    icon: UserPlus,
  },
  {
    label: "Team Settings",
    icon: Settings,
  },
  {
    label: "Leave Team",
    icon: LogOut,
  },
  {
    label: "Delete Team",
    icon: Trash2,
    danger: true,
  },
];

export default function TeamActions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Team Actions
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Manage your team and its members.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {actions.map(({ label, icon: Icon, danger }) => (
          <button
            key={label}
            type="button"
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition ${
              danger
                ? "border-red-100 text-red-500 hover:bg-red-50"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon size={17} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}