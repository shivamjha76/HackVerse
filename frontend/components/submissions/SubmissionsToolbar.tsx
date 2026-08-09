"use client";

import React from "react";
import {
  ArrowDownUp,
  Check,
  ChevronDown,
  Filter,
  Search,
} from "lucide-react";

type SubmissionsToolbarProps = {
  search: string;
  status: string;
  hackathon: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onHackathonChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

const statusOptions = [
  "All Status",
  "Submitted",
  "Under Review",
  "Accepted",
  "Rejected",
];

const hackathonOptions = [
  "All Hackathons",
  "HackVerse 2026",
  "TechSprint 2026",
  "FutureHack 2026",
];

const sortOptions = [
  "Newest First",
  "Oldest First",
  "Project Name",
];

export default function SubmissionsToolbar({
  search,
  status,
  hackathon,
  sort,
  onSearchChange,
  onStatusChange,
  onHackathonChange,
  onSortChange,
}: SubmissionsToolbarProps) {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(
    null
  );

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search submissions..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <Dropdown
          name="status"
          value={status}
          options={statusOptions}
          icon={<Filter size={16} />}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onChange={onStatusChange}
        />

        <Dropdown
          name="hackathon"
          value={hackathon}
          options={hackathonOptions}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onChange={onHackathonChange}
        />

        <Dropdown
          name="sort"
          value={sort}
          options={sortOptions}
          icon={<ArrowDownUp size={16} />}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
}

type DropdownProps = {
  name: string;
  value: string;
  options: string[];
  icon?: React.ReactNode;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
  onChange: (value: string) => void;
};

function Dropdown({
  name,
  value,
  options,
  icon,
  openDropdown,
  setOpenDropdown,
  onChange,
}: DropdownProps) {
  const isOpen = openDropdown === name;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenDropdown(isOpen ? null : name)}
        className="flex h-11 w-full items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-slate-50 lg:min-w-40"
      >
        <span className="flex items-center gap-2">
          {icon}
          <span className="truncate">{value}</span>
        </span>

        <ChevronDown size={15} className="shrink-0 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-30 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpenDropdown(null);
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50"
            >
              {option}

              {value === option && (
                <Check size={15} className="text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}