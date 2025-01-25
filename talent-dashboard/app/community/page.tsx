"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from 'react'

const Community = () => {
  return (
      <div className="flex h-screen">
          <div className="fixed h-screen w-[260px]">
              <Sidebar />
          </div>
    </div>
  )
}

export default Community