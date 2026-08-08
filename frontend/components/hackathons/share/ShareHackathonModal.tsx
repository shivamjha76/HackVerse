import ShareHeader from "./components/ShareHeader";
import ShareLink from "./components/ShareLink";
import ShareActions from "./components/ShareActions";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
  hackathon: any;
};

export default function ShareHackathonModal({
  open,
  onClose,
  hackathon,
}: Props) {

useEffect(() => {

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);
const handleCopy = async () => {
  await navigator.clipboard.writeText(shareUrl);
  toast.success("Link copied successfully!");
onClose();
};

const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: hackathon.title,
        text: hackathon.short_description,
        url: shareUrl,
      });

      toast.success("Sharing opened successfully!");
      onClose();
    } else {
      await handleCopy();
    }
  } catch {
    // User cancelled sharing — ignore
  }
};
const shareUrl = window.location.href;
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-xl bg-white px-6 py-5 shadow-2xl">

        <ShareHeader onClose={onClose} />
<ShareLink
  link={shareUrl}
  onCopy={handleCopy}
/>
<ShareActions
  onShare={handleShare}
/>
<div className="mt-4 border-t border-slate-200 pt-4">
  <button
    onClick={onClose}
    className="w-full rounded-2xl border border-slate-300 cursor-pointer py-3 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
  >
    Close
  </button>
</div>

      </div>
    </div>
  );
}