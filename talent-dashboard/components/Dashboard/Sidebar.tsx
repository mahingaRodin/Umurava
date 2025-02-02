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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < BREAKPOINTS.laptop;
      setIsMobile(mobileView);
      setSidebarOpen(!mobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [pathname, isMobile]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobile && isSidebarOpen);
  }, [isMobile, isSidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleJoinCard = () => setCardVisible((prev) => !prev);

  const navItems = [
    {
      icon: <FaHome className="sidebar-icon" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <FaFile className="sidebar-icon" />,
      label: "Challenges & Hackathons",
      href: "",
    },
    {
      icon: <FaUserPlus className="sidebar-icon" />,
      label: "Community",
      href: "",
      onClick: toggleJoinCard,
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
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed lg:static w-[280px] min-h-screen bg-blue-600 text-white p-6 transition-transform z-50 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Umurava"
              width={55}
              height={35}
              className="transition-transform hover:scale-105"
            />
          </Link>
          {isMobile && (
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white"
              onClick={toggleSidebar}
            >
              <FaTimes size={20} />
            </button>
          )}
        </div>

        <nav className="flex-grow flex flex-col">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="sidebar-link group">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 mt-auto pt-8">
            {bottomNavItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="sidebar-link group">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-white/20">
            <ProfileSection />
          </div>
        </nav>
      </aside>

      {isCardVisible && (
        <div className="fixed inset-0 flex justify-center items-center z-40">
          <div className="w-[542px] h-[489px] bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center space-y-6 shadow-lg">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
              <FaUserPlus className="w-12 h-12 text-blue-500" />
            </div>
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold text-gray-800">
                Join our WhatsApp community
              </h1>
              <p className="text-base text-gray-600">
                Get notified on the latest projects and hackathons
              </p>
            </div>
            <button className="w-24 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Join
            </button>
          </div>
        </div>
      )}

      <main className="flex-grow lg:ml-0 transition-all duration-300" />
    </div>
  );
};

export default Sidebar;
