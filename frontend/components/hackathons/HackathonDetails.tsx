"use client";

import { useEffect, useState } from "react";

import { getHackathonById } from "@/services/hackathon";
import HeroSection from "./HeroSection";
import QuickStats from "./QuickStats";
import AboutSection from "./AboutSection";

type Props = {
  id: string;
};

export default function HackathonDetails({
  id,
}: Props) {
  const [hackathon, setHackathon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadHackathon = async () => {
  try {
    const data = await getHackathonById(id);
    setHackathon(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  loadHackathon();
}, [id]);

  if (loading) {
    return (
      <p className="text-slate-500">
        Loading hackathon...
      </p>
    );
  }

  if (!hackathon) {
    return (
      <p className="text-red-500">
        Hackathon not found.
      </p>
    );
  }

  return (

<div className="space-y-8">

    <HeroSection hackathon={hackathon} onUpdated={loadHackathon} />
    <QuickStats hackathon={hackathon} />
    <AboutSection hackathon={hackathon} />

<div className="grid gap-6 md:grid-cols-2">

</div>

    </div>
  );
}