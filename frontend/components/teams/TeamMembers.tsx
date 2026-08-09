"use client";

import { useState } from "react";
import { Mail, MoreHorizontal, UserPlus } from "lucide-react";
import InviteMemberModal from "./InviteMemberModal";
import MemberActionsMenu from "./MemberActionsMenu";

const members = [
  {
    name: "Shivam",
    email: "shivam@example.com",
    role: "Team Leader",
    initials: "S",
  },
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Member",
    initials: "R",
  },
  {
    name: "Aman Verma",
    email: "aman@example.com",
    role: "Member",
    initials: "A",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Member",
    initials: "P",
  },
];

export default function TeamMembers() {
    const [inviteOpen, setInviteOpen] = useState(false);
  
return (
  <>
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Team Members
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            4 members in this team
          </p>
        </div>

        <button
            type="button"
            onClick={() => setInviteOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
            >
            <UserPlus size={15} />
                Invite Member
        </button>
      </div>

      <div>
        {members.map((member, index) => (
          <div
            key={member.email}
            className={`className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between" ${
              index !== members.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                {member.initials}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-800">
                  {member.name}
                </p>

                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                  <Mail size={13} />
                  <span className="truncate">
                    {member.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  member.role === "Team Leader"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {member.role}
              </span>

              <MemberActionsMenu
                memberName={member.name}
                isLeader={member.role === "Team Leader"}
              />
            </div>
          </div>
        ))}
      </div>
        </div>

    <InviteMemberModal
      open={inviteOpen}
      onClose={() => setInviteOpen(false)}
    />
  </>
);
}