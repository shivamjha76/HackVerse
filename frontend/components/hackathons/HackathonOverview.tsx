import {
  CalendarDays,
  Globe2,
  MapPin,
  Users,
} from "lucide-react";

type HackathonOverviewProps = {
  description: string;
  mode: string;
  startDate: string;
  endDate: string;
  maxTeams: number;
};

export default function HackathonOverview({
  description,
  mode,
  startDate,
  endDate,
  maxTeams,
}: HackathonOverviewProps) {
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-2">
      {/* Overview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Hackathon Overview
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-slate-800">
            Hackathon Format
          </h3>

          <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Globe2 size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700">
                {mode}
              </p>

              <p className="text-xs text-slate-400">
                Participation mode
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Hackathon Information
        </h2>

        <div className="mt-4 space-y-3">
          <InfoRow
            icon={<CalendarDays size={17} />}
            label="Start Date"
            value={new Date(startDate).toLocaleDateString()}
          />

          <InfoRow
            icon={<CalendarDays size={17} />}
            label="End Date"
            value={new Date(endDate).toLocaleDateString()}
          />

          <InfoRow
            icon={<Users size={17} />}
            label="Maximum Teams"
            value={String(maxTeams)}
          />

          <InfoRow
            icon={<MapPin size={17} />}
            label="Location"
            value={mode === "Online" ? "Online" : "Not specified"}
          />
        </div>
      </div>
    </div>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-3 text-slate-400">
        {icon}

        <span className="text-xs">
          {label}
        </span>
      </div>

      <span className="text-xs font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}