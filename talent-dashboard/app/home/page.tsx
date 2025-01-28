import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
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
          <Link href="/" className="text-[#2b71f0] text-sm font-medium">
            Home
          </Link>
          <Link
            href="/challenges"
            className="text-[#2b3338] text-sm font-medium"
          >
            Challenges & Hackathons
          </Link>
          <Link
            href="/institutions"
            className="text-[#2b3338] text-sm font-medium"
          >
            For Educational Institutions
          </Link>
          <Link href="/about" className="text-[#2b3338] text-sm font-medium">
            About Us
          </Link>
          <Link href="/contact" className="text-[#2b3338] text-sm font-medium">
            Contact Us
          </Link>
        </div>

        <Link
          href="/join"
          className="px-6 py-3 bg-[#041738] text-white text-sm font-semibold rounded-md hover:bg-[#0a2357] transition-colors"
        >
          Join the Program
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="px-[100px] py-16 flex justify-between items-center">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <h1 className="text-[56px] font-bold leading-tight text-[#2b71f0] mb-6">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-[#2b3338] text-xl mb-8">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
          <button className="px-8 py-4 bg-[#2b71f0] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        {/* Hero Section - Right Images */}
        <div className="w-[746px] h-[501px] pl-14 pr-[42px] justify-end items-center inline-flex">
          <div className="w-[648px] h-[503px] relative">
            <div className="h-[443px] left-[78px] top-[60px] absolute justify-start items-end gap-5 inline-flex">
              {/* Left Image Container */}
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px] overflow-hidden">
                <div className="w-[294px] h-[294px] left-[206.71px] top-[68.55px] absolute origin-top-left rotate-[140.71deg] bg-white rounded-full" />
                <Image
                  src="/images/group-working.png"
                  alt="Group of students working"
                  width={600}
                  height={400}
                  className="absolute left-[-181px] top-[55px]"
                />
              </div>

              {/* Right Image Container */}
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px] overflow-hidden">
                <div className="w-[294px] h-[294px] left-[49px] top-[-3.29px] absolute origin-top-left rotate-[55.69deg] bg-white rounded-full" />
                <div className="w-[342.46px] h-[406.14px] left-[-34.23px] top-[37px] absolute">
                  <Image
                    src="/images/single-person.png"
                    alt="Person with laptop"
                    width={342}
                    height={406}
                    className="absolute left-0 top-0"
                  />
                  <Image
                    src="/images/career-ticket.png"
                    alt="Career Ticket Logo"
                    width={66}
                    height={22}
                    className="absolute left-[138.07px] top-[295.74px] rotate-[-1.39deg]"
                  />
                  <Image
                    src="/images/small-logo.png"
                    alt="Small Logo"
                    width={20}
                    height={7}
                    className="absolute left-[216.87px] top-[233.18px] rotate-[-1.39deg]"
                  />
                </div>
                {/* Gradient overlay at bottom */}
                <div className="w-[275px] h-[86px] left-0 top-[355px] absolute bg-gradient-to-b from-[#2b70ef] to-[#2b71f0] rounded-[32px]" />
              </div>
            </div>

            {/* Avatar Strip */}
            <div className="w-[201px] h-[53.95px] px-[10.58px] pt-[10.58px] pb-[11.69px] left-0 top-[433px] absolute bg-white rounded-[52.89px] justify-center items-center inline-flex overflow-hidden">
              <div className="grow shrink basis-0 self-stretch justify-start items-center gap-[14.35px] inline-flex">
                <div className="justify-start items-center flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`/images/avatar-${i}.png`}
                      alt={`User avatar ${i}`}
                      width={32}
                      height={32}
                      className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-bold">20K+</p>
                  <p className="text-sm text-gray-600">Talents</p>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <Image
              src="/images/floating-icons.png"
              alt="Floating icons"
              width={120}
              height={120}
              className="absolute left-[302px] top-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
