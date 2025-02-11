/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tab";
import { Header } from "../components/ui/header";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function ChallengeCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative mb-4 h-32 bg-blue-600 rounded-lg">
        <div className="flex justify-center items-center h-full">
          <Image
            src="/logo2.png"
            alt="Umurava logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white-800">Umurava</span>
        </div>
        <Badge className="absolute top-2 right-2 bg-green-500">Open</Badge>
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-black">
          Design a Dashboard for SokoFund
        </h3>

        <div className="space-y-2">
          <div className="text-sm text-black">Skills Needed:</div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX/UI Design</Badge>
            <Badge variant="secondary">User Research</Badge>
            <Badge variant="secondary">User Testing</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-black">Seniority Level:</div>
          <div className="text-sm text-black">Junior, Intermediate, Senior</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-black">Timeline:</div>
          <div className="text-sm text-black">15 Days</div>
        </div>

        <Button className="w-48 text-white bg-blue-600 hover:bg-blue-700">
          View Challenge
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Challs() {
  const [activeTab, setActiveTab] = useState<string>("all"); // State to track the active tab

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <main className="overflow-auto flex-1 p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-black">Challenges</h1>
            <p className="text-sm text-black">
              Join a challenge or a hackathon to gain valuable work experience.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="flex gap-x-4">
                <TabsTrigger
                  value="all"
                  className={`flex gap-2 text-black border border-gray-300 rounded-md px-3 py-2 hover:border-blue-600 ${
                    activeTab === "all" ? "bg-blue-100 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All Challenge
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                    0
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="completed"
                  className={`flex gap-2 text-black border border-gray-300 rounded-md px-3 py-2 hover:border-blue-600 ${
                    activeTab === "completed"
                      ? "bg-blue-100 border-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("completed")}
                >
                  Completed Challenge
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                    0
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="open"
                  className={`flex gap-2 text-black border border-gray-300 rounded-md px-3 py-2 hover:border-blue-600 ${
                    activeTab === "open" ? "bg-blue-100 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("open")}
                >
                  Open Challenge
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                    0
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="ongoing"
                  className={`flex gap-2 text-black border border-gray-300 rounded-md px-3 py-2 hover:border-blue-600 ${
                    activeTab === "ongoing" ? "bg-blue-100 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("ongoing")}
                >
                  Ongoing Challenge
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                    0
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button className="gap-2 text-white bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 text-white" />
              <Link href="/challenge/new">Create New Challenge</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ChallengeCard key={i} />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button className="text-sm text-black" variant="outline" disabled>
              Previous
            </Button>
            <Button
              variant="outline"
              className="text-white bg-blue-600 hover:bg-blue-700"
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
