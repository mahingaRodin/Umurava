"use client";
import React, { useEffect } from "react";
import AdminBoard from "./components/AdminBoard";
import Challs from "./challenge/page";
import { useRouter } from "next/navigation";

// Correct Default Export
const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      router.push("/dashboard"); // Redirect normal users
    }
  }, []);

  return (
    <div>
      <AdminBoard />
      <Challs />
    </div>
  );
};

export default Dashboard;

