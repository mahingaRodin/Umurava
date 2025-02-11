"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

const Community = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed h-screen w-[260px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[260px] relative bg-white bg-opacity-100">
        {/* Centered WhatsApp Community Card */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[542px] h-[489px] bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center space-y-6 shadow-lg">
            {/* Telegram Icon Circle */}
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold text-gray-800">
                Join our WhatsApp community
              </h1>
              <p className="text-base text-gray-600">
                Get notified on the latest projects and hackathons
              </p>
            </div>

            {/* Join Button */}
            <button className="w-24 h-10 bg-blue-500 text-white rounded-lg text-base font-medium hover:bg-blue-600 transition">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
