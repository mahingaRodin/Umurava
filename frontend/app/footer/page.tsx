"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#001A40] bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(90deg,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] text-white py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-6">
          {/* Footer Logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/footer.png"
              alt="Footer Logo"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-end gap-4">
            <Link href="#" className="rounded-full overflow-hidden w-8 h-8">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </Link>

            <Link href="#" className="rounded-full overflow-hidden w-8 h-8">
              <Image
                src="/images/google.png"
                alt="Google"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </Link>

            <Link href="#" className="rounded-full overflow-hidden w-8 h-8">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </Link>
            <Link href="#" className="rounded-full overflow-hidden w-8 h-8">
              <Image
                src="/images/youtube.png"
                alt="YouTube"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-white/20 mb-8" />

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>Email: </span>
                <Link
                  href="mailto:career@tickets.com"
                  className="hover:text-white"
                >
                  career@tickets.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span>Address: </span>
                <span>89 KG 14 Ave, Kigali</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Phone: </span>
                <Link href="tel:+250700000" className="hover:text-white">
                  +250700000
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm text-gray-300">
              <Link href="/" className="block hover:text-white">
                Home
              </Link>
              <Link href="/challenges" className="block hover:text-white">
                Program
              </Link>
              <Link href="/about" className="block hover:text-white">
                About
              </Link>
              <Link href="/contact" className="block hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Join our newsletter to keep up to date with us!
            </h3>
            <div className="flex items-center w-[400px] h-[72px] bg-white rounded-[10px] border border-[#D1D1D1] overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow h-full px-6 text-[#677488] text-lg font-normal font-['Work Sans'] focus:outline-none focus:ring-0 border-none"
              />
              <button className="w-[200px] h-[60px] bg-[#2B71F0] text-white text-lg font-semibold font-['Work Sans'] hover:bg-blue-600 transition-colors rounded-lg mr-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-white/10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © All Rights Reserved SawaPay 2024 </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
