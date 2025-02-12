"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Key, ReactNode, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../footer/page";
import { challengesAPI } from "@/services/api";

const Challs = () => {
  const pathname = usePathname();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  interface Challenge {
    challengeTitle: ReactNode;
    duration: ReactNode;
    moneyPrize: ReactNode;
    _id: Key | null | undefined;
    deadline: ReactNode;
    contactEmail: ReactNode;
    projectDescription: ReactNode;
    projectBrief: ReactNode;
    projectDescriptionAndTasks: ReactNode;
    id: string;
    title: string;
    description: string;
    status: "Open" | "Closed";
    skillsNeeded?: string[];
    timeline: string;
    seniorityLevel: string;
    companyLogo?: string;
  }

  useEffect(() => {
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/challenges/get-all"
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        // Ensure the response is JSON
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON, but got another format");
        }

        const data = await response.json();
        console.log("API Response:", data);
        setChallenges(data || []);
      } catch (error) {
        setError("Failed to fetch challenges");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []); // ✅ Added dependency array to run only once on mount

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Error: {error}
      </div>
    );
  }

  const ChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => (
    <Link href={`/challenges/${challenge.id}`} className="block ml-[80px]">
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg w-80">
        {/* Header Section */}
        <div className="relative">
          <div className="flex items-center justify-center bg-blue-500 h-36">
            <Image
              src={challenge.companyLogo || "/default-logo.png"}
              alt="Company Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <span className="absolute px-4 py-1 text-sm text-white bg-green-500 rounded-full shadow top-3 right-3">
            {challenge.status}
          </span>
        </div>
        {/* Content Section */}
        <div className="p-5 space-y-3">
          {/* Challenge Title */}
          <h3 className="text-base font-semibold text-gray-800">
            {challenge.challengeTitle}
          </h3>
          {/* Skills Section (Optional - you can remove if not needed) */}
          <div>
            <p className="mb-2 text-sm text-gray-600">Skills Needed:</p>
            <div className="flex flex-row flex-wrap gap-2">
              {(challenge.skillsNeeded ?? []).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-[10px] truncate"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Challenge Details */}
          <div>
            <p className="text-sm text-gray-600">
              <strong>Deadline:</strong> {challenge.deadline}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Duration:</strong> {challenge.duration}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Prize:</strong> ${challenge.moneyPrize}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Contact:</strong> {challenge.contactEmail}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Description:</strong> {challenge.projectDescription}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Brief:</strong> {challenge.projectBrief}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Tasks:</strong> {challenge.projectDescriptionAndTasks}
            </p>
          </div>
          {/* Divider */}
          <hr className="w-full my-4 border-gray-300" />
          {/* Action Button */}
          <button
            className="w-full py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => (window.location.href = "/login")} // This will navigate to the login page
          >
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

      <div className="flex items-center gap-2 px-8 py-4 text-sm">
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

      <div className="grid grid-cols-4 gap-6 mt-10 px-10">
        {challenges.length === 0 ? (
          <p className="col-span-4 text-center text-gray-500 text-lg">
            No challenges available
          </p>
        ) : (
          challenges.map((challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))
        )}
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Challs;
