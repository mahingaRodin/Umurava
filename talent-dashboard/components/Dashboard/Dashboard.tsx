import React from "react";
import Sidebar from "./Sidebar";
import { FaBell, FaEye, FaSearch } from "react-icons/fa";

interface Challenge {
  title: string;
  description: string;
  status: "Open" | "Closed";
  skillsNeeded: string[];
  timeline: string;
  seniorityLevel: string;
  companyLogo: string;
}

const Dashboard: React.FC = () => {
  const challenges: Challenge[] = [
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurava-logo.png",
    },
    {
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurava-logo.png",
    },
    {
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurava-logo.png",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 rounded-lg border w-[700px]"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200">
            <FaBell className="text-gray-600 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
