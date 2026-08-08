import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      {/* Topbar */}
      <div className="shrink-0">
        <Topbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <main className="min-h-0 flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}