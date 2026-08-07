import SectionCard from "@/components/ui/SectionCard";

import {
  Clock3,
  Tag,
} from "lucide-react";

type Props = {
  hackathon: any;
};



export default function OrganizerCard({
  hackathon,
}: Props) {
  return (
  <SectionCard>

    <h3 className="text-xl font-bold text-slate-900">
      Organizer
    </h3>

    <div className="mt-6 flex items-center gap-3">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-700">
        {hackathon.organizer.charAt(0).toUpperCase()}
      </div>

      <div>

        <h4 className="text-lg font-bold text-slate-900 capitalize cursor-pointer transition hover:text-blue-600">
          {hackathon.organizer}
        </h4>

        <p className="text-sm text-slate-500">
          Organizer
        </p>

      </div>

    </div>

    <button className="mt-6 w-full rounded-xl bg-blue-50 py-3 text-sm font-semibold text-blue-600 cursor-pointer transition hover:bg-blue-100">
      View Organizer Profile
    </button>

    <div className="my-6 border-t border-slate-200" />

    <h3 className="text-lg font-bold text-slate-900">
      Quick Info
    </h3>

    <div className="mt-5 space-y-5">

      <div className="flex items-start gap-3">

        <Clock3
          size={18}
          className="mt-1 text-slate-400"
        />

        <div>

          <p className="text-sm text-slate-500">
            Duration
          </p>

          <p className="font-medium text-slate-900">
            3 Days
          </p>

        </div>

      </div>

      <div className="flex items-start gap-3">

        <Tag
          size={18}
          className="mt-1 text-slate-400"
        />

        <div>

          <p className="text-sm text-slate-500">
            Category
          </p>

          <p className="font-medium text-slate-900">
            Web Development
          </p>

        </div>

      </div>

    </div>

  </SectionCard>
);
}