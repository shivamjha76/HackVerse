"use client";

import { useState } from "react";

import SubmissionsHeader from "@/components/submissions/SubmissionsHeader";
import SubmissionsToolbar from "@/components/submissions/SubmissionsToolbar";
import SubmissionList from "@/components/submissions/SubmissionList";
import SubmissionStats from "@/components/submissions/SubmissionStats";

export default function SubmissionsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [hackathon, setHackathon] = useState("All Hackathons");
  const [sort, setSort] = useState("Newest First");

  return (
    <div>
      <SubmissionsHeader />

      <SubmissionStats />

      <SubmissionsToolbar
        search={search}
        status={status}
        hackathon={hackathon}
        sort={sort}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onHackathonChange={setHackathon}
        onSortChange={setSort}
      />

      <SubmissionList
        search={search}
        status={status}
        hackathon={hackathon}
        sort={sort}
      />
    </div>
  );
}