import {
  CheckCircle2,
  Clock3,
  MessageSquare,
  XCircle,
} from "lucide-react";

export default function SubmissionReviewPanel() {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Review Submission
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Review this project and update its status.
          </p>
        </div>

        <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
          <Clock3 size={13} />
          Awaiting Review
        </span>
      </div>

      {/* Reviewer Notes */}
      <div className="mt-5">
        <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
          <MessageSquare size={15} />
          Reviewer Notes
        </label>

        <textarea
          rows={4}
          placeholder="Add your review notes..."
          className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <Clock3 size={16} />
          Mark Under Review
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <XCircle size={16} />
          Reject
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          <CheckCircle2 size={16} />
          Accept
        </button>
      </div>
    </div>
  );
}