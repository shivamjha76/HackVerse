import { FileCheck2 } from "lucide-react";

export default function SubmissionsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileCheck2 size={20} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Submissions
          </h1>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Review and manage hackathon submissions.
        </p>
      </div>
    </div>
  );
}