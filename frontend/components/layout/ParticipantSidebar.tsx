"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Trophy,
  Users,
  FileCheck2,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/participant/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Explore Hackathons",
    href: "/hackathons",
    icon: Search,
  },
  {
    title: "My Hackathons",
    href: "/participant/hackathons",
    icon: Trophy,
  },
  {
    title: "My Teams",
    href: "/teams",
    icon: Users,
  },
  {
    title: "My Submissions",
    href: "/submissions",
    icon: FileCheck2,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "#",
    icon: Settings,
  },
];

export default function ParticipantSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col bg-white">
      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href !== "/participant/dashboard" &&
              item.href !== "#" &&
              pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button
          type="button"
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}