"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaFile,
  FaUserPlus,
  FaCog,
  FaHeadphones,
  FaGift,
} from "react-icons/fa";
import ProfileSection from "./ProfileSection";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-blue-600 text-white w-62 min-h-screen p-4 lg:w-64 fixed lg:relative transition-all duration-300 ${
          isSidebarOpen ? "left-0" : "-left-64"
        } lg:left-0`}
      >
        <div className="flex items-center justify-between lg:block">
          <Image
            src="/images/umurava.png"
            alt="Umurava"
            width={55}
            height={35}
          />
          {/* Add a toggle button for smaller screens */}
          <button
            className="text-black text-2xl lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaHome className="mr-2" />
                <span className="text-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/challenges"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaFile className="mr-2" />
                <span className="text-sm">Challenges & Hackathons</span>
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaUserPlus className="mr-2" />
                <span className="text-sm">Community</span>
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 mt-10 lg:mt-44">
            <li>
              <Link
                href="/settings"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaCog className="mr-2" />
                <span className="text-sm">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaHeadphones className="mr-2" />
                <span className="text-sm">Help Center</span>
              </Link>
            </li>
            <li>
              <Link
                href="/refer"
                className="flex items-center p-2 hover:bg-white rounded hover:text-blue-500"
              >
                <FaGift className="mr-2" />
                <span className="text-sm">Refer Family and Friends</span>
              </Link>
            </li>
            <li className="mt-auto">
              <ProfileSection />
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`ml-0 lg:ml-64 transition-all duration-300 ${
          isSidebarOpen ? "ml-62" : "ml-0"
        }`}
      >
        {/* Your main content goes here */}
      </main>
    </>
  );
};

export default Sidebar;
