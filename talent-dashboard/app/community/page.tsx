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
      <div className="flex-1 flex justify-center items-center ml-[260px]">
        <div className="w-[542px] bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center space-y-6 shadow-lg">
          {/* Logo/Graphic */}
          <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
            {/* Placeholder for future graphic */}
            <div className="w-16 h-16 bg-gray-300 rounded-full" />
          </div>

          {/* Heading and Subtext */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">
              Join our WhatsApp Community
            </h1>
            <p className="text-lg text-gray-600">
              Get notified on the latest projects and hackathons.
            </p>
          </div>

          {/* Join Button */}
          <button className="w-32 h-12 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;