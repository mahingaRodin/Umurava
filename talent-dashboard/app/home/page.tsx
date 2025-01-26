import React from 'react'

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[1440px] h-24 px-[100px] py-6 justify-between items-center inline-flex">
        <img
          className="w-[125px] h-[37.01px]"
          src="https://via.placeholder.com/125x37"
        />
        <div className="justify-start items-center gap-8 flex">
          <div className="text-[#2b71f0] text-sm font-medium font-['DM Sans'] leading-snug">
            Home
          </div>
          <div className="w-[163px] h-[22px] justify-start items-center gap-2 flex">
            <div className="w-[163px] text-[#2b3338] text-sm font-medium font-['DM Sans'] leading-snug">
            Challenge & Hackthons
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[#2b3338] text-sm font-medium font-['DM Sans'] leading-snug">
              For Educational Institutions
            </div>
          </div>
          <div className="w-[71px] h-[22px] justify-start items-center gap-2 flex">
            <div className="text-[#2b3338] text-sm font-medium font-['DM Sans'] leading-snug">
              About Us
            </div>
          </div>
          <div className="text-[#2b3338] text-sm font-medium font-['DM Sans'] leading-snug">
            Contact Us{" "}
          </div>
        </div>
        <div className="bg-[#041738] justify-start items-center gap-[19px] flex">
          <div className="w-[157px] h-[46px] bg-white justify-start items-start gap-5 flex">
            <div className="w-[157px] self-stretch px-6 py-[21px] bg-[#041738] rounded-md border border-white justify-center items-center gap-2 flex">
              <div className="text-center text-white text-sm font-semibold font-['DM Sans'] leading-[21px] tracking-tight">
                Join the Program
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home