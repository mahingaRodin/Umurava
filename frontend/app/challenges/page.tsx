"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FaBell, FaFileAlt, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Challenge {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Closed";
  skillsNeeded: string[];
  timeline: string;
  seniorityLevel: string;
  companyLogo: string;
}
interface ChallengeCardProps {
  challenge: Challenge;
}

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
  {
    id: "2",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
  {
    id: "3",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
  {
    id: "4",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
  {
    id: "5",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
  {
    id: "6",
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/images/umurava.png",
  },
];

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge: Challenge,
}) => {
  return (
    <Link href={`/challenges/${Challenge.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 border border-gray-200">
        {/* Header Section */}
        <div className="relative">
          <div className="bg-blue-500 h-36 flex items-center justify-center">
            <Image
              src={Challenge.companyLogo}
              alt="Company Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <span className="absolute top-3 right-3 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow">
            {Challenge.status}
          </span>
        </div>
        {/* Content Section */}
        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-base text-gray-800">
            {Challenge.title}
          </h3>
          {/* Skills Section */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
            <div className="flex flex-row gap-2 flex-wrap">
              {Challenge.skillsNeeded.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-[10px] truncate"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Additional Details */}
          <div>
            <p className="text-sm text-gray-600">
              Seniority Level:{" "}
              <span className="text-gray-400">{Challenge.seniorityLevel}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Timeline: <span>{Challenge.timeline}</span>
            </p>
          </div>
          {/* Divider */}
          <hr className="w-full border-gray-300 my-4" />
          {/* Action Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Challenge
          </button>
        </div>
      </div>
    </Link>
  );
};

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("All Challenge");

  const tabs = [
    { id: "All Challenges", label: "All Challenges", count: 0, href: "#" },
    {
      id: "Completed Challenges",
      label: "Completed Challenges",
      count: 0,
      href: "#",
    },
    { id: "Open Challenges", label: "Open Challenges", count: 0, href: "#" },
    {
      id: "Ongoing Challenges",
      label: "Ongoing Challenges",
      count: 0,
      href: "#",
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
              <Link key={tab.id} href={tab.href}>
                <button
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
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))}
          </div>
          <div className="w-[95px] h-9 p-3 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-[#98a1b2] text-sm font-normal font-['Inter'] leading-tight">
              Previous
            </div>
          </div>
          <div className="text-center text-white text-sm font-normal font-['Inter'] leading-tight">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
