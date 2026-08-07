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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Hackathons"
            value={12}
            icon={<Trophy size={26} className="text-blue-600" />}
          />

          <StatCard
            title="Participants"
            value={356}
            color="bg-green-50"
            icon={<Users size={26} className="text-green-600" />}
          />

          <StatCard
            title="Submissions"
            value={94}
            color="bg-orange-50"
            icon={<FileText size={26} className="text-orange-600" />}
          />

          <StatCard
            title="Drafts"
            value={8}
            color="bg-purple-50"
            icon={<FolderOpen size={26} className="text-purple-600" />}
          />
        </div>
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