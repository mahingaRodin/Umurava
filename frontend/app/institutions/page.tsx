"use client";

import { Button } from "@/_components/button";
import { Card, CardContent } from "@/_components/card";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Footer from "../footer/page";

const Institutions = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/challs", label: "Challenges & Hackathons" },
    { href: "/institutions", label: "For Educational Institutions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const partners = [
    [
      {
        name: "TORI",
        logo: "/images/tori.png",
      },
      {
        name: "GIDG Kigali",
        logo: "/images/gdg.png",
      },
      {
        name: "The education collaborative",
        logo: "/images/education.png",
      },
      {
        name: "Kepler",
        logo: "/images/kepler.png",
      },
      {
        name: "HILL",
        logo: "/images/hill.png",
      },
      {
        name: "CIBA",
        logo: "/images/CIBA1.png",
      },
      {
        name: "ARED",
        logo: "/images/Ared1.png",
      },
      {
        name: "IGIHE",
        logo: "/images/igihe.png",
      },
      {
        name: "VIAMO",
        logo: "/images/viamo1.png",
      },
      {
        name: "KEPLER",
        logo: "/images/kepler.png",
      },
      {
        name: "Laterite",
        logo: "/images/laterite.png",
      },
      {
        name: "SokoFund",
        logo: "/images/SokoFund.png",
      },
    ],
  ];

  const integrationMethods = [
    {
      id: 1,
      text: "As Career Development and Job Readiness Program",
    },
    {
      id: 2,
      text: "As Skills Assessments Method after a course or a team",
    },
    {
      id: 3,
      text: "As extracurricular activities to complement academic courses",
    },
    {
      id: 4,
      text: "As the portfolios of the Students",
    },
    {
      id: 5,
      text: "As part of Capstone Projects or final-year assignments",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* header */}
      <header>
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
      </header>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-[36px] leading-[1.2] font-bold text-blue-500 ml-24">
              Accelerate Your Students and Trainees Employability and Career
              Growth through Project-based Learning Solution
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed ml-24">
              We partner with Universities, Schools, and Trainig Institutions to
              build the work experience of their students and trainees through
              project based learning challenges and hackathons.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md ml-24"
            >
              Partner with us
            </Button>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10" />

            <Image
              src="/images/students.png"
              alt="Students on computers"
              width={500}
              height={250}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#03192E]">
          Key Offerings & Benefits:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-32 mr-32">
          <Card className="bg-blue-500 text-white">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Employability and Career Development Opportunities
              </h3>
              <p className="text-sm text-white/80">
                Students gain hands-on experience solving real-world challenges
                and help them build confidence, enhance their resilience of
                making job applications and find their dream opportunities in
                the tech industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Practical Application of Classroom Knowledge
              </h3>
              <p className="text-sm text-white/80">
                The Skills Challenge helps the gap between theoretical learning
                and practical application, allowing students to apply concepts
                from their courses.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Students & Trainees Engagement
              </h3>
              <p className="text-sm text-white/80">
                Our gamified learning approach lets your students to give
                students and trainees hands-on experience in practicing skills
                through their learning journey. The project-based challenges
                keep students motivated and actively engaged in their learning
                journey.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white md:col-span-2">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Access to the Industry Experts & Mentors
              </h3>
              <p className="text-sm text-white/80">
                Skills Challenge provide students to identify experts and
                mentors who offer guidance, support and insights on the trends
                of digital careers. This can help students gain a deep
                understanding pf their chosen field.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Skills Assessment</h3>
              <p className="text-sm text-white/80">
                Embed our projects based tests and skills assessments directly
                into your curriculum.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="py-12 px-4 mt-16 h-[400px]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-12 text-[#03192E]">
            Join a few Educational Institutions understanding
            <br />
            Skills Challenges by Umurava
          </h2>

          <div className="space-y-8">
            {partners.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-72 items-center justify-center gap-y-24"
              >
                {row.map((partner, index) => (
                  <div
                    key={index}
                    className="w-48 h-16 relative flex items-center justify-center ml-0"
                  >
                    <Image
                      src={partner.logo || "placeholder.svg"}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 max-w-7xl bg-[#F9FAFB]">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl mx-auto">
          How Skills Challenges Program can be Integrated into your Learning
          Institution
        </h1>

        <div className="grid md:grid-cols-2 gap-x-96 items-center">
          <div className="space-y-6">
            {integrationMethods.map((method) => (
              <div key={method.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {method.id}
                </div>
                <p className="text-gray-700 mt-1">{method.text}</p>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] w-full">
            <Image
              src="/images/banner.png"
              alt="Umurava Banner"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 mb-10">
        <div className="relative overflow-hidden bg-[#3B82F6] rounded-3xl p-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4F8BF7] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F8BF7] rounded-full opacity-50 -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-white text-4xl font-bold max-w-xl mb-8">
              Ready to transform your learning institution?
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#3B82F6] font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
              Let's Partner
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Institutions;
