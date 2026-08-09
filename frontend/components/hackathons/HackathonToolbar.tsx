"use client";

import { useState } from "react";

import {
  Search,
  Filter,
  ArrowUpDown,
  RotateCw,
  ChevronDown,
  Check,
} from "lucide-react";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  mode: string;
  onModeChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;

 onRefresh: () => void;
 refreshing: boolean;

};

const statusOptions = [
  "All Status",
  "Draft",
  "Published",
  "Completed",
];

const modeOptions = [
  "All Modes",
  "Online",
  "Offline",
  "Hybrid",
];

const sortOptions = [
  "Newest First",
  "Oldest First",
  "Name",
];

export default function HackathonToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  mode,
  onModeChange,
  sort,
  onSortChange,
  onRefresh,
  refreshing,

}: Props) {
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md lg:flex-row lg:items-center lg:justify-between">
      
      {/* Left Side */}
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search hackathons..."
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              toggleDropdown("status")
            }
            className="flex h-12 w-full items-center justify-between gap-3 rounded-xl border border-slate-200 cursor-pointer px-4 text-sm text-slate-600 transition hover:bg-slate-50 lg:min-w-36"
          >
            <span className="flex items-center gap-2">
              <Filter size={17} />
              {status}
            </span>

            <ChevronDown
              size={15}
              className="text-slate-400"
            />
          </button>

          {openDropdown === "status" && (
            <DropdownMenu
              options={statusOptions}
              value={status}
              onChange={onStatusChange}
              onClose={() =>
                setOpenDropdown(null)
              }
            />
          )}
        </div>

        {/* Mode Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              toggleDropdown("mode")
            }
            className="flex h-12 w-full items-center justify-between gap-3 rounded-xl cursor-pointer border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-slate-50 lg:min-w-32"
          >
            <span className="flex items-center gap-2">
              <Filter size={17} />
              {mode}
            </span>

            <ChevronDown
              size={15}
              className="text-slate-400"
            />
          </button>

          {openDropdown === "mode" && (
            <DropdownMenu
              options={modeOptions}
              value={mode}
              onChange={onModeChange}
              onClose={() =>
                setOpenDropdown(null)
              }
            />
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              toggleDropdown("sort")
            }
            className="flex h-12 w-full items-center justify-between gap-3 rounded-xl cursor-pointer border border-slate-200 px-4 text-sm text-slate-600 transition hover:bg-slate-50 lg:min-w-36"
          >
            <span className="flex items-center gap-2">
              <ArrowUpDown size={17} />
              {sort}
            </span>

            <ChevronDown
              size={15}
              className="text-slate-400"
            />
          </button>

          {openDropdown === "sort" && (
            <DropdownMenu
              options={sortOptions}
              value={sort}
              onChange={onSortChange}
              onClose={() =>
                setOpenDropdown(null)
              }
            />
          )}
        </div>
      </div>

      {/* Refresh */}
      <button
       type="button"
       onClick={onRefresh}
       disabled={refreshing}
       className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
       <RotateCw
       size={18}
       className={refreshing ? "animate-spin" : ""}
      />

       {refreshing ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}

/* Dropdown Menu */

type DropdownMenuProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
};

function DropdownMenu({
  options,
  value,
  onChange,
  onClose,
}: DropdownMenuProps) {
  return (
    <div className="absolute right-0 top-14 z-30 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            onChange(option);
            onClose();
          }}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50"
        >
          <span>{option}</span>

          {value === option && (
            <Check
              size={15}
              className="text-blue-600"
            />
          )}
        </button>
      ))}
    </div>
  );
}