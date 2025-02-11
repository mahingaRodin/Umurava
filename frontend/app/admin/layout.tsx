/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text is visible while the font is loading
});

// export const metadata: Metadata = {
//   title: "Umurava Platform",
//   description: "Build Work Experience through Skills Challenges",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* Wrap Sidebar in Suspense for smoother client-side rendering */}
          <Suspense fallback={<div>Loading Sidebar...</div>}>
            <Sidebar />
          </Suspense>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
