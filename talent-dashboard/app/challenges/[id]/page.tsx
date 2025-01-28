"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import Link from "next/link";
import React from 'react'

const ChallengeDetails = () => {
  return (
    <div className="flex h-screen bg-gray-50">
          <div className="fixed h-screen w-[260px]">
              <Sidebar />
          </div>
          
          <div className="flex-1 ml-[260px]">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Link
                      href="/challenges"
                      className="hover:text-gray-900"
                  >
                      Go Back
                      </Link>
              </div>
          </div>
    </div>
  )
}

export default ChallengeDetails
