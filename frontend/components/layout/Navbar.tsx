export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          HackVerse
        </h1>

        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#">Hackathons</a>
          <a href="#">Teams</a>
          <a href="#">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}