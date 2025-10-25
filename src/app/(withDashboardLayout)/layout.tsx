"use client";

import { logout } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  Book,
  Home,
  Settings,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "My Courses", icon: Book, path: "/dashboard/courses" },
    { name: "History", icon: Settings, path: "/dashboard/history" },
  ];

  // Example logout handler
  const handleLogout = () => {
    // Clear token or session (adjust as needed)
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 bg-gray-900 text-gray-200 flex-col">
        <Link
          href={"/"}
          className="text-2xl font-bold p-6 border-b border-gray-800"
        >
          CreditHub
        </Link>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`flex items-center w-full px-4 py-2 my-2 text-left rounded hover:bg-gray-700 transition ${
                pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Buttons */}
        <div className="border-t border-gray-800 p-4 space-y-2">
          <Link
            href="/"
            className="flex items-center px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 rounded hover:bg-gray-700 transition text-red-400"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Sidebar (Mobile Drawer) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-200 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <Link href="/" className="text-2xl font-bold">
            CreditHub
          </Link>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center w-full px-4 py-2 my-2 text-left rounded hover:bg-gray-700 transition ${
                pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Buttons (Mobile) */}
        <div className="border-t border-gray-800 p-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          <button
            onClick={() => {
              setIsSidebarOpen(false);
              handleLogout();
            }}
            className="flex items-center w-full px-4 py-2 rounded hover:bg-gray-700 transition text-red-400"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar (Mobile) */}
        <header className="flex items-center justify-between p-4 bg-gray-900 text-white md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="w-6 h-6"></div> {/* Alignment placeholder */}
        </header>

        <main className="flex-1 p-6 md:p-16 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
