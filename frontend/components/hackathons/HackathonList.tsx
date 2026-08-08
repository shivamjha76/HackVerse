"use client";

import { useEffect, useState } from "react";

import { getHackathons } from "@/services/hackathon";
import HackathonCard from "./HackathonCard";

import EmptyState from "./EmptyState";
import CreateHackathonButton from "./CreateHackathonButton";
import HackathonToolbar from "./HackathonToolbar";

export default function HackathonList() {
  const [hackathons, setHackathons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHackathons() {
      try {
        const data = await getHackathons();
        console.log("Hackathons:", data);
        setHackathons(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }


    loadHackathons();
  }, []);

const [search, setSearch] = useState("");

  if (loading) {
    return (
      <p className="text-slate-500">
        Loading hackathons...
      </p>
    );
  }

  if (hackathons.length === 0) {
    return (
      <EmptyState
        title="No hackathons yet"
        description="Create your first hackathon to start accepting participants."
        buttonText="Create Hackathon"
      />
    );
  }


const filteredHackathons = hackathons.filter((hackathon) =>
  hackathon.title.toLowerCase().includes(search.toLowerCase())
);

  return (
  <>
    <HackathonToolbar
  search={search}
  onSearchChange={setSearch}
/>

    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {hackathons.map((hackathon) => (
        <HackathonCard
          key={hackathon.id}
          id={hackathon.id}
          title={hackathon.title}
          short_description={hackathon.short_description}
          organizer={hackathon.organizer}
          mode={hackathon.mode}
          status={hackathon.status}
          start_date={hackathon.start_date}
        />
      ))}
    </div>
  </>
);
}