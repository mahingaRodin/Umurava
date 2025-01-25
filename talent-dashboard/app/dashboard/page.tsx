"use client";
import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FaBell, FaEye, FaFile, FaSearch } from "react-icons/fa";
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

interface StatsCardProps {
  title: string;
  count: string;
  isActive?: boolean;
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
          {/* Header */}
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

          {/* Welcome Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Welcome back Hilaire,</h1>
              <p className="text-gray-600">
                Build Work Experience through Skills Challenges
              </p>
            </div>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              <FaEye />
              View Profile
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatsCard title="Completed Challenges" count="05" />
            <StatsCard title="Open Challenges" count="200" />
            <StatsCard title="Ongoing Challenges" count="200" />
          </div>

          {/* Recent Challenges */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Challenges</h2>
            <button className="text-blue-500">See all →</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  count: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-1 h-12 bg-blue-500 rounded-full"></div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
      </div>
      <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
        <FaFile className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  </div>
);

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden w-76">
    <div className="relative">
      <div className="bg-blue-500 h-40 flex items-center justify-center">
        <Image
          src={challenge.companyLogo}
          alt="Company Logo"
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
      <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
        {challenge.status}
      </span>
    </div>
    {/* content section */}
    <div className="p-6 space-y-4">
      <h3 className="font-semibold mb-4 text-sm">{challenge.title}</h3>
      {/* skills section */}
      <div>
        <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
        <div className="flex flex-row gap-2 flex-wrap">
          {challenge.skillsNeeded.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-[10px] truncate"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Seniority Level:{" "}
          <span className="text-gray-400">{challenge.seniorityLevel}</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Timeline: <span>{challenge.timeline}</span>
        </p>
      </div>
      <hr className="w-full border-gray-300 my-4" />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        View Challenge
      </button>
    </div>
  </div>
);

export default Dashboard;
