import { FileSearch } from "lucide-react";

type SubmissionEmptyStateProps = {
  filtered?: boolean;
};

export default function SubmissionEmptyState({
  filtered = false,
}: SubmissionEmptyStateProps) {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
        <FileSearch size={26} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-800">
        {filtered ? "No submissions found" : "No submissions yet"}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        {filtered
          ? "Try changing your search or filters to find the submission you are looking for."
          : "Submissions from participating teams will appear here once they are submitted."}
      </p>
    </div>
  );
}