import { Award, BriefcaseBusiness } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { Medal } from "lucide-react";
import Image from "next/image";
import React from "react";

const Section = () => {
  const benefits = [
    {
      icon: <BriefcaseBusiness className="w-6 h-6 text-white" />,
      title: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network",
    },
    {
      icon: <Medal className="w-6 h-6 text-white" />,
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers field and spaces",
    },
  ];        
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-2">
        What else can I gain from participating in Skills Challenges?
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa's largest workforce of digital professionals.
      </p>

      <div className="grid md:grid-cols-2 gap-x-36 gap-y-12 items-center px-8 left-10 ml-80">
        <div className="grid grid-cols-2 gap-x-40 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-3 rounded-lg mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute rounded-3xl float-right" />
          <div className="relative">
            <Image
              src="/images/banner.png"
              alt="Skill section banner"
              width={400}
              height={300}
              className="rounded-2x h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
