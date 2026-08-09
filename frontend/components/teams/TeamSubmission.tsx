import {
  CheckCircle2,
  Clock3,
  FileText,
  Upload,
} from "lucide-react";

const submissionStatus = "Submitted";

export default function TeamSubmission() {
  const isSubmitted = submissionStatus === "Submitted";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <FileText size={18} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Submission
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Manage your team's hackathon submission.
            </p>
          </div>
        </div>

        <span
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isSubmitted
              ? "bg-green-50 text-green-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {isSubmitted ? (
            <CheckCircle2 size={13} />
          ) : (
            <Clock3 size={13} />
          )}

          {submissionStatus}
        </span>
      </div>

      <div className="mt-5 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              HackVerse Project
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              A platform for building and managing online hackathons.
            </p>
          </div>

          <span className="text-xs text-slate-400">
            Submitted Aug 8, 2026
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-500">
            React
          </span>

          <span className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-500">
            FastAPI
          </span>

          <span className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-500">
            PostgreSQL
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-blue-500 px-3 py-2 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
        >
          <Upload size={15} />
          Update Submission
        </button>
      </div>
    </div>
  );
}