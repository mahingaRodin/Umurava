"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search here..."
            className="w-full max-w-[300px] h-10 rounded-lg border border-gray-300 bg-gray-50 px-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button className="p-2 bg-transparent hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
