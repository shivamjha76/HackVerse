"use client";   

import { useState } from "react";
import { Plus, Users } from "lucide-react";
import CreateTeamModal from "./CreateTeamModal";
import TeamActionsMenu from "./TeamActionsMenu";

export default function TeamsHeader() {
    const [createOpen, setCreateOpen] = useState(false);
  
return (
    <>
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Users size={20} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Teams
          </h1>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Manage your teams and team members.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCreateOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
        <Plus size={17} />
            Create Team
    </button>
    </div>
      <CreateTeamModal
      open={createOpen}
      onClose={() => setCreateOpen(false)}
    />
  </>
);
}