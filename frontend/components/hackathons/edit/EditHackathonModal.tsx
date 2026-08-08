import { X } from "lucide-react";
import EditHackathonForm from "./EditHackathonForm";
import { updateHackathon } from "@/services/hackathon";
import { toast } from "sonner";


type Props = {
  open: boolean;
  onClose: () => void;
  onUpdated: () => void;
  hackathon: any;
};

export default function EditHackathonModal({
  open,
  onClose,
  onUpdated,
  hackathon,
}: Props) {

  const handleSubmit = async (data: any) => {
    try {
      const response = await updateHackathon(hackathon.id, data);

      toast.success("Hackathon updated successfully!");
      onClose();
      onUpdated();
    } catch (error) {
      toast.error("Failed to update hackathon.");
      console.error(error);
    }
  };

  if (!open) return null;

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">

    <div className="flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

        <h2 className="text-3xl font-bold text-slate-900">
          Edit Hackathon
        </h2>

        <button
          onClick={onClose}
          className="rounded-xl p-2 text-slate-500 cursor-pointer transition hover:bg-slate-100 hover:text-slate-800"
        >
          <X size={24} />
        </button>

      </div>

     <div className="flex-1 overflow-y-auto px-8 py-8">

  <EditHackathonForm hackathon={hackathon} onSubmit={handleSubmit}/>
</div>

<div className="border-t border-slate-200 bg-white px-8 py-5">
  <div className="flex items-center justify-end gap-4">
    <button
      onClick={onClose}
      className="rounded-xl border border-slate-300 px-6 py-3 cursor-pointer font-medium text-slate-700 transition hover:bg-slate-100"
    >
      Cancel
    </button>

<button
  type="submit"
  form="edit-hackathon-form"
  className="rounded-xl bg-blue-600 px-6 py-3 cursor-pointer font-semibold text-white transition hover:bg-blue-700"
>
  Save Changes
</button>
  </div>
</div>
    </div>
  </div>
);

}