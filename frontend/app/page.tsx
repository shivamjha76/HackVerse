import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <section className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          Welcome to HackVerse
        </h1>

        <p className="mt-4 text-slate-400">
          Build, collaborate and compete.
        </p>
      </section>
    </div>
  );
}