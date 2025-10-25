"use client";

import { logout, selectUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/about", label: "About" },
    { path: "/community", label: "Community" },
  ];

  return (
    <nav className="bg-white shadow-md fixed z-20 w-full   ">
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <Link
            href={"/"}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            CreditHub
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks?.map((el) => (
            <Link
            key={el.label}
              className={`text-gray-700 hover:text-indigo-600 font-medium transition ${
                pathname === el.path ? "text-indigo-600" : ""
              }`}
              href={el.path}
            >
              {el.label}
            </Link>
          ))}

          {user && (
            <Link
              href={"/dashboard"}
              // onClick={() => onNavigate("dashboard")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* User Menu */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2  rounded-lg transition"
            >
              <div className="w-12 h-12 cursor-pointer bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {user?.name[0].toUpperCase() + "" + user?.name[1].toUpperCase()}
              </div>
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <Link
                  href={"/dashboard"}
                  className="w-full block text-left px-5 py-3 text-indigo-600 hover:bg-indigo-50 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="w-full rounded-b-md text-left px-5 py-3 text-red-600 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white py-2 px-4 rounded-md"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-2 px-4 rounded-md"
              href={"/register"}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
