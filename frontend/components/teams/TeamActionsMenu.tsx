"use client";

import { useState } from "react";
import {
  Edit3,
  MoreHorizontal,
  Settings,
  Trash2,
  UserPlus,
} from "lucide-react";

import EditTeamModal from "./EditTeamModal";
import InviteMemberModal from "./InviteMemberModal";

export default function TeamActionsMenu() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
        >
          <MoreHorizontal size={20} />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-11 z-20 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
            {/* Edit Team */}
            <button
              type="button"
              onClick={() => {
                setEditOpen(true);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50"
            >
              <Edit3 size={16} />
              Edit Team
            </button>

            {/* Invite Members */}
            <button
              type="button"
              onClick={() => {
                setInviteOpen(true);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50"
            >
              <UserPlus size={16} />
              Invite Members
            </button>

            {/* Team Settings */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50"
            >
              <Settings size={16} />
              Team Settings
            </button>

            <div className="my-1 border-t border-slate-100" />

            {/* Delete Team */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
            >
              <Trash2 size={16} />
              Delete Team
            </button>
          </div>
        )}
      </div>

      {/* Edit Team Modal */}
      <EditTeamModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
      />
<InviteMemberModal
  open={inviteOpen}
  onClose={() => setInviteOpen(false)}
/>
    </>
  );
}