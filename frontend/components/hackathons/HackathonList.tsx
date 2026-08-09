"use client";

import { useEffect, useState } from "react";

import { getHackathons } from "@/services/hackathon";
import HackathonCard from "./HackathonCard";
import EmptyState from "./EmptyState";
import HackathonToolbar from "./HackathonToolbar";

export default function HackathonList() {
  const [hackathons, setHackathons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [mode, setMode] = useState("All Modes");
  const [sort, setSort] = useState("Newest First");

const loadHackathons = async (isRefresh = false) => {
  try {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    const data = await getHackathons();

    console.log("Hackathons:", data);

    setHackathons(data);
  } catch (error) {
    console.error("Failed to load hackathons:", error);
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

useEffect(() => {
  loadHackathons();
}, []);

  // Loading
  if (loading) {
    return (
      <p className="text-slate-500">
        Loading hackathons...
      </p>
    );
  }

  // No hackathons from backend
  if (hackathons.length === 0) {
    return (
      <EmptyState
        title="No hackathons yet"
        description="Create your first hackathon to start accepting participants."
        buttonText="Create Hackathon"
      />
    );
  }

  // Search + Filter + Sort
  const filteredHackathons = [...hackathons]
    .filter((hackathon) => {
      const searchValue = search.trim().toLowerCase();

      const title =
        hackathon.title?.toLowerCase() || "";

      const organizer =
        hackathon.organizer?.toLowerCase() || "";

      const matchesSearch =
        searchValue === "" ||
        title.includes(searchValue) ||
        organizer.includes(searchValue);

      const matchesStatus =
        status === "All Status" ||
        hackathon.status?.toLowerCase() ===
          status.toLowerCase();

      const matchesMode =
        mode === "All Modes" ||
        hackathon.mode?.toLowerCase() ===
          mode.toLowerCase();

      return (
        matchesSearch &&
        matchesStatus &&
        matchesMode
      );
    })
    .sort((a, b) => {
      if (sort === "Name") {
        return (a.title || "").localeCompare(
          b.title || ""
        );
      }

      const dateA = new Date(
        a.start_date
      ).getTime();

      const dateB = new Date(
        b.start_date
      ).getTime();

      if (sort === "Oldest First") {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

  return (
    <>
      <HackathonToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        mode={mode}
        onModeChange={setMode}
        sort={sort}
        onSortChange={setSort}
        onRefresh={() => loadHackathons(true)}
        refreshing={refreshing}
      />

      {/* No search/filter results */}
      {filteredHackathons.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
          <h3 className="text-base font-semibold text-slate-800">
            No hackathons found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              id={hackathon.id}
              title={hackathon.title}
              short_description={
                hackathon.short_description
              }
              organizer={hackathon.organizer}
              mode={hackathon.mode}
              status={hackathon.status}
              start_date={hackathon.start_date}
            />
          ))}
        </div>
      )}
    </>
  );
}