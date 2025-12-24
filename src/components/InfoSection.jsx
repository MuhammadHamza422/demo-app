import React from "react";
import InfoImage1 from "../assets/InfoImage1.svg";
import InfoImage2 from "../assets/InfoImage2.svg";
import card1Image from "../assets/card1Image.svg";
import card2Image from "../assets/card2Image.svg";
import card1Icon from "../assets/card1Icon.svg";
import card2Icon from "../assets/card2Icon.svg";
import arrow from "../assets/arrow.svg";

export default function InfoSection() {
  return (
    <div className="relative w-[1180px] border-t border-[#E5E5E5] mt-40 ml-[130px]">
      {/* Content */}
      <div className="my-[101px] flex w-full">
        {/* Left Column - Heading */}
        <div className="w-1/2">
          <h2 className="font-avenir font-semibold text-[36px] leading-[51.84px] tracking-[1px] text-white">What you get on Setapp.</h2>
        </div>

        {/* Right Column - Text */}
        <div className="w-1/2 ml-20">
          <p className="font-avenir font-normal text-[18px] leading-[28px] text-white">
            With a single monthly subscription at $9.99, you get 240+ apps for
          </p>
          <p className="font-avenir font-normal text-[18px] leading-[28px] text-white">your Mac.</p>
        </div>
      </div>

      {/* Card image with text */}
      <div className="mt-8 w-[1180px] h-[605px] bg-[#DF96AE] rounded-[20px] flex flex-col justify-between">
        <div className="flex items-start gap-8 px-16 pt-15">
          {/* Image */}
          <img src={InfoImage1} alt="Card Image" className="w-[80px] h-[80px] object-contain cursor-pointer" />

          {/* Text content */}
          <div className="text-[#26262B]">
            <h3 className="font-avenir font-semibold text-[26px] leading-[40.04px] cursor-pointer">Keep your Mac clean</h3>
            <p className="font-avenir font-normal text-[18px] leading-[32.04px] cursor-pointer">
              Remove junk, scan for malware, wipe email attachments
            </p>
          </div>
        </div>

        {/* Full width image attached to bottom */}
        <div className="w-full">
          <img src={InfoImage2} alt="Card" className="w-full h-auto object-contain rounded-[12px]" />
        </div>
      </div>
      {/* Two Cards Below Image */}
      <div className="flex gap-5 mt-5">
        {/* Card 1 */}
        <div className="w-[580px] h-[632px] bg-[#F4F0E4] rounded-[20px] flex flex-col">
          {/* Top Image */}
          <img src={card1Image} alt="Card 1 Image" className="w-full h-[400px] object-cover rounded-t-[20px]" />

          {/* Icon + Heading + Text */}
          <div className="flex flex-col px-14 pb-6 space-y-4">
            <img src={card1Icon} alt="Card 1 Icon" className="w-[80px] h-[80px]" />
            <p className="font-avenir font-semibold text-[26px] leading-[40px] text-[#26262B] mb-0 cursor-pointer">Write code</p>
            <p className="font-avenir font-normal text-[18px] leading-[32px] text-[#26262B] cursor-pointer">
              Create applications in more than 25 languages
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[580px] h-[633px] bg-[#384C75] rounded-[20px] flex flex-col pt-10">
          {/* Top padding to push icon + text away from top */}
          <div className="flex flex-col  px-12 py-6 space-y-4 mt-auto">
            <img src={card2Icon} alt="Card 2 Icon" className="w-[68px] h-[68px]" />
            <p className="font-avenir font-semibold text-[26px] leading-[40px] text-white mb-0 cursor-pointer">Join meetings in a click</p>
            <p className="font-avenir font-normal text-[18px] leading-[32px] text-white cursor-pointer">
              Quickly access links to your meetings from menu bar
            </p>
          </div>

          {/* Bottom Image */}
          <img src={card2Image} alt="Card 2 Image" className="w-full h-[400px] object-cover rounded-b-[20px] mt-5 pt-2" />
        </div>
      </div>
      {/* Centered Heading with Arrow */}
      <div className="flex items-center justify-center gap-3 py-20">
        <img src={arrow} alt="Arrow Icon" className="w-[27px] h-[21px] pt-[2px] pr-[2.31px] pb-[2px] pl-[2px] rotate-0" />
        <p className="font-avenir font-medium text-[20px] leading-[30px] tracking-[1.6px] text-white text-center">View all superpowers</p>
      </div>
      {/* ----- Bottom Headings Section with Bottom Border ----- */}
      <div className="w-full border-b border-[#E5E5E5]">
        <div className="flex w-full pb-20">
          {/* Left Column - Heading */}
          <div className="w-1/2">
            <h2 className="font-avenir font-semibold text-[36px] leading-[51.84px] tracking-[1px] text-white">Your Setapp journey.</h2>
          </div>

          {/* Right Column - Text */}
          <div className="w-1/2 ml-20">
            <p className="font-avenir font-normal text-[18px] leading-[28px] text-white">
              Type in your task into Setapp search and get instant app recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
