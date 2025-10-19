"use client";

import { useState } from "react";

interface NavigationProps {
  user: any;
  setUser: (user: any) => void;
  onNavigate: (page: string) => void;
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-indigo-600">💳</div>
          <h1 className="text-xl font-bold text-gray-900">CreditHub</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            // onClick={() => onNavigate("home")}
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Shop
          </button>
          <button
            // onClick={() => onNavigate("dashboard")}
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Dashboard
          </button>
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-lg transition"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {/* {user?.email?.charAt(0).toUpperCase()} */}aefsrgv
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-900">
              {/* {user?.email} */}sgvdfbdb
            </span>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  Credits:{" "}
                  <span className="font-bold text-indigo-600">
                    {/* {user?.credits} */}sdvsdfvs
                  </span>
                </p>
              </div>
              <button
                // onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
