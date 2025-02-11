/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Award,
  Users,
  Settings,
  HelpCircle,
  UserPlus,
  LogOut,
} from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/challenge",
      label: "Challenges & Hackathons",
      icon: Award,
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
    },
  ];

  const bottomRoutes = [
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
    {
      href: "/help",
      label: "Help Center",
      icon: HelpCircle,
    },
    {
      href: "/refer",
      label: "Refer family & friends",
      icon: UserPlus,
    },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col h-screen">
      <Link href="/" className="py-6 px-4 flex items-center text-2xl font-bold">
        <span>
          <Image
            src="/logo2.png"
            alt="Umurava logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </span>
      </Link>

      <nav className="space-y-2 px-4 flex-1">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <span
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === route.href
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-700/50"
              }`}
            >
              <route.icon
                className={`w-5 h-5 ${
                  pathname === route.href ? "text-blue-600" : "text-white"
                }`}
              />
              {route.label}
            </span>
          </Link>
        ))}
      </nav>

      <nav className="space-y-2 px-4 mb-4">
        {bottomRoutes.map((route) => (
          <Link key={route.href} href={route.href}>
            <span
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === route.href
                  ? "bg-white text-blue-600"
                  : "hover:bg-blue-700/50"
              }`}
            >
              <route.icon
                className={`w-5 h-5 ${
                  pathname === route.href ? "text-blue-600" : "text-white"
                }`}
              />
              {route.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-blue-500 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Profile Avatar"
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Hilaire Sh</span>
            <span className="text-xs text-blue-300">hilaire@uidesign</span>
          </div>
          <LogOut className="ml-auto w-5 h-5 text-blue-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
