import { FileText, Tag } from "lucide-react";

export default function ProjectInformation() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FileText size={18} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Project Information
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Details about the submitted project.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-slate-800">
          About the Project
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          HackVerse is a platform designed to make organizing and
          participating in online hackathons simple. Organizers can
          create hackathons, manage teams, review submissions, and
          handle the complete hackathon workflow from one place.
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Tag size={14} />
          Technologies
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
            Next.js
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
            FastAPI
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
            PostgreSQL
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
            TypeScript
          </span>
        </div>
      </div>
    </div>
  );
}