"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, FileText, FolderOpen } from "lucide-react";

import StatCard from "./StatCard";
import { getHackathons } from "@/services/hackathon";

export default function DashboardStats() {
const [hackathons, setHackathons] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const totalDrafts = hackathons.filter(
  (hackathon) => hackathon.status === "draft"
).length;

useEffect(() => {
  async function loadStats() {
    try {
      const data = await getHackathons();
      setHackathons(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadStats();
}, []);

if (loading) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Hackathons"
        value="..."
        icon={<Trophy size={26} className="text-blue-600" />}
      />
    </div>
  );
}

return (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    <StatCard
      title="Hackathons"
      value={hackathons.length}
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
      value={totalDrafts}
      color="bg-purple-50"
      icon={<FolderOpen size={26} className="text-purple-600" />}
    />
  </div>
);

  return <></>
}