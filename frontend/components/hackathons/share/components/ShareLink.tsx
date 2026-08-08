import { Link2, Copy } from "lucide-react";

type Props = {
  link: string;
  onCopy: () => void;
};

export default function ShareLink({
  link,
  onCopy,
}: Props) {
  return (
    <>
      <div className="mt-6">

        <div className="mb-5 flex items-center gap-3">
          <Link2 size={24} className="text-slate-700" />

          <h3 className="text-2xl font-semibold text-slate-900">
            Share Link
          </h3>
        </div>

        <div className="flex overflow-hidden rounded-2xl border border-slate-300">

          <input
            readOnly
            value={link}
            className="flex-1 px-6 py-4 text-base text-slate-700 outline-none"
          />

          <button
            onClick={onCopy}
            className="flex items-center gap-3 border-l cursor-pointer border-slate-200 px-6 text-blue-600 transition hover:bg-slate-50"
          >
            <Copy size={24} />

            <span className="text-lg font-semibold">
              Copy
            </span>
          </button>

        </div>

      </div>
    </>
  );
}