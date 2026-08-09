import { CalendarDays, FileText, Trophy, Users } from "lucide-react";

const details = [
  {
    label: "Hackathon",
    value: "HackVerse 2026",
    icon: Trophy,
  },
  {
    label: "Members",
    value: "4 / 5 members",
    icon: Users,
  },
  {
    label: "Created",
    value: "August 6, 2026",
    icon: CalendarDays,
  },
  {
    label: "Submissions",
    value: "1 project",
    icon: FileText,
  },
];

export default function TeamOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Team Overview
      </h2>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        A passionate team building innovative solutions for the next
        generation.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {details.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Icon size={14} />
              {label}
            </div>

            <p className="mt-1.5 text-sm font-medium text-slate-700">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}