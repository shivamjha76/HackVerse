import {
  PlusCircle,
  Users,
  FileText,
  Trophy,
} from "lucide-react";

const activities = [
  {
    title: "New hackathon created",
    description: "AI Innovation Challenge",
    time: "5 min ago",
    icon: <PlusCircle size={18} className="text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    title: "New participant joined",
    description: "Rahul Sharma registered",
    time: "20 min ago",
    icon: <Users size={18} className="text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "Submission received",
    description: "Team Alpha submitted project",
    time: "1 hour ago",
    icon: <FileText size={18} className="text-orange-600" />,
    bg: "bg-orange-50",
  },
  {
    title: "Hackathon completed",
    description: "Web3 Buildathon ended",
    time: "Yesterday",
    icon: <Trophy size={18} className="text-purple-600" />,
    bg: "bg-purple-50",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${activity.bg}`}
            >
              {activity.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-slate-900">
                {activity.title}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.description}
              </p>
            </div>

            <span className="text-xs text-slate-400 whitespace-nowrap">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}