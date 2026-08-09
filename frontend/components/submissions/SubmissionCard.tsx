import {
  CalendarDays,
  ChevronRight,
  Code2,
  Users,
} from "lucide-react";

import Link from "next/link";

type SubmissionCardProps = {
  projectName: string;
  description: string;
  teamName: string;
  hackathon: string;
  status: "Submitted" | "Under Review" | "Accepted" | "Rejected";
  submittedAt: string;
};

export default function SubmissionCard({
  projectName,
  description,
  teamName,
  hackathon,
  status,
  submittedAt,
}: SubmissionCardProps) {
  const statusStyles = {
    Submitted: "bg-blue-50 text-blue-600",
    "Under Review": "bg-amber-50 text-amber-600",
    Accepted: "bg-green-50 text-green-600",
    Rejected: "bg-red-50 text-red-500",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900">
            {projectName}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
            {description}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Meta */}
      <div className="mt-4 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <Users size={15} className="text-slate-400" />
          <span>{teamName}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={15} className="text-slate-400" />
          <span>{submittedAt}</span>
        </div>
      </div>

      {/* Hackathon */}
      <div className="mt-3 text-xs text-slate-400">
        Hackathon:{" "}
        <span className="font-medium text-slate-600">
          {hackathon}
        </span>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <button
          type="button"
          className="flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-slate-700"
        >
          <Code2 size={15} />
          View Repository
        </button>

        <Link
            href={`/submissions/${projectName
            .toLowerCase()
             .replace(/\s+/g, "-")}`}
            className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
            >
            View Submission
        <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}