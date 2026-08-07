import EmptyState from "@/components/hackathons/EmptyState";
import CreateHackathonButton from "@/components/hackathons/CreateHackathonButton";

export default function HackathonsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Hackathons
        </h1>

        <p className="mt-2 text-slate-500">
          Create and manage your hackathons.
        </p>
      </div>

      <EmptyState
        title="No hackathons yet"
        description="Create your first hackathon to start accepting participants."
        buttonText="Create Hackathon"
      />
    </div>
  );
}