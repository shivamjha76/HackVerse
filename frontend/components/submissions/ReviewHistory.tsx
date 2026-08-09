import {
  CheckCircle2,
  Clock3,
  MessageSquare,
  XCircle,
} from "lucide-react";

const history = [
  {
    action: "Submission received",
    description: "Code Warriors submitted their project.",
    date: "Aug 8, 2026 · 10:32 AM",
    icon: Clock3,
    type: "default",
  },
  {
    action: "Review started",
    description: "Submission was opened for review.",
    date: "Aug 8, 2026 · 11:15 AM",
    icon: MessageSquare,
    type: "review",
  },
  {
    action: "Submission accepted",
    description: "Project was approved by the organizer.",
    date: "Aug 8, 2026 · 12:40 PM",
    icon: CheckCircle2,
    type: "success",
  },
];

export default function ReviewHistory() {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Review History
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Track the review activity for this submission.
        </p>
      </div>

      <div className="mt-5">
        {history.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.action}-${item.date}`}
              className="flex gap-4"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    item.type === "success"
                      ? "bg-green-50 text-green-600"
                      : item.type === "review"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <Icon size={17} />
                </div>

                {index !== history.length - 1 && (
                  <div className="my-1 h-full min-h-8 w-px bg-slate-200" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <p className="text-sm font-medium text-slate-800">
                  {item.action}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>

                <p className="mt-1.5 text-xs text-slate-400">
                  {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}