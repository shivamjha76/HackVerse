import { useEffect, useState } from "react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import EditHackathonModal from "@/components/hackathons/edit/EditHackathonModal";
import DeleteHackathonModal from "@/components/hackathons/delete/DeleteHackathonModal";

import {
  ArrowLeft,
  Building2,
  Pencil,
  Trash2,
  Share2,
} from "lucide-react";

type Props = {
  hackathon: any;
  onUpdated?: () => void;
};

export default function HeroSection({ hackathon, onUpdated }: Props) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
useEffect(() => {
  document.body.style.overflow = isEditOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isEditOpen]);

  return (
    <>
      <div className="space-y-6">
        <Link
          href="/hackathons"
          className="mb-8 inline-flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back to Hackathons</span>
        </Link>

        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold text-slate-900">{hackathon.title}</h1>
              <Badge status={hackathon.status} />
            </div>

            <div className="mt-4 flex items-center gap-2 text-lg text-slate-600">
              <Building2 size={20} className="text-slate-500" />
              <span>Organized by</span>
              <span className="font-semibold text-blue-600">{hackathon.organizer}</span>
            </div>
          </div>

          <div className="flex shrink-0 gap-3 lg:ml-auto">
            <button
              onClick={() => setIsEditOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-2 font-medium cursor-pointer text-emerald-700 transition hover:bg-emerald-200"
            >
              <Pencil size={18} />
              Edit
            </button>

            <button onClick={() => setIsDeleteOpen(true)} className="flex items-center gap-2 rounded-xl bg-red-100 px-4 py-2 font-medium cursor-pointer text-red-700 transition hover:bg-red-200">
              <Trash2 size={18} />
              Delete
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-blue-700 bg-blue-600 px-4 py-2 font-medium cursor-pointer text-white transition hover:bg-blue-700">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </div>

      <EditHackathonModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onUpdated={onUpdated ?? (() => {})}
        hackathon={hackathon}
      />
<DeleteHackathonModal
  open={isDeleteOpen}
  onClose={() => setIsDeleteOpen(false)}
  hackathon={hackathon}
  onDeleted={onUpdated ?? (() => {})}
/>
    </>
  );
}