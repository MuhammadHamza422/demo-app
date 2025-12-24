import React from "react";
import Img1 from "../assets/Img1.svg";
import Img2 from "../assets/Img2.svg";
import Img3 from "../assets/Img3.svg";
import Img4 from "../assets/Img4.svg";
import Img5 from "../assets/Img5.svg";
import Img6 from "../assets/Img6.svg";
import Img7 from "../assets/Img7.svg";
import Img8 from "../assets/Img8.svg";
import Img9 from "../assets/Img9.svg";
import Img10 from "../assets/Img10.svg";
import Img11 from "../assets/Img11.svg";
import AppleIcon from "../assets/apple.svg";
import GoogleIcon from "../assets/google.svg";

export default function HeaderContent() {
  const column1 = [
    { src: Img1, top: 46, left: 336, width: 173, height: 173 },
    { src: Img2, top: 177, left: 335, width: 58, height: 58 },
    { src: Img3, top: 169.64, left: 439.64, width: 141.71, height: 141.71 },
    { src: Img4, top: 338.51, left: 331.03, width: 226.93, height: 113.97 },
    { src: Img5, top: 418, left: 330, width: 175, height: 176 },
  ];

  const column3 = [
    { src: Img6, top: 63.84, left: 1388.74, width: 201.52, height: 126.33 },
    { src: Img7, top: 124, left: 1297, width: 169, height: 169 },
    { src: Img8, top: 235, left: 1449, width: 155, height: 153 },
    { src: Img9, top: 336, left: 1316, width: 230, height: 128 },
    { src: Img10, top: 440, left: 1375, width: 152, height: 153 },
  ];

  return (
    <div className="h-[595.5px] my-[100px] flex text-white relative w-[1880px] mx-auto">
      {/* Column 1 */}
      <div className="w-1/3 relative flex justify-center">
        {column1.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`col1-img-${i}`}
            className="absolute animate-spin-slow"
            style={{
              top: `${img.top}px`,
              left: `${img.left}px`,
              width: `${img.width}px`,
              height: `${img.height}px`,
            }}
          />
        ))}
      </div>

      {/* Column 2 - Vertical stack stretched */}
      <div className="w-1/3 flex flex-col justify-between items-center h-full">
        {/* Top Logo */}
        <img src={Img11} alt="Logo" className="w-[128.75px] h-[128.75px]" />

        {/* Main Text */}
        <div className="text-center">
          <p className="font-avenir font-bold text-[64px] leading-[67.84px] tracking-[1px] text-white">Dozens of apps</p>
          <p className="font-avenir font-bold text-[64px] leading-[67.84px] tracking-[1px] text-white">One subscription.</p>
          <p className="font-avenir font-bold text-[64px] leading-[67.84px] tracking-[1px] text-white">$9.99</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="w-[209.93px] h-[52px] pt-[14px] pr-[30.93px] pb-[14px] pl-[32px] rounded-[6px] border border-white bg-white flex items-center justify-center">
            <span className="font-avenir font-normal text-[16px] leading-[24px] tracking-[1px] text-center text-[#26262B]">Try free for 7 days</span>
          </button>

          <button className="w-[62px] h-[52px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-[6px] border border-white bg-white flex items-center justify-center">
            <img src={AppleIcon} alt="AppleIcon" className="w-full h-full" />
          </button>

          <button className="w-[62px] h-[52px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-[6px] border border-white bg-white flex items-center justify-center">
            <img src={GoogleIcon} alt="GoogleIcon" className="w-full h-full" />
          </button>
        </div>

        {/* Additional Text */}
        <div className="text-center">
          <p className="font-avenir font-normal text-[18px] leading-[32.04px] tracking-[0px] text-white">Power up your workflow with Setapp, a</p>
          <p className="font-avenir font-normal text-[18px] leading-[32.04px] tracking-[0px] text-white">smart way to get apps.</p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="w-1/3 relative flex justify-center">
        {column3.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`col3-img-${i}`}
            className="absolute animate-spin-slow"
            style={{
              top: `${img.top}px`,
              left: `${img.left - 2 * (1880 / 3)}px`, // shift into column 3
              width: `${img.width}px`,
              height: `${img.height}px`,
              zIndex: i === 2 || i === 4 ? 10 : i === 3 ? 5 : 0, // 8th & 10th above 9th
            }}
          />
        ))}
      </div>
    </div>
  );
}
