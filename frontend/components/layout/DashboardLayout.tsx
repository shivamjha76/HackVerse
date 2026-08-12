"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import ParticipantSidebar from "./ParticipantSidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const pathname = usePathname();

  const isParticipant = pathname.startsWith("/participant");

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      {/* Topbar */}
      <div className="shrink-0">
        <Topbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Sidebar */}
        {isParticipant ? <ParticipantSidebar /> : <Sidebar />}

        {/* Main Area */}
        <main className="min-h-0 flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}