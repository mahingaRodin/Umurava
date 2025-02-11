import Image from "next/image";
import { Button } from "../../_components/button";
import { Card } from "../../_components/card";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "UI/UX Design", active: true },
    { name: "Data Science", active: false },
    { name: "Graphic Design", active: false },
    { name: "Data Analysis & Research", active: false },
    { name: "Animation", active: false },
    { name: "Videography & Photography", active: false },
    { name: "Data Science", active: false },
    { name: "AI & Machine Learning", active: false },
    { name: "Web3", active: false },
    { name: "Digital Marketing & Communication", active: false },
  ];

  return (
    <div className="h-[1229px] relative bg-white overflow-hidden">
      <div className="h-[164px] left-[100px] top-[61px] absolute flex-col justify-start items-end gap-[35px] inline-flex">
        <div className="self-stretch justify-center items-center gap-[291px] inline-flex">
          <div className="w-[949px] flex-col justify-start items-center gap-3.5 inline-flex ml-96">
            <div className="w-[1022px] text-center text-[#03192e] text-[40px] font-bold font-['Work Sans'] leading-[48px]">
              Skills Challenges Cover various in-demand skills and Careers for
              the digital economy
            </div>
            <div className="w-[520px] text-center text-[#677488] text-lg font-normal font-['DM Sans'] leading-[27px]">
              Explore the projects that various talents are working on.
            </div>
          </div>
        </div>
      </div>

      <div className="h-[205px] left-[234px] right-[234px] top-[264px] absolute flex-col justify-start items-center gap-5 inline-flex ml-60 mr-44">
        <div className="flex flex-wrap gap-[30px] justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`px-6 py-3.5 ${
                skill.active ? "bg-[#2b71f0]" : "bg-[#f1f1f1]"
              } rounded-lg justify-center items-center gap-2.5 flex`}
            >
              <div
                className={`text-lg font-normal font-['Work Sans'] leading-[27px] ${
                  skill.active ? "text-white" : "text-[#677488]"
                }`}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[1200px] pl-[60px] pr-[61px] py-11 left-[117px] top-[575px] absolute bg-[#f1f1f1] rounded-xl justify-center items-center gap-[63px] inline-flex ml-[250px]">
        <div className="w-[416px] self-stretch flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch h-[232.88px] flex-col justify-start items-start gap-6 flex">
            <div className="w-[93px] h-[88.88px] relative bg-white rounded-[10.70px] overflow-hidden">
              <div className="w-[41.97px] h-[41.97px] left-[25.51px] top-[23.04px] absolute">
                <Image
                  src="/images/soko.png"
                  width={41.15}
                  height={41.15}
                  alt="soko"
                />
              </div>
            </div>
            <div className="self-stretch h-[120px] text-[#677488] text-lg font-light font-['Work Sans'] leading-[30px]">
              The Embedded Finance Platform and Payroll Management Software
              Solutions for your organization and Workforce.
            </div>
          </div>
          <div className="h-[50px] py-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#2b71f0] text-[15.12px] font-semibold font-['Inter'] leading-none">
              Learn more
            </div>
            <div className="w-[30px] h-[30px] px-[9px] pt-[10.20px] pb-[10.21px] bg-[#2b71f0] rounded-full justify-center items-center flex">
              <div className="w-3 flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-3 h-[9.59px] px-[0.01px] flex-col justify-center items-center flex overflow-hidden">
                  <div className="w-3 h-[9.59px] relative  overflow-hidden">
                    <FaArrowRight className="items-center text-white size-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[414px] justify-center items-center inline-flex overflow-hidden">
          <Image
            src="/images/dashboard.png"
            alt="Dashboard preview"
            width={600}
            height={414}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="left-[680px] top-[1137px] absolute justify-start items-center gap-2.5 inline-flex ml-[250px]">
        {[0, 1, 2, 3].map((dot, index) => (
          <div
            key={index}
            className={`w-[11px] h-[11px] rounded-full ${
              index === 2 ? "bg-[#2b71f0]" : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
