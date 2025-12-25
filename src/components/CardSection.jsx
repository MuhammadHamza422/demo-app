import cardIcon from "../assets/cardIcon.svg";
import cardImage from "../assets/cardImage.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import dotDark from "../assets/dotDark.svg";
import dotWhite from "../assets/dotWhite.svg";

export default function CardSection() {
  return (
    <div className="w-full h-[822px] relative mt-20">
      {/* Background: half dark, half white */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 w-full bg-[#26262b]" />
        <div className="h-1/2 w-full bg-white" />
      </div>

      {/* Purple Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1355px] h-[720px] bg-[#765070] rounded-[20px] flex items-stretch relative overflow-visible">
        {/* Top-right Arrows */}
        <div className="absolute top-12 right-10 flex gap-10 z-2">
          <img
            src={arrowLeft}
            alt="Left Arrow"
            className="w-[14px] h-[20px] opacity-[0.49] cursor-pointer"
          />
          <img
            src={arrowRight}
            alt="Right Arrow"
            className="w-[14px] h-[20px] opacity-[0.49] cursor-pointer"
          />
        </div>

        {/* Left Column: 1/2.5 width */}
        <div className="flex-[0.5] flex flex-col items-start justify-center mt-10 ms-10 z-10 relative ps-10">
          <p className="font-avenir font-medium text-[26px] leading-[40px] text-white">
            Musicians like Jason use Setapp to push the
          </p>
          <p className="font-avenir font-medium text-[26px] leading-[40px] text-white">
            limits of their creativity, dancing through tasks
          </p>
          <p className="font-avenir font-medium text-[26px] leading-[40px] text-white">
            for more time to play.
          </p>

          <p className="font-avenir font-normal text-[16px] leading-[100%] text-white mt-5">
            Jason Staczek
          </p>

          <div className="w-[74px] h-[74px] flex items-center justify-center rounded-full border border-white p-[29px] bg-white cursor-pointer mt-40">
            <img src={cardIcon} alt="Icon" className="w-[12.96px] h-[15.95px]" />
          </div>
        </div>

        {/* Right Column: Image fills vertical space, touches bottom */}
        <div className="flex-[0.6] flex justify-end relative z-1 mt-10 pe-15">
          <img
            src={cardImage}
            alt="Sample"
          />
        </div>
        
      </div>
       {/* Dots in white area below purple card */}
      <div className="absolute top-[calc(50%+360px+20px)] left-1/2 -translate-x-1/2 flex items-center gap-5 z-20 mt-2 ">
        <img src={dotDark} alt="Dark Dot" className="w-2.5 h-2.5 cursor-pointer" />
        <img src={dotWhite} alt="White Dot 1" className="w-2.5 h-2.5 cursor-pointer" />
        <img src={dotWhite} alt="White Dot 2" className="w-2.5 h-2.5 cursor-pointer" />
        <img src={dotWhite} alt="White Dot 3" className="w-2.5 h-2.5 cursor-pointer" />
      </div>
    </div>
    
  );
}
