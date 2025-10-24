"use client";

import { Book, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Users", icon: User, path: "/dashboard" },
    { name: "My Courses", icon: Book, path: "/dashboard" },
    { name: "History", icon: Settings, path: "/dashboard/history" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-gray-800">
          LearnHub
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              href={item?.path as string}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-4 py-2 my-2 text-left rounded hover:bg-gray-700 transition ${
                active === item.name ? "bg-gray-700" : ""
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
