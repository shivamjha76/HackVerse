import SectionCard from "@/components/ui/SectionCard";
import StatItem from "./StatItem";

import {
  CalendarDays,
  Clock3,
  Globe,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { formatDate } from "@/lib/utils";

type Props = {
  hackathon: any;
};

export default function QuickStats({
  hackathon,
}: Props) {
  return (
    <SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="border-b border-slate-100 p-7 md:border-r">
          <StatItem
            icon={<CalendarDays size={24} />}
            title="Start Date"
            value={formatDate(hackathon.start_date)}
            subtitle="10:00 AM"
            iconBg="bg-violet-100"
            iconColor="text-violet-600"
          />
        </div>

        <div className="border-b border-slate-100 p-7 md:border-r">
          <StatItem
            icon={<Globe size={24} />}
            title="Mode"
            value={hackathon.mode}
            subtitle="Virtual"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />
        </div>

        <div className="border-b border-slate-100 p-7">
          <StatItem
            icon={<Users size={24} />}
            title="Team Size"
            value={`${hackathon.max_team_size} Members`}
            subtitle="Maximum"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
          />
        </div>

        <div className="border-slate-100 p-7 md:border-r">
          <StatItem
            icon={<Trophy size={24} />}
            title="Prize Pool"
            value={`₹${Number(hackathon.prize_pool).toLocaleString()}`}
            subtitle="Total Rewards"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
          />
        </div>

        <div className="border-slate-100 p-7 md:border-r">
          <StatItem
            icon={<MapPin size={24} />}
            title="Location"
            value={hackathon.location}
            subtitle="Open for all"
            iconBg="bg-indigo-100"
            iconColor="text-indigo-600"
          />
        </div>

        <div className="p-7">
          <StatItem
            icon={<Clock3 size={24} />}
            title="Registration Deadline"
            value={formatDate(hackathon.registration_deadline)}
            subtitle="11:59 PM"
            iconBg="bg-rose-100"
            iconColor="text-rose-600"
          />
        </div>

      </div>

    </SectionCard>
  );
}