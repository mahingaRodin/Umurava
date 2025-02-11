"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../footer/page";
import { challengesAPI } from "@/services/api";

const Challs = () => {
  const pathname = usePathname();
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/get-all");
        const data = await response.json();
        console.log("API Response:", data); // Log to check response structure
        setChallenges(data || []); // Directly set the data (assuming it's an array)
      } catch (error) {
        setError("Failed to fetch challenges");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

  const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => (
    <Link href={`/challenges/${challenge.id}`} className="block ml-[80px]">
      <div className="overflow-hidden w-80 bg-white rounded-lg border border-gray-200 shadow-lg">
        {/* Header Section */}
        <div className="relative">
          <div className="flex justify-center items-center h-36 bg-blue-500">
            <Image
              src={challenge.companyLogo || "/default-logo.png"} // Use a default image or null if the logo is missing
              alt="Company Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <span className="absolute top-3 right-3 px-4 py-1 text-sm text-white bg-green-500 rounded-full shadow">
            {challenge.status}
          </span>
        </div>
        {/* Content Section */}
        <div className="p-5 space-y-3">
          <h3 className="text-base font-semibold text-gray-800">
            {challenge.title}
          </h3>
          {/* Skills Section */}
          <div>
            <p className="mb-2 text-sm text-gray-600">Skills Needed:</p>
            <div className="flex flex-row flex-wrap gap-2">
              {(challenge.skillsNeeded || []).map((skill, index) => (
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
              <span className="text-gray-400">{challenge.seniorityLevel}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Timeline: <span>{challenge.timeline}</span>
            </p>
          </div>
          {/* Divider */}
          <hr className="my-4 w-full border-gray-300" />
          {/* Action Button */}
          <button className="py-2 w-full text-white bg-blue-500 rounded-lg transition hover:bg-blue-600">
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

        <div className="flex gap-8 items-center">
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

      <div className="flex gap-2 items-center px-8 py-4 text-sm">
        <Link
          href="/challenges"
          className="flex gap-2 items-center text-gray-600 hover:text-gray-900"
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
        {challenges.length === 0 ? (
          <p>No challenges available</p>
        ) : (
          challenges.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
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
