export default function CardsGridSection() {
  return (
    <>
      <div className="w-full bg-white relative pt-25 px-30">
        {/* Top Row: Heading | Text + Icons */}
        <div className="flex justify-between items-start">
          {/* First Column: Heading (50%) */}
          <div className="w-1/2 text-[#26262B]">
            <p className="font-avenir font-semibold text-[36px] leading-[47.88px] tracking-[1.3px]">Setapp in your words.</p>
          </div>

          {/* Second Column: Text + Icons (50%) */}
          <div className="w-1/2 flex justify-end items-center gap-20">
            <p className="font-avenir text-base text-gray-700">
              What you say about how Setapp <span className="block">powers you up.</span>
            </p>

            {/* Icons inline with text */}
            <div className="flex gap-4">
              <img src="/assets/facebookIcon.svg" alt="Facebook" className="w-12 h-12" />
              <img src="/assets/twitterIcon.svg" alt="Twitter" className="w-12 h-12" />
              <img src="/assets/instagramIcon.svg" alt="Instagram" className="w-12 h-12" />
              <img src="/assets/youtubeIcon.svg" alt="YouTube" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Arrows below top row, on right side */}
        <div className="flex justify-end gap-6 mt-6">
          <img src="/assets/arrowLeftDark.svg" alt="Left Arrow" className="w-4 h-6 cursor-pointer p-1" />
          <img src="/assets/arrowRightDark.svg" alt="Right Arrow" className="w-4 h-6 cursor-pointer p-1" />
        </div>

        <div className="flex gap-6 mt-6">
          {/* Outer Card 1 */}
          <div className="w-[380px] h-[422.44px] rounded-[15px] bg-white shadow-md relative flex flex-col justify-end p-4">
            {/* Bottom Row: Left text, Right icon */}
            <div className="flex justify-between items-end mx-3">
              {/* Left: Heading + Text */}
              <div className="flex flex-col">
                <p className="font-avenir font-semibold text-[18px] leading-[32.04px] text-[#26262B]">Arash Pourhabibi</p>
                <p className="font-avenir font-semibold text-[14px] leading-[24.92px] text-[#9F9F9F]">@ArashPourhabibi</p>
              </div>
              {/* Right: Icon */}
              <div>
                <img src="/assets/twittersmallicon.svg" alt="twitterIcon" className="w-[22px] h-[32px]" />
              </div>
            </div>

            {/* Inner Card */}
            <div className="w-[366px] h-[299.48px] rounded-[8px] absolute top-[5px] left-[7px] p-[38.5px_22px_38.98px_22px] bg-[#71719A]">
              <p className="text-white font-avenir font-medium text-[26px] leading-[36.92px] mt-2">
                Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.
              </p>
            </div>
          </div>

          {/* Outer Card 2 */}
          <div className="w-[380px] h-[422.44px] rounded-[15px] bg-white shadow-md relative flex flex-col justify-end p-4">
            <div className="flex justify-between items-end mx-3">
              <div className="flex flex-col gap-1">
                <p className="font-avenir font-semibold text-[18px] leading-[32.04px] text-[#26262B]">Mauricio Sanchez</p>
                <p className="font-avenir font-semibold text-[14px] leading-[24.92px] text-[#9F9F9F]">@m741s</p>
              </div>
              <div>
                <img src="/assets/Instasmallicon.svg" alt="Card Icon" className="w-[22px] h-[32px]" />
              </div>
            </div>

            <div className="w-[366px] h-[299.48px] rounded-[8px] absolute top-[5px] left-[7px] p-[38.5px_22px_38.98px_22px] bg-[#D9AE89]">
              <p className="text-white font-avenir font-medium text-[26px] leading-[36.92px] mt-2">
                My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.
              </p>
            </div>
          </div>

          {/* Outer Card 3 */}
          <div className="w-[380px] h-[422.44px] rounded-[15px] bg-white shadow-md relative flex flex-col justify-end p-4">
            <div className="flex justify-between items-end mx-3">
              <div className="flex flex-col gap-1">
                <p className="font-avenir font-semibold text-[18px] leading-[32.04px] text-[#26262B]">Meredith Sweet</p>
                <p className="font-avenir font-semibold text-[14px] leading-[24.92px] text-[#9F9F9F]">@meredith.sweet.silberstein</p>
              </div>
              <div>
                <img src="/assets/fbSmallicon.svg" alt="Card Icon" className="w-[22px] h-[32px]" />
              </div>
            </div>

            <div className="w-[366px] h-[299.48px] rounded-[8px] absolute top-[5px] left-[7px] p-[38.5px_22px_38.98px_22px] bg-[#765070]">
              <p className="text-white font-avenir font-medium text-[26px] leading-[36.92px] mt-2">
                For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!
              </p>
            </div>
          </div>
        </div>

        {/* Dots below cards */}
        <div className="flex items-center gap-5 justify-center mt-10 ">
          <img src="/assets/dotDark.svg" alt="Dark Dot" className="w-2.5 h-2.5" />
          <img src="/assets/dotWhite.svg" alt="White Dot 1" className="w-2.5 h-2.5" />
          <img src="/assets/dotWhite.svg" alt="White Dot 2" className="w-2.5 h-2.5" />
          <img src="/assets/dotWhite.svg" alt="White Dot 3" className="w-2.5 h-2.5" />
          <img src="/assets/dotWhite.svg" alt="White Dot 4" className="w-2.5 h-2.5" />
          <img src="/assets/dotWhite.svg" alt="White Dot 5" className="w-2.5 h-2.5" />
        </div>
      </div>
      <div className="pb-5 bg-white w-full border-b border-[#E5E5E5]"></div>
      <div className="pb-15 bg-white"></div>
    </>
  );
}