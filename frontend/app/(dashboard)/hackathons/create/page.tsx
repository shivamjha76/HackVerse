import CreateHackathonForm from "@/components/forms/CreateHackathonForm";

export default function CreateHackathonPage() {
  return (
  <div>
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-900">
        Create Hackathon
      </h1>

      <p className="mt-2 text-slate-500">
        Fill in the details below.
      </p>
    </div>

    <CreateHackathonForm />
  </div>
);
}