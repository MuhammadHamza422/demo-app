const rightColumnData = [
  ["Home", "About", "Getting started with Setapp"],
  ["How It Works", "Support", "Remote access to other Mac"],
  ["All Apps", "Education Discount", "Fix macOS Ventura"],
  ["Pricing", "Family Plan", "Problems"],
  ["Setapp for Teams", "For Developers", "Best productivity apps"],
  ["Blog", "Gift Cards", "Best YouTube downloaders"],
  ["Podcast", "Redeem Card or Code", "Uninstall apps"],
  ["Download", "Setapp Reviews", ""],
  ["", "Affiliate Program", ""],
  ["", "Mac Developer Survey 2023", ""],
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#26262B] text-white border-t border-[#E5E5E5] px-10 py-15 pb-0">
      <div className="flex gap-20">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Row 1: Logo + Text inline */}
          <div className="flex items-center gap-3">
            <img src="/assets/PriceCardIcon.svg" alt="Logo" className="w-[20px] h-[32px]" />
            <img src="/assets/setApplogoText.svg" alt="Logo" className="w-[70px] h-[14px]" />
          </div>

          {/* Row 2: Text + Heart */}
          <div className="flex gap-2 items-baseline mt-10">
            <p className="font-avenir font-normal text-[16px] leading-[28.48px] text-gray-300">Updates from our team, written with love</p>
            <img src="/assets/heartIcon.svg" alt="heartIcon" className="w-[13px] h-[10.89px] object-contain" />
          </div>

          {/* Row 3: Input + Arrow Button */}
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-[388px]
                h-[50.23px]
                px-[12px]
                py-[14px]
                rounded-l-[6px]
                bg-[#404547]
                text-[#9D9CA2]
                font-avenir
                font-normal
                text-[16px]
                leading-[100%]
                placeholder-[#9D9CA2]
                outline-none
              "
            />
            <button
              className="
                w-[54px]
                h-[50.23px]
                bg-white
                border border-gray-300
                rounded-r-[6px]
                flex items-center justify-center
                p-[18px_23px]
              "
            >
              <img src="/assets/arrowRightDark.svg" alt="arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-1">
          {rightColumnData.map((row, i) => (
            <div className="flex justify-between" key={i}>
              {row.map((item, j) => (
                <div className="flex-1" key={j}>
                  {item && <p className="font-avenir font-normal text-[16px] leading-[32px] text-white cursor-pointer">{item}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Buttons and Language Selector */}
      <div className="flex justify-between items-center mt-10">
        <div className="flex">
          <button
            className="
              w-[41px] 
              h-[26px] 
              bg-[#969799] 
              text-white 
              font-Arial 
              font-bold 
              text-[11px] 
              leading-[26px] 
              uppercase
              flex items-center justify-center
              cursor-pointer
            "
          >
            DMCA
          </button>
          <button
            className="
              w-[83.84px] 
              h-[26px] 
              bg-[#404547] 
              text-white 
              font-Arial 
              font-bold 
              text-[11px] 
              leading-[26px] 
              uppercase
              flex items-center justify-center
              cursor-pointer
            "
          >
            Protected
          </button>
        </div>

        <div className="flex items-center justify-center gap-[10px]">
          <img src="/assets/Item.svg" alt="flag" className="w-[28px]" />
          <span className="font-avenir font-normal text-[16px] leading-[28.48px] text-white cursor-pointer">English</span>
          <img src="/assets/arrowDownWhite.svg" alt="arrow" className="w-[10px] h-[10px] cursor-pointer mt-1" />
        </div>
      </div>

      {/* Bottom Border Row */}
      <div className="border-t border-[#E5E5E5] mt-10 pt-4 flex justify-between items-center">
        {/* Left content */}
        <div className="flex gap-6">
          <a href="#" className="font-avenir font-normal text-[12px] leading-[21.36px] text-white cursor-pointer">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
          </a>
        </div>

        {/* Right Social Links */}
        <div className="flex gap-3 mt-2">
          <a className="w-[26px] h-[26px] opacity-45 flex items-center justify-center rounded-full cursor-pointer">
            <img src="/assets/fbDarkIcon.svg" className="w-[26px] h-[26px]" />
          </a>
          <a className="w-[26px] h-[26px] opacity-45 flex items-center justify-center rounded-full cursor-pointer">
            <img src="/assets/twitterDarkIcon.svg" className="w-[26px] h-[26px]" />
          </a>
          <a className="w-[26px] h-[26px] opacity-45 flex items-center justify-center rounded-full cursor-pointer">
            <img src="/assets/InstaDarkIcon.svg" className="w-[26px] h-[26px]" />
          </a>
          <a className="w-[26px] h-[26px] opacity-45 flex items-center justify-center rounded-full cursor-pointer">
            <img src="/assets/YtDarkIcon.svg" className="w-[26px] h-[26px]" />
          </a>
        </div>
      </div>
      <div className="flex gap-3 py-4 pb-10">
        <p className="font-avenir font-normal text-[12px] leading-[21.36px] text-[#969799] cursor-pointer">Terms of Use</p>
        <p className="font-avenir font-normal text-[12px] leading-[21.36px] text-[#969799] cursor-pointer">Privacy Policy</p>
      </div>
    </footer>
  );
}