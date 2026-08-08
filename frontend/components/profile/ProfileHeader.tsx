import { CalendarDays, Mail, Pencil } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
            S
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900">
                Shivam
              </h2>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Organizer
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Mail size={15} />
                <span>shivam@example.com</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                <span>Joined on Aug 6, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>
    </div>
  );
}