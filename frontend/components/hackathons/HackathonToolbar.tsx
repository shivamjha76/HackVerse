import {
  Search,
  Filter,
  ArrowUpDown,
  RotateCw,
} from "lucide-react";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function HackathonToolbar({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md lg:flex-row lg:items-center lg:justify-between">

      {/* Left Side */}
      <div className="flex flex-1 items-center gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
  type="text"
  value={search}
  onChange={(e) => onSearchChange(e.target.value)}
  placeholder="Search hackathons..."
  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
/>
        </div>

        {/* Status */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 h-12 transition hover:bg-slate-50">
          <Filter size={18} />
          Status
        </button>
<button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 h-12 transition hover:bg-slate-50">
  <Filter size={18} />
  Mode
</button>

        {/* Sort */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 h-12 transition hover:bg-slate-50">
          <ArrowUpDown size={18} />
          Sort
        </button>

      </div>

      {/* Refresh */}
      <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 h-12 transition hover:bg-slate-50">
        <RotateCw size={18} />
        Refresh
      </button>

    </div>
  );
}