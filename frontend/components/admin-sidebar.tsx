"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  CalendarDays,
  ChevronLeft,
  FileText,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Menu,
  Megaphone,
  Settings,
  FileSpreadsheet,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Admission Lead",
    href: "/admin/admission",
    icon: FileSpreadsheet,
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: Megaphone,
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: CalendarDays,
  },
  {
    title: "Documents",
    href: "/admin/documents",
    icon: FileText,
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-200 md:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-card transition-all duration-300 md:static md:z-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${isCollapsed ? "md:w-20" : "md:w-64"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="College Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className={`font-bold transition-opacity ${isCollapsed ? "md:hidden" : ""}`}>Admin Panel</span>
          </Link>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsCollapsed(!isCollapsed)}>
            <ChevronLeft className={`h-5 w-5 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
            <span className="sr-only">{isCollapsed ? "Expand sidebar" : "Collapse sidebar"}</span>
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-[#ff914d]"
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`transition-opacity ${isCollapsed ? "md:hidden" : ""}`}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-[#ff914d]"
          >
            <LogOut className="h-5 w-5" />
            <span className={`transition-opacity ${isCollapsed ? "md:hidden" : ""}`}>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
