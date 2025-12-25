import PriceCardIcon from "../assets/PriceCardIcon.svg";

export default function PriceCard() {
  return (
    <div className="w-full h-[607px] relative">
      {/* Background: half light, half darker */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 w-full bg-[#FFFFFF]" /> {/* Light color */}
        <div className="h-1/2 w-full bg-[#2B2D32]" /> {/* Dark color */}
      </div>

      {/* Middle Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1330px] h-[587.59px] bg-[#F5F5F5] rounded-[20px] flex flex-col relative overflow-visible p-12 pt-0">
        {/* Icon at top */}
        <div className="pt-[124px]">
          <img src={PriceCardIcon} alt="Icon" className="w-[76px] h-[120px]" />
        </div>

        {/* Heading */}
        <p className="font-avenir font-semibold text-[46px] leading-[59.8px] text-[#2B2D32] pt-5 mb-8">
          Superpowers starting $9.99/month.
          <br />
          Free for 7 days.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 pt-5">
          <button className="w-[193.41px] h-[50px] bg-[#2B2D32] text-white font-avenir font-normal text-[16px] leading-[24px] tracking-[1px] text-center rounded-[6px] pt-[13px] pb-[13px] pl-[31px] pr-[31.41px] cursor-pointer">
            Get started now
          </button>
          <button className="w-[220.57px] h-[50px] bg-transparent border border-[#26262B] text-[#26262B] font-avenir font-normal text-[16px] leading-[24px] tracking-[1px] text-center rounded-[6px] pt-[13px] pb-[13px] pl-[31px] pr-[31.57px] cursor-pointer">
            More about Setapp
          </button>
        </div>
      </div>
    </div>
  );
}
