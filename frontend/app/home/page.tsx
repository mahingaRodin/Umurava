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
            href="/challs"
            className="text-[#2b3338] text-sm font-medium hover:text-blue-500 transition"
          >
            Challenges & Hackathons
          </Link>
          <Link
            href="/institutions"
            className="text-[#2b3338] text-sm font-medium hover:text-blue-500 transition"
          >
            For Educational Institutions
          </Link>
          <Link
            href="/about"
            className="text-[#2b3338] text-sm font-medium hover:text-blue-500 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-[#2b3338] text-sm font-medium hover:text-blue-500 transition"
          >
            Contact Us
          </Link>
        </div>

        <Link
          href="/login" // Updated to go to the login page
          className="px-6 py-3 bg-[#041738] text-white text-sm font-semibold rounded-md hover:bg-[#0a2357] transition-colors"
        >
          Join the Program
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="px-[100px] py-16 flex justify-between items-center">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <h1 className="text-[#2b71f0] text-[44px] font-bold font-['Work Sans'] leading-[52.80px]">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-[#2b3338] text-xl font-normal font-['Work Sans'] leading-[30px]">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
          <div className="w-[207px] h-14 px-6 py-[21px] bg-[#2b71f0] rounded-md justify-center items-center gap-2 inline-flex mt-12">
            <button className="ext-center text-white text-base font-semibold font-['Work Sans'] leading-normal tracking-tight">
              Get Started
            </button>
          </div>
        </div>

        {/* Hero Section - Right Images */}
        <div className="w-[746px] h-[501px] pl-14 pr-[42px] justify-end items-center inline-flex">
          <div className="w-[648px] h-[503px] relative">
            <div className="h-[443px] left-[78px] top-[60px] absolute justify-start items-end gap-5 inline-flex">
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px]  overflow-hidden">
                <div className="w-[294px] h-[294px] left-[206.71px] top-[68.55px] absolute origin-top-left rotate-[140.71deg] bg-white rounded-full" />
                <Image
                  src="/images/group-working.png"
                  width={600}
                  height={400}
                  alt="Group Working"
                  className="object-contain"
                />
              </div>
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px]  overflow-hidden">
                <div className="w-[294px] h-[294px] left-[49px] top-[-3.29px] absolute origin-top-left rotate-[55.69deg] bg-white rounded-full" />
                <div className="w-[342.46px] h-[406.14px] left-[-34.23px] top-[37px] absolute">
                  <img
                    className="w-[342.46px] h-[406.14px] left-0 top-0 absolute"
                    src="https://via.placeholder.com/342x406"
                  />
                  <img
                    className="w-[66.12px] h-[21.94px] left-[138.07px] top-[295.74px] absolute origin-top-left rotate-[-1.39deg]"
                    src="https://via.placeholder.com/66x22"
                  />
                  <img
                    className="w-[20.11px] h-[6.64px] left-[216.87px] top-[233.18px] absolute origin-top-left rotate-[-1.39deg]"
                    src="https://via.placeholder.com/20x7"
                  />
                </div>
                <div className="w-[275px] h-[86px] left-0 top-[355px] absolute bg-gradient-to-b from-[#2b70ef] to-[#2b71f0] rounded-[32px]" />
              </div>
            </div>
            {/* <div className="w-[201px] h-[53.95px] px-[10.58px] pt-[10.58px] pb-[11.69px] left-0 top-[433px] absolute bg-white rounded-[52.89px] justify-center items-center inline-flex overflow-hidden">
              <div className="grow shrink basis-0 self-stretch justify-start items-center gap-[14.35px] inline-flex">
                <div className="justify-start items-center flex">
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                  />
                </div>
              </div>
            </div> */}
            <img
              className="w-[120px] h-[120px] left-[302px] top-0 absolute"
              src="https://via.placeholder.com/120x120"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
