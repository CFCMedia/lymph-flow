"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiBookOpen } from "react-icons/hi";
import { GiKnifeFork } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import LogoutModal from "./LogoutModal";

export default function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const items = [
    {
      label: "Home",
      href: "/homepage",
      icon: AiFillHome,
    },
    {
      label: "Ebook",
      href: "/e-books",
      icon: HiBookOpen,
    },
    {
      label: "Recipe",
      href: "/recipe",
      icon: GiKnifeFork,
    },
  ];

  async function handleLogout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      router.push("/login");
    }
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto flex items-center justify-around h-16">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1"
              >
                <Icon
                  size={22}
                  className={isActive ? "text-emerald-600" : "text-gray-400"}
                />
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-emerald-600" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* LOGOUT */}
          <button
            onClick={() => setShowLogout(true)}
            className="flex flex-col items-center justify-center gap-1"
          >
            <FiLogOut size={22} className="text-gray-400" />
            <span className="text-xs font-semibold text-gray-400">Logout</span>
          </button>
        </div>
      </nav>

      {/* MODAL */}
      <LogoutModal
        open={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}
