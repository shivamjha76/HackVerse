"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Shield,
  User,
  UserMinus,
} from "lucide-react";

type MemberActionsMenuProps = {
  memberName: string;
  isLeader?: boolean;
};

export default function MemberActionsMenu({
  memberName,
  isLeader = false,
}: MemberActionsMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100"
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-9 z-30 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50"
          >
            <User size={16} />
            View Profile
          </button>

          {!isLeader && (
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50"
            >
              <Shield size={16} />
              Change Role
            </button>
          )}

          {!isLeader && (
            <>
              <div className="my-1 border-t border-slate-100" />

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
              >
                <UserMinus size={16} />
                Remove Member
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}