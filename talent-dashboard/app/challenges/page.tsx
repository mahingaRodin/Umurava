"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FaBell, FaFileAlt, FaSearch } from "react-icons/fa";
import Image from "next/image";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("All Challenges");

  const tabs = [
    { id: "All Challenge", label: "All Challenge", count: 0 },
    { id: "Completed Challenge", label: "Completed Challenge", count: 0 },
    { id: "Open Challenge", label: "Open Challenge", count: 0 },
    { id: "Ongoing Challenge", label: "Ongoing Challenge", count: 0 },
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
                className={`flex items-center space-x-2 p-3 rounded-lg border transition ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-light-blue-50 text-gray-600 border-blue-200 hover:bg-blue-200"
                }`}
              >
                <FaFileAlt />
                <span>{tab.label}</span>
                <span
                  className={`flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full ${
                    activeTab === tab.id
                      ? "bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-700 group-hover:bg-blue-500 group-hover:text-white"
                  }`}
                >
                  {tab.count}
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
