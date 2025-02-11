"use client";
import { Button } from "../../_components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../_components/card";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Challenge {
  id?: string;
  title: string;
  skills: string[];
  seniority: string;
  timeline: string;
  status?: "Open" | "Closed";
  skillsNeeded?: string[];
  companyLogo?: string;
}

interface ChallengeCardAProps {
  challenge: Challenge;
}

const challenges: Challenge[] = [
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "Intermediate, Senior",
    timeline: "30 Days",
  },
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "Junior, Intermediate",
    timeline: "20 Days",
  },
];

const ChallengeCardA: React.FC<ChallengeCardAProps> = ({ challenge }) => {
  return (
    <Link href={``} className="block ml-[75px]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 border border-gray-200">
        <div className="relative">
          <div className="bg-blue-500 h-36 flex items-center justify-center">
            {
              <Image
                src="/images/umurava.png"
                alt="Company Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            }
          </div>
          {challenge.status && (
            <span className="absolute top-3 right-3 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow">
              {challenge.status}
            </span>
          )}
        </div>
        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-base text-gray-800">
            {challenge.title}
          </h3>
          <div>
            <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
            <div className="flex flex-row gap-2 flex-wrap">
              {challenge.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-[10px] truncate"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Seniority Level:{" "}
            <span className="text-gray-400">{challenge.seniority}</span>
          </div>
          <div className="text-sm text-gray-600">
            Timeline: <span>{challenge.timeline}</span>
          </div>
          <hr className="w-full border-gray-300 my-4" />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Challenge
          </button>
        </div>
      </div>
    </Link>
  );
};

const ChallPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-2">
          Explore Challenges & Hackathons
        </h1>
        <p className="text-muted-foreground">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa's largest workforce of digital professionals.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {challenges.map((challenge, index) => (
          <ChallengeCardA key={index} challenge={challenge} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-4 py-2 text-sm rounded-md font-bold text-[#007bff] border-2 border-[#007bff] bg-transparent transition-all ease-in-out duration-300 hover:bg-[#007bff] hover:text-white">
          View More
        </button>
      </div>
    </div>
  );
};

export default ChallPage;
