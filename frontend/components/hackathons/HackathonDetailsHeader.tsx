import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react";

type HackathonDetailsHeaderProps = {
  title: string;
  status: string;
  startDate: string;
};

export default function HackathonDetailsHeader({
  title,
  status,
  startDate,
}: HackathonDetailsHeaderProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <Link
            href="/hackathons"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
          >
            <ArrowLeft size={19} />
          </Link>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900">
                {title}
              </h1>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                {status}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays size={15} />

              <span>
                Starts {new Date(startDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="self-end rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 sm:self-auto"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}