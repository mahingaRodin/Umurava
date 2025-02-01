"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaFile,
  FaUserPlus,
  FaCog,
  FaHeadphones,
  FaGift,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ProfileSection from "./ProfileSection";
import { BREAKPOINTS } from "@/constants/constant";

const Sidebar: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const toggleJoinCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle screen resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.laptop);
      if (window.innerWidth >= BREAKPOINTS.laptop) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobile, isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    {
      icon: <FaHome className="sidebar-icon" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <FaFile className="sidebar-icon" />,
      label: "Challenges & Hackathons",
      href: "/challenges",
      onclick: toggleJoinCard,
    },
    {
      icon: <FaUserPlus className="sidebar-icon" />,
      label: "Community",
      href: "/community",
    },
  ];

  const bottomNavItems = [
    {
      icon: <FaCog className="sidebar-icon" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <FaHeadphones className="sidebar-icon" />,
      label: "Help Center",
      href: "/help",
    },
    {
      icon: <FaGift className="sidebar-icon" />,
      label: "Refer Family and Friends",
      href: "/refer",
    },
  ];

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Toggle Button - Moved to top right */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          w-[280px] min-h-screen
          bg-blue-600 text-white
          p-6
          transition-transform duration-300 ease-in-out
          z-50
          overflow-y-auto sidebar-scroll
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Umurava"
              width={55}
              height={35}
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>
          {/* Mobile Close Button - Optional additional close button inside sidebar */}
          {isMobile && (
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white"
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
            >
              <FaTimes size={20} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-grow flex flex-col">
          {/* Main Navigation */}
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="sidebar-link group">
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Navigation */}
          <ul className="space-y-2 mt-auto pt-8">
            {bottomNavItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="sidebar-link group">
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile Section */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <ProfileSection />
          </div>
        </nav>
      </aside>

      {isCardVisible && (
        <div className="fixed inset-0 bg-black opacity-50 z-30">
          <div className="fixed inset-0 flex justify-center items-center z-40">
            <div className="w-[542px] h-[489px] bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center space-y-6 shadow-lg">
              {/* Card Content */}
              <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-blue-500"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-2xl font-semibold text-gray-800">
                  Join our WhatsApp community
                </h1>
                <p className="text-base text-gray-600">
                  Get notified on the latest projects and hackathons
                </p>
              </div>
              <button className="w-24 h-10 bg-blue-500 text-white rounded-lg text-base font-medium hover:bg-blue-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow lg:ml-0 transition-all duration-300">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
