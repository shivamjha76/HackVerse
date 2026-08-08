import { Trash2 } from "lucide-react";

type Props = {
  onClose: () => void;
  onDelete: () => void;
};

export default function DeleteActions({
  onClose,
  onDelete,
}: Props) {
  return (
    <div className="mt-8 flex gap-5">

      <button
        onClick={onClose}
        className="flex-1 rounded-2xl border border-slate-300 cursor-pointer py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Cancel
      </button>

      <button
  onClick={onDelete}
  className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-red-600 cursor-pointer py-3.5 text-base font-semibold text-white transition hover:bg-red-700"
>
        <Trash2 size={22} />
        Yes, Delete Hackathon
      </button>

    </div>
  );
}