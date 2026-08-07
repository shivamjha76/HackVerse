import SectionCard from "@/components/ui/SectionCard";
import { FileText } from "lucide-react";
import OrganizerCard from "./OrganizerCard";

type Props = {
  hackathon: any;
};

export default function AboutSection({
  hackathon,
}: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">

      <div className="lg:col-span-2">
        <SectionCard>
<div className="flex items-center gap-4">

  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
    <FileText
      size={26}
      className="text-blue-600"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold text-slate-900">
      About This Hackathon
    </h2>

    <p className="text-slate-500">
      Everything you need to know
    </p>
  </div>

</div>

<div className="mt-8 space-y-6">

  <p className="text-lg leading-8 text-slate-700">
    {hackathon.description}
  </p>
<div className="mt-8 flex flex-wrap gap-3">

  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
    Innovation
  </span>

  <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
    Technology
  </span>

  <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
    Collaboration
  </span>

  <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
    Open to All
  </span>

</div>

</div>
        </SectionCard>
      </div>

      <div>
        <OrganizerCard
            hackathon={hackathon}
        />
      </div>

    </div>
  );
}