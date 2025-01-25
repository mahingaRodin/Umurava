"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FaBell, FaFileAlt, FaSearch } from "react-icons/fa";
import Image from "next/image";

interface Challenge {
  title: string;
  description: string;
  status: "Open" | "Closed";
  skillsNeeded: string[];
  timeline: string;
  seniorityLevel: string;
  companyLogo: string;
}

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("All Challenge");

  const tabs = [
    { id: "All Challenge", label: "All Challenge", count: 0 },
    { id: "Completed Challenge", label: "Completed Challenge", count: 0 },
    { id: "Open Challenge", label: "Open Challenge", count: 0 },
    { id: "Ongoing Challenge", label: "Ongoing Challenge", count: 0 },
  ];

  const challenges: Challenge[] = [
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="fixed h-screen w-[260px]">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto ml-[260px]">
        <div className="flex-1 p-8">
          {/* header */}
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-lg border w-[800px]"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <FaBell className="text-gray-600" />
              <Image
                src="/images/image.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          {/* welcome section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Challenges</h1>
              <p className="text-gray-600">
                Join a challenge or a hackathon to gain valuable work
                experience,
              </p>
            </div>
          </div>

          {/* challenges */}
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 p-3 rounded-lg border transition group ${
                  activeTab === tab.id
                    ? "bg-blue-300 text-blue-950"
                    : "bg-light-blue-50 text-gray-600 border-blue-200 hover:bg-blue-200"
                }`}
              >
                <FaFileAlt
                  className={`${
                    activeTab === tab.id ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span className="flex items-center">
                  <span>{tab.label}</span>
                  <span
                    className={`ml-2 flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full transition group-hover:bg-blue-500 group-hover:text-white ${
                      activeTab === tab.id
                        ? "bg-blue-700 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
