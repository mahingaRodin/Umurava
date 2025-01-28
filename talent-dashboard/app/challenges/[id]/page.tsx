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
    for businesses and their workforce in Africa is partnering with Umurava to 
    run a Skills Challenge for Product Design. The Fintech Company offers 
    Payroll Management System to Employers and Embedded Financial services 
    and products to Employees and Gig Workers across Africa.`,
};

const productRequirements = [
  "UX research to understand Project Requirements",
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
  "The Product Designer will provide all documents and deliverables to the client before the review meetings",
];

const notes = [
  "Find Product Requirements Summary and Features Description for below Pay HERE",
];

const keyInstructions = [
  {
    icon: "mail",
    title: "talent@umurava.africa",
    subtitle: "Contact Email",
  },
  {
    icon: "category",
    title: "Web design",
    subtitle: "Challenge Category",
  },
  {
    icon: "calendar",
    title: "7 Days",
    subtitle: "Duration",
  },
  {
    icon: "money",
    title: "$150 - $400",
    subtitle: "Money Prize",
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

        {/* Main Content */}
        <div className="flex p-8 gap-8">
          {/* Left Column - Project Details */}
          <div className="flex-1">
            {/* Company Logo */}
            <div className="bg-blue-500 w-full h-[280px] rounded-t-lg flex items-center justify-center">
              <Image
                src="/images/umurava.png"
                alt="Umurava"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Project Content - Now in a white card */}
            <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">{projectBrief.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {projectBrief.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold">Tasks:</h3>

                  <div>
                    <h4 className="font-medium mb-2">Product Requirements</h4>
                    <ul className="space-y-2">
                      {productRequirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Product Design:</h4>
                    <ul className="space-y-2">
                      {productDesign.map((design, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{design}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Deliverables:</h4>
                    <ul className="space-y-2">
                      {deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">NOTE:</h4>
                    <ul className="space-y-2">
                      {notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Instructions */}
          <div className="w-[300px]">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold mb-4">Key Instructions:</h3>
              <p className="text-sm text-gray-600 mb-6">
                You are free to schedule the clarification call with the team
                via the:
              </p>

              <div className="space-y-4">
                {keyInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      {instruction.icon === "mail" && (
                        <FaEnvelope className="text-blue-500" />
                      )}
                      {instruction.icon === "category" && (
                        <Image
                          src="/images/umurava.png"
                          alt="Web design"
                          width={20}
                          height={20}
                        />
                      )}
                      {instruction.icon === "calendar" && (
                        <FaCalendar className="text-blue-500" />
                      )}
                      {instruction.icon === "money" && (
                        <FaDollarSign className="text-blue-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{instruction.title}</p>
                      <p className="text-sm text-gray-500">
                        {instruction.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition">
                Submit your work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
