import { Share2, X } from "lucide-react";

type Props = {
  onClose: () => void;
};

export default function ShareHeader({ onClose }: Props) {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-lg cursor-pointer p-2 text-slate-500 transition hover:bg-slate-100"
      >
        <X size={26} />
      </button>

      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Share2 size={28} className="text-blue-600" />
        </div>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Share Hackathon
        </h2>

        <p className="mt-3 text-center text-lang leading-relaxed text-slate-600">
          Share this hackathon with others and invite
          <br />
          them to participate.
        </p>
      </div>
    </>
  );
}