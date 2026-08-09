import {
  MoreHorizontal,
  Users,
  Trophy,
} from "lucide-react";
import Link from "next/link";

type TeamCardProps = {
  name: string;
  description: string;
  members: number;
  hackathon: string;
  status: "Active" | "Completed" | "Draft";
};

export default function TeamCard({
  name,
  description,
  members,
  hackathon,
  status,
}: TeamCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Users size={20} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {name}
            </h3>

            <span className="text-xs text-slate-400">
              {members} {members === 1 ? "Member" : "Members"}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-5 text-slate-500">
        {description}
      </p>

      {/* Hackathon */}
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <Trophy size={15} className="text-blue-500" />
        <span>{hackathon}</span>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            status === "Active"
              ? "bg-green-50 text-green-600"
              : status === "Completed"
                ? "bg-slate-100 text-slate-500"
                : "bg-amber-50 text-amber-600"
          }`}
        >
          {status}
        </span>

        <Link
            href={`/teams/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
            >
            View Team
        </Link>
      </div>
    </div>
  );
}