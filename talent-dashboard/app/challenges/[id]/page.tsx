"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaCalendar,
  FaDollarSign,
  FaEnvelope,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import Image from "next/image";

const projectBrief = {
  title: "Project Brief : Payroll and HR Management System",
  description: `A Fintech company that is developing a Digital Financial Platform designed 
    to manage their workforce in Africa. The partnership with Umurava to 
    run a skills Challenge for their Design Team. This project covers UI/UX 
    Payroll Management System for Employers and Employees and other services 
    and products to Employees and Gig Workers across Africa.`,
};

const productRequirements = [
  "UI research to understand Project Requirements",
  "Understanding User Needs",
  "Understanding Business Goals",
  "Determine interaction between users",
  "Requirements Catalog",
];

const productDesign = [
  "User Interface Design for each step",
  "Creating wireframes to outline the basic structure and layout of the web and mobile app",
  "Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience",
  "Ensuring the web application works seamlessly across web, mobile, and tablet devices",
  "Provide a feedback session for in-development guidance",
];

const deliverables = [
  "Requirements Catalog and User Interaction Diagram",
  "User Interface Mockups",
  "Payroll and HR System Design Completed",
];

const notes = [
  "Find Product Requirements Summary and Features Description for below the HERE",
];

const keyInstructions = [
  {
    icon: FaEnvelope,
    title: "talent@umurava.africa",
    subtitle: "Contact Email",
  },
  {
    icon: "logo",
    title: "Web design",
    subtitle: "Challenge Category",
  },
  {
    icon: FaCalendar,
    title: "7 Days",
    subtitle: "Duration",
  },
  {
    icon: FaDollarSign,
    title: "$150 - $400",
    subtitle: "Prize Pool",
  },
];

const ChallengeDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="fixed h-screen w-[260px]">
        <Sidebar />
      </div>

      <div className="flex-1 ml-[260px]">
        {/* Header with search and profile */}
        <div className="p-4 bg-white border-b flex justify-between items-center">
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

        {/* Navigation breadcrumb */}
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
          <Link
            href="/challenges"
            className="text-gray-600 hover:text-gray-900"
          >
            Challenges & Hackathons
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-500">Design a Dashboard for Sokofund</span>
        </div>

        {/* Rest of your existing content */}
        <div className="flex p-8 gap-8">{/* ... existing content ... */}</div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
