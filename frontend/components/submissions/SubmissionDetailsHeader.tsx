import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SubmissionDetailsHeader() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <Link
            href="/submissions"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
          >
            <ArrowLeft size={19} />
          </Link>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Code2 size={22} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900">
                HackVerse Platform
              </h1>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                Submitted
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Code Warriors · HackVerse 2026
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <ExternalLink size={15} />
          View Project
        </button>
      </div>
    </div>
  );
}