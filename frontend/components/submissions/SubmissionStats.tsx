import {
  CheckCircle2,
  Clock3,
  FileCheck2,
  Layers3,
} from "lucide-react";

const stats = [
  {
    label: "Total Submissions",
    value: "12",
    icon: Layers3,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    label: "Submitted",
    value: "8",
    icon: FileCheck2,
    iconClass: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Under Review",
    value: "2",
    icon: Clock3,
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    label: "Accepted",
    value: "2",
    icon: CheckCircle2,
    iconClass: "bg-green-50 text-green-600",
  },
];

export default function SubmissionStats() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, iconClass }) => (
        <div
          key={label}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">
                {label}
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                {value}
              </p>
            </div>

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
            >
              <Icon size={19} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}