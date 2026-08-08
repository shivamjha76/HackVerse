import {
  BarChart3,
  KeyRound,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    title: "API Access",
    description: "Access your API to build powerful integrations.",
    icon: KeyRound,
  },
  {
    title: "Advanced Analytics",
    description: "Get deeper insights and advanced statistics.",
    icon: BarChart3,
  },
  {
    title: "Team Management",
    description: "Manage team roles and permissions easily.",
    icon: Users,
  },
  {
    title: "Custom Profile",
    description: "Customize your public profile and portfolio.",
    icon: Sparkles,
  },
];

export default function FutureFeatures() {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-purple-600">
          <Sparkles size={18} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Future & Coming Soon
          </h2>

          <p className="text-xs text-slate-400">
            Features we're working on to improve your experience.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon size={16} />
              </div>

              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-600">
                Upcoming
              </span>
            </div>

            <h3 className="mt-3 text-sm font-semibold text-slate-800">
              {title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}