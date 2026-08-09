import {
  CalendarDays,
  Code2,
  Globe,
  Trophy,
  Users,
} from "lucide-react";

const details = [
  {
    label: "Team",
    value: "Code Warriors",
    icon: Users,
  },
  {
    label: "Hackathon",
    value: "HackVerse 2026",
    icon: Trophy,
  },
  {
    label: "Submitted",
    value: "August 8, 2026",
    icon: CalendarDays,
  },
  {
    label: "Repository",
    value: "GitHub Repository",
    icon: Code2,
  },
  {
    label: "Live Demo",
    value: "hackverse-demo.com",
    icon: Globe,
  },
];

export default function SubmissionMetadata() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Submission Details
      </h2>

      <div className="mt-4 space-y-3">
        {details.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 p-3"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Icon size={15} />
              {label}
            </div>

            <span className="text-xs font-medium text-slate-600">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}