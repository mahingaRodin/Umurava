/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import Link from "next/link";
import { Filter, Search } from "lucide-react";

export default function chall() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="flex gap-4 items-center px-4 h-16">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 w-4 h-4 text-black -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search here..."
              className="w-full max-w-[300px] pl-8 h-9 rounded-md border border-black bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black text-black"
            />
          </div>
          <Button variant="ghost" size="sm">
            <Filter className="w-4 h-4 text-black" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="text-black">U</AvatarFallback>
          </Avatar>
        </div>
        <nav className="flex gap-2 items-center px-4 py-2 text-sm">
          <Link href="/challenge" className="text-black hover:text-black">
            Go Back
          </Link>
          <span className="text-black">/</span>
          <Link href="/challenge" className="text-black hover:text-black">
            Challenges & Hackathons
          </Link>
          <span className="text-black">/</span>
          <span className="text-blue-600">Design a Dashboard for SokoFund</span>
        </nav>
      </header>
      <div className="container py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="bg-blue-600 aspect-[8/3] rounded-lg mb-4 flex items-center justify-center">
                <img src="/logo2.png" alt="Umurava Logo" className="h-12" />
                <span className="text-xl font-bold text-white-800">
                  Umurava
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-black">Project Brief</h3>
                  <div
                    className="min-h-[100px] text-black"
                    contentEditable={false}
                  >
                    A Fintech company that is developing a Digital Financial
                    Platform designed for businesses and their workforce in
                    Africa is partnering with Umurava to run a Skills Challenge
                    for Product Design. This Fintech Company offers Payroll
                    Management System to Employers and Embedded Financial
                    services and products to Employees and Gig Workers across
                    Africa.
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-black">Tasks:</h3>
                  <h4 className="mb-2 font-bold text-black">
                    Product Requirements
                  </h4>
                  <div
                    className="min-h-[150px] text-black"
                    contentEditable={false}
                  >
                    • UX research to understand Project Requirements •
                    Understanding User Needs • Understanding Business Goals •
                    Determine interaction between users • Requirements Catalog
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-black">Product Design:</h4>
                  <div
                    className="min-h-[150px] text-black"
                    contentEditable={false}
                  >
                    • User Interface Design for each step • Creating wireframes
                    to outline the basic structure and layout of the web and
                    mobile app • Designing visually appealing and user-friendly
                    interfaces for the web and mobile apps focusing on usability
                    and user experience • Ensuring the web application works
                    seamlessly across web, mobile, and tablet devices • Provide
                    a feedback session for in-development guidance
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-black">Deliverables:</h4>
                  <div
                    className="min-h-[100px] text-black"
                    contentEditable={false}
                  >
                    • The Product Designer will provide all documents and
                    deliverables to the client before the review meetings
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-black">NOTE:</h4>
                  <div className="text-black" contentEditable={false}>
                    Find Product Requirements Summary and Features Description
                    for Speedy Pay{" "}
                    <Link href="https://docs.google.com/document/d/1cKhD5_inceRWSFiF97EE9uIs2w_iHTGSOkFETCv2gv0/edit?tab=t.0">
                      <u>HERE</u>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 font-bold text-black">Key Instructions:</h3>
              <h4 className="mb-4 text-black">
                You are free to schedule the clarification call with the team
                via this
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-black">
                    Contact Email
                  </label>
                  <Input
                    defaultValue="talent@umurava.africa"
                    className="text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-black">
                    Challenge Category
                  </label>
                  <Input defaultValue="Web design" className="text-black" />
                </div>

                <div>
                  <label className="text-sm font-bold text-black">
                    Duration
                  </label>
                  <Input defaultValue="7 Days" className="text-black" />
                </div>

                <div>
                  <label className="text-sm font-bold text-black">
                    Money Prize
                  </label>
                  <Input defaultValue="$150 - $400" className="text-black" />
                </div>
              </div>
            </Card>

            <div className="flex gap-2">
              <Button
                className="flex-1 text-white bg-red-500 border-red-500 hover:bg-red-800"
                asChild
              >
                <Link href="/challenge">Delete</Link>
              </Button>
              <Button className="flex-1 text-white bg-blue-600 hover:bg-gray-800">
                <Link href="../challenge/update">Edit</Link>
              </Button>
            </div>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-black">Participants</h3>
                <span className="text-xs text-white bg-blue-600 rounded-full">
                  5+
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Hilaire Sh", role: "Product Designer" },
                  { name: "Christian Mand", role: "UX/UI Designer" },
                  { name: "Jolly Michel", role: "Content Creator" },
                  {
                    name: "Dr. Samuel Smith",
                    role: "Mental Health Professional",
                  },
                  { name: "Dr. Lily Chen", role: "Dermatologist" },
                ].map((participant, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="text-black">
                        {participant.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-black truncate">
                        {participant.name}
                      </p>
                      <p className="text-xs text-black">{participant.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex gap-2">
              <Button className="flex-1 text-white bg-blue-600 hover:bg-blue-800">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
