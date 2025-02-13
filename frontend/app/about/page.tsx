"use client";
import { Button } from "@/_components/button";
import { Card, CardContent } from "@/_components/card";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../footer/page";

const About = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/challs", label: "Challenges & Hackathons" },
    { href: "/institutions", label: "For Educational Institutions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="px-[100px] py-6 flex justify-between items-center border-b">
        <Link href="/">
          <Image
            src="/images/umurava-logo.png"
            alt="Umurava Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-[#2b71f0]"
                  : "text-[#2b3338] hover:text-[#2b71f0]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/join"
          className="px-6 py-3 bg-[#041738] text-white text-sm font-semibold rounded-md hover:bg-[#0a2357] transition-colors"
        >
          Join the Program
        </Link>
      </nav>

      {/* hero section */}
      <div className="container mx-auto px-4 py-12 md:py-16 space-x-20 ml-[220px]">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B71F0] ml-36">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed ml-36">
                With 3 years of experience matching African digital talents to
                local and global job markets, we still remain with a big number
                of jobs that remain unfilled due to the lack of experienced
                African Talents.
              </p>
              <p className="leading-relaxed ml-36">
                Driven by our mission to place skilled and professional digital
                talent, we created Skills Challenges as a project-based learning
                solution for talents to gain real-world experience, solve
                problems, and builf portfolios so that they become ready for
                global job markets.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#2B71F0] p-4 w-[350px] h-[350px]">
            <Image
              src="/images/video.png"
              alt="Umurava Skills Challenges"
              fill
              className="w-[40px] h-[20px] rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 bg-[#F9FAFB]">
        <h1 className="text-3xl font-bold text-center mb-8 ml-46">
          Why we are solving this problem
        </h1>

        <div className="grid gap-6 md:grid-cols-2 w-[1000px] ml-48 mr-48">
          {/* First card spans the full width */}
          <Card className="bg-[#3B82F6] text-white col-span-full">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-3">
                Bridging the Experience Gap
              </h2>
              <p className="text-white/90">
                Many talents acquired theoretical knowledge and are rejected
                from jobs because they lack work experience and are not able to
                put in actions what they acquired in the schools.
              </p>
            </CardContent>
          </Card>

          {/* Second card */}
          <Card className="bg-[#3B82F6] text-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-3">
                Bridging Education and Employment
              </h2>
              <p className="text-white/90">
                Traditional education doesn&apos;t always prepare talents for the
                demands of the tech and digital economy and we are providing
                in-demand skills through Skills Challenges.
              </p>
            </CardContent>
          </Card>

          {/* Third card */}
          <Card className="bg-[#3B82F6] text-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-3">
                Preparing Talents for Global Job Markets
              </h2>
              <p className="text-white/90">
                We are ensuring that African talents shine globally and that's
                why we are equipping them with global technical experience and
                standout globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="container mx-auto px-4 py-16 md:py-24 ml-[200px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ml-36">
              Skills Challenges Program is built on the Umurava Talent
              Marketplace Platform
            </h2>
            <div className="space-y-4 text-gray-600 ml-36">
              <p>
                A Project-based Learning Solution aimed at providing young and
                senior talents with an opportunity to showcase their skills to
                real-world projects and challenges from our partner companies
                and organizations.
              </p>
              <p>
                Umurava Skills Challenges enables young talents to build a
                portfolio and experience that increases their readiness to
                access job opportunities and projects.
              </p>
            </div>
            <Button
              size="lg"
              className="w-[207px] h-14 px-6 py-[21px] bg-[#2b71f0] rounded-md justify-center items-center gap-2 inline-flex ml-36"
            >
              <span className="text-center text-white text-base font-semibold font-['Work Sans'] leading-normal tracking-tight">
                Get Started
              </span>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/page.png"
              alt="Umurava platform interface"
              width={600}
              height={450}
              className="w-[400px] h-[300px] rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
