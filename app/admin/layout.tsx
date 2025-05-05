"use client";

import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { usePathname } from "next/navigation";
import type { Metadata } from 'next'



interface AdminLayoutProps {
  children: ReactNode;
}



export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const isAdminRoot = pathname === "/admin" || pathname === "/admin/";

  console.log("Current pathname:", pathname);
  console.log("Is admin root:", isAdminRoot);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {!isAdminRoot && <AdminSidebar />}
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
