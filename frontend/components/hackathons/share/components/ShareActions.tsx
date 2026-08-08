import { Share2 } from "lucide-react";

type Props = {
  onShare: () => void;
};

export default function ShareActions({
  onShare,
}: Props)  {
  return (
    <>
      {/* Divider */}
      <div className="my-4 flex items-center gap-6">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-2xl font-medium text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Browser Share */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-6">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Share2
              size={28}
              className="text-green-600"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Share via Browser
            </h3>

            <p className="mt-2 text-base text-slate-500">
              If your browser supports it, you can
              <br />
              share directly.
            </p>
          </div>

        </div>

        <button
onClick={onShare}
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold cursor-pointer text-white transition hover:bg-blue-700"
        >
          <Share2 size={24} />

          Share
        </button>

      </div>
    </>
  );
}