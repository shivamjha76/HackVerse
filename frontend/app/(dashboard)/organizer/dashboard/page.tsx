import {
  Trophy,
  Users,
  FileText,
  FolderOpen,
  PlusCircle,
  ClipboardList,
  UserPlus,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import QuickAction from "@/components/dashboard/QuickAction";
import RecentHackathons from "@/components/dashboard/RecentHackathons";
import RecentActivity from "@/components/dashboard/RecentActivity";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default function DashboardPage() {
  return (
    <>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's what's happening with your hackathons today.
          </p>
        </div>

        <DashboardStats />
      </div>

      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <QuickAction
            title="Create Hackathon"
            description="Launch a new hackathon."
            icon={<PlusCircle size={28} />}
          />

          <QuickAction
            title="Manage Participants"
            description="View registered participants."
            icon={<UserPlus size={28} />}
          />

          <QuickAction
            title="Review Submissions"
            description="Check submitted projects."
            icon={<ClipboardList size={28} />}
          />
        </div>
      </div>
<div className="mt-10">
  <RecentHackathons />
</div>
<div className="mt-10">
  <RecentActivity />
</div>
    </>
  );
}