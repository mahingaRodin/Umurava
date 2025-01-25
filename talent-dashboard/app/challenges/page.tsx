import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FaSearch } from "react-icons/fa";

const Challenges = () => {
  return (
    <div className="flex h-screen">
      <div className="fixed h-screen w-[260px]">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto ml-[260px]">
        <div className="flex-1 p-8">
          {/* header */}
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-lg border w-[800px]"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
