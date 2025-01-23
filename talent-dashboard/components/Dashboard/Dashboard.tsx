import React from 'react'
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
    const challenges = [
      {
        title: "Design a Dashboard for SokoFund",
        description: "Create a functional dashboard for a fintech product.",
        status: "Open",
      },
      {
        title: "Develop a Mobile App for Health Monitoring",
        description: "Build an app to track user health metrics.",
        status: "Closed",
      },
    ];
    
  return (
      <div className="flex">
          <Sidebar/>
    </div>
  )
}

export default Dashboard