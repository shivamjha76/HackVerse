"use client";

import {
  CalendarDays,
  Clock3,
  Trophy,
  Users,
  FileCheck2,
  ArrowRight,
  MapPin,
} from "lucide-react";

const stats = [
  {
    title: "Registered Hackathons",
    value: "6",
    icon: Trophy,
  },
  {
    title: "Upcoming Hackathons",
    value: "3",
    icon: CalendarDays,
  },
  {
    title: "My Teams",
    value: "2",
    icon: Users,
  },
  {
    title: "Submissions",
    value: "4",
    icon: FileCheck2,
  },
];

const myHackathons = [
  {
    title: "HackVerse 2026",
    status: "Registered",
    date: "Aug 18, 2026",
    team: "Team Phoenix",
  },
  {
    title: "CodeSprint Jaipur",
    status: "In Progress",
    date: "Aug 22, 2026",
    team: "Solo",
  },
  {
    title: "Build for Bharat",
    status: "Registered",
    date: "Sep 02, 2026",
    team: "Team Phoenix",
  },
];

const upcomingHackathons = [
  {
    title: "HackVerse 2026",
    organizer: "HackVerse",
    date: "Aug 18, 2026",
    location: "Online",
  },
  {
    title: "CodeSprint Jaipur",
    organizer: "Tech Community",
    date: "Aug 22, 2026",
    location: "Jaipur",
  },
  {
    title: "Build for Bharat",
    organizer: "Innovation Labs",
    date: "Sep 02, 2026",
    location: "Online",
  },
];

export default function ParticipantDashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back, Shivam 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Discover hackathons, build with your team, and turn your ideas
          into reality.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Icon size={21} className="text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* My Hackathons */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              My Hackathons
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Hackathons you have joined or are currently participating in.
            </p>
          </div>

          <button className="flex cursor-pointer items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
            View all
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {myHackathons.map((hackathon, index) => (
            <div
              key={hackathon.title}
              className={`flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between ${
                index !== myHackathons.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-slate-900">
                    {hackathon.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      hackathon.status === "In Progress"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {hackathon.status}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={15} />
                    {hackathon.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={15} />
                    {hackathon.team}
                  </span>
                </div>
              </div>

              <button className="flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                View Hackathon
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Upcoming Hackathons
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Don't miss these upcoming opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {upcomingHackathons.map((hackathon) => (
            <div
              key={hackathon.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Trophy size={22} className="text-blue-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {hackathon.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                by {hackathon.organizer}
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {hackathon.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {hackathon.location}
                </div>
              </div>

              <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Explore Hackathon
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {/* Team */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                My Teams
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your current teams.
              </p>
            </div>

            <Users size={22} className="text-blue-600" />
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="font-semibold text-slate-900">
                Team Phoenix
              </p>

              <p className="mt-1 text-sm text-slate-500">
                4 members
              </p>
            </div>

            <button className="flex cursor-pointer items-center gap-1 text-sm font-medium text-blue-600">
              Manage
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="font-semibold text-slate-900">
                Code Warriors
              </p>

              <p className="mt-1 text-sm text-slate-500">
                3 members
              </p>
            </div>

            <button className="flex cursor-pointer items-center gap-1 text-sm font-medium text-blue-600">
              Manage
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest activity on HackVerse.
            </p>
          </div>

          <div className="mt-6 space-y-5">

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50">
                <FileCheck2 size={17} className="text-green-600" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-900">
                  Submission uploaded
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  HackVerse 2026 · 2 hours ago
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50">
                <Users size={17} className="text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-900">
                  Joined Team Phoenix
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Build for Bharat · Yesterday
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50">
                <Clock3 size={17} className="text-amber-600" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-900">
                  Registered for hackathon
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  CodeSprint Jaipur · 2 days ago
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}