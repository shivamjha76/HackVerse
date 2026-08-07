import CreateHackathonButton from "@/components/hackathons/CreateHackathonButton";
import HackathonList from "@/components/hackathons/HackathonList";

export default function HackathonsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Hackathons
          </h1>

          <p className="mt-2 text-slate-500">
            Create and manage your hackathons.
          </p>
        </div>

        <CreateHackathonButton />
      </div>

      <HackathonList />
    </div>
  );
}