"use client";

import React, { useState } from "react";
import DashBoard from "./Dashboard";
import ChallengeCard from "../challenge/page";

const AdminBoard = () => {
  const [activePage] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      <div className="flex-1 ml-0 overflow-y-auto">
        {activePage === "Dashboard" && <DashBoard />}
        {activePage === "Challenges & Hackathons" && <ChallengeCard />}
      </div>
    </div>
  );
};

export default AdminBoard;
