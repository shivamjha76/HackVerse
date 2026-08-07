import { ArrowRight } from "lucide-react";

const hackathons = [
  {
    title: "AI Innovation Challenge",
    participants: 235,
    status: "Open",
    date: "Ends: 15 Aug 2026",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Smart India Hackathon",
    participants: 0,
    status: "Draft",
    date: "Starts: 20 Aug 2026",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Web3 Buildathon",
    participants: 540,
    status: "Closed",
    date: "Ended: 1 Aug 2026",
    color: "bg-red-100 text-red-700",
  },
];

export default function RecentHackathons() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Hackathons
        </h2>

        <button className="flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon.title}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
          >
            <div>
              <h3 className="font-semibold text-slate-900">
                {hackathon.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {hackathon.participants} Participants • {hackathon.date}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${hackathon.color}`}
            >
              {hackathon.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}