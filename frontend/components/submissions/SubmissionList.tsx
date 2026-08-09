"use client";

import SubmissionCard from "./SubmissionCard";

const submissions = [
  {
    projectName: "HackVerse Platform",
    description:
      "A complete platform for creating, organizing, and participating in online hackathons.",
    teamName: "Code Warriors",
    hackathon: "HackVerse 2026",
    status: "Submitted" as const,
    submittedAt: "Aug 8, 2026",
  },
  {
    projectName: "Smart Campus",
    description:
      "A smart campus solution designed to improve student experience and campus management.",
    teamName: "Byte Builders",
    hackathon: "HackVerse 2026",
    status: "Under Review" as const,
    submittedAt: "Aug 7, 2026",
  },
  {
    projectName: "EcoTrack",
    description:
      "A technology-driven platform for tracking and reducing environmental impact.",
    teamName: "Green Coders",
    hackathon: "TechSprint 2026",
    status: "Accepted" as const,
    submittedAt: "Aug 6, 2026",
  },
  {
    projectName: "HealthConnect",
    description:
      "A digital platform connecting users with accessible healthcare resources.",
    teamName: "Tech Titans",
    hackathon: "FutureHack 2026",
    status: "Rejected" as const,
    submittedAt: "Aug 5, 2026",
  },
];

type SubmissionListProps = {
  search: string;
  status: string;
  hackathon: string;
  sort: string;
};

export default function SubmissionList({
  search,
  status,
  hackathon,
  sort,
}: SubmissionListProps) {
  const filteredSubmissions = submissions
    .filter((submission) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        submission.projectName.toLowerCase().includes(searchText) ||
        submission.teamName.toLowerCase().includes(searchText) ||
        submission.hackathon.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "All Status" ||
        submission.status === status;

      const matchesHackathon =
        hackathon === "All Hackathons" ||
        submission.hackathon === hackathon;

      return matchesSearch && matchesStatus && matchesHackathon;
    })
    .sort((a, b) => {
      if (sort === "Project Name") {
        return a.projectName.localeCompare(b.projectName);
      }

      if (sort === "Oldest First") {
        return a.submittedAt.localeCompare(b.submittedAt);
      }

      return b.submittedAt.localeCompare(a.submittedAt);
    });

  if (filteredSubmissions.length === 0) {
    return (
      <div className="mt-6 rounded-xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
        <h3 className="text-base font-semibold text-slate-800">
          No submissions found
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      {filteredSubmissions.map((submission) => (
        <SubmissionCard
          key={submission.projectName}
          {...submission}
        />
      ))}
    </div>
  );
}