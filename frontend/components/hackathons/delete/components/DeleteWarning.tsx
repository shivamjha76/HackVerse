import { AlertTriangle } from "lucide-react";

export default function DeleteWarning() {
  return (
    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
      <div className="flex items-start gap-4">

        <AlertTriangle
          size={28}
          className="mt-1 shrink-0 text-red-600"
        />

        <p className="text-base leading-8 text-red-700">
          All hackathon data, registrations, and related
          information will be permanently removed.
        </p>

      </div>
    </div>
  );
}