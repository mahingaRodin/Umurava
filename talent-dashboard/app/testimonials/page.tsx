"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../../_components/avatar";
import { Card, CardContent } from "../../_components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../_components/carousel";
import { Play } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 2,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 3,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
  ];

  return (
    <div className="h-[924px] pl-[100px] pr-[103px] pt-[104.43px] pb-[63.57px] bg-[#fffefe] flex-col justify-end items-center gap-[99.95px] inline-flex overflow-hidden">
      <div className="self-stretch h-[645.05px] flex-col justify-start items-start gap-[68px] inline-flex">
        <div className="self-stretch justify-center items-center gap-5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[13px] inline-flex">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-3.5 flex">
              <div className="w-[719px] text-[#03192e] text-[40px] font-bold font-['Work Sans'] leading-[48px]">
                Users are in Love with Skills Challenges Program
              </div>
            </div>
            <div className="w-[615px] text-[#677488] text-lg font-normal font-['Work Sans'] leading-[27px]">
              See what our clients say about working with us. Their success
              speaks for our dedication and expertise.
            </div>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-[21.94px]">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="w-[536.53px] h-[414.05px] relative bg-[#fffefe] rounded-[10.97px] border border-[#d1d1d1]">
                  <div className="w-[468.89px] h-[279.69px] left-[36.56px] top-[30.16px] absolute bg-[#2b71f0] rounded-[13.71px]">
                    <div className="w-[66.72px] h-[66.72px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-[66.72px] h-[66.72px] bg-white/60 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="left-[37.48px] top-[332.70px] absolute justify-start items-center gap-[13.71px] inline-flex">
                    <Avatar className="w-[54.84px] h-[54.84px] bg-[#2b71f0] rounded-[54.84px]">
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-[#2b71f0]">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="w-[161.78px] flex-col justify-start items-start inline-flex">
                      <div className="self-stretch h-[22.85px] text-[#00473b] text-lg font-bold font-['DM Sans'] leading-relaxed">
                        {testimonial.name}
                      </div>
                      <div className="self-stretch text-neutral-500 text-sm font-medium font-['DM Sans'] leading-relaxed">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="self-stretch justify-start items-center gap-2.5 inline-flex ml-[800px]">
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

export default Testimonials;
