"use client";
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
  return (
    <aside className="bg-blue-600 text-white w-62 min-h-screen p-4">
      <Image src="/images/umurava.png" alt="Umurava" width={55} height={35} />
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
        <ul className="space-y-2 mt-44">
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
  );
};

export default Sidebar;
