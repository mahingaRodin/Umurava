"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../footer/page";

const Challs = () => {
  const pathname = usePathname();
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
    {
      id: "7",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      id: "8",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      id: "9",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      id: "10",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      id: "11",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/images/umurava.png",
    },
    {
      id: "12",
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
  }) => (
    <Link href={`/challenges/${Challenge.id}`} className="block ml-[80px]">
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/challs", label: "Challenges & Hackathons" },
    { href: "/institutions", label: "For Educational Institutions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="px-[100px] py-6 flex justify-between items-center border-b">
        <Link href="/">
          <Image
            src="/images/umurava-logo.png"
            alt="Umurava Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-[#2b71f0]"
                  : "text-[#2b3338] hover:text-[#2b71f0]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/join"
          className="px-6 py-3 bg-[#041738] text-white text-sm font-semibold rounded-md hover:bg-[#0a2357] transition-colors"
        >
          Join the Program
        </Link>
      </nav>

      <div className="px-8 py-4 flex items-center gap-2 text-sm">
        <Link
          href="/challenges"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <div className="w-6 h-6 p-1.5 bg-white rounded border border-[#e4e7ec] flex items-center justify-center">
            <FaArrowLeft size={12} />
          </div>
          Go Back
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/challenges" className="text-blue-500 hover:text-gray-900">
          Challenges & Hackathons
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Challs;
