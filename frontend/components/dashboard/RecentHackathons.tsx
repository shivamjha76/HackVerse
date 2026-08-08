"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getHackathons } from "@/services/hackathon";

export default function RecentHackathons() {

const [hackathons, setHackathons] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadHackathons() {
    try {
      const data = await getHackathons();
      setHackathons(data.slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadHackathons();
}, []);

if (loading) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Recent Hackathons
      </h2>

      <p className="mt-6 text-slate-500">
        Loading...
      </p>
    </div>
  );
}

if (hackathons.length === 0) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Recent Hackathons
      </h2>

      <p className="mt-6 text-slate-500">
        No hackathons found.
      </p>
    </div>
  );
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "published":
      return "bg-green-100 text-green-700";

    case "draft":
      return "bg-yellow-100 text-yellow-700";

    case "closed":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};

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
            key={hackathon.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
          >
            <div>
              <h3 className="font-semibold text-slate-900">
                {hackathon.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {hackathon.registration_count ?? 0} Participants • {hackathon.mode}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(hackathon.status)}`}
            >
              {hackathon.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}