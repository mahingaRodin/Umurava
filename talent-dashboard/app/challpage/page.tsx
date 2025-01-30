"use client";
import { Badge } from "@/_components/badge";
import { Button } from "@/_components/button";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/_components/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


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

const ChallengeCard: React.FC<ChallengeCardProps> = ({challenge: Challenge}) => {
  return (
    <Link href={``} className="block">
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
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-base text-gray-800">
          {Challenge.title}
        </h3>
        <div>
          <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
          <div className="flex flex-row gap-2 flex-wrap">
            {Challenge.skillsNeeded.map((skill, index) => (
              <span key={index} className="text-sm text-gray-600">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

const ChallPage = () => {
  const router = useRouter();

  const challenges = [
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

  const goToChallengesPage = () => {
    router.push("/challenges");
  };
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-40 mr-40 w-[1800px]">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="p-4 bg-[#FFFFFF] border border-[#FFFFFF] rounded-xl shadow-md ml-14 mr-14"
          >
            <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-lg rounded-lg">
              <Badge
                variant="secondary"
                className="absolute right-4 top-4 bg-[#0F973D] text-white hover:bg-[#0F973D]"
              >
                Open
              </Badge>

              <CardHeader
                className="p-4 bg-cover bg-center h-48 bg-[#2B71F0]"
                style={{
                  backgroundImage: `url('/images/umurava.png'), linear-gradient(to bottom, #2B71F0, #2B71F0)`,
                  backgroundSize: "auto 30%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></CardHeader>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-2">
                  {challenge.title}
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Skills Needed:
                    </p>
                    <div className="flex flex-wrap gap-2 outline-blue-600 text-blue-600">
                      {challenge.skills.map((skill, i) => (
                        <Badge key={i} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Seniority Level:
                    </p>
                    <p className="text-sm">{challenge.seniority}</p>{" "}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Timeline:
                    </p>
                    <p className="text-sm">{challenge.timeline}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  className="w-[100px] rounded-lg bg-[#2B71F0] hover:bg-[#3158d0] text-sm"
                  onClick={goToChallengesPage}
                >
                  View Challenges
                </Button>
              </CardFooter>
            </Card>
          </div>
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
