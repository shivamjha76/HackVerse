import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreateHackathonButton() {
  return (
    <Link
      href="/hackathons/create"
      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
    >
      <Plus size={18} />

      Create Hackathon
    </Link>
  );
}