function Navbar() {
  const links = ["How it works", "All apps", "Pricing", "For Teams", "Blog", "Podcast"];

  return (
    <div className="w-[1440px] h-[40px] pt-[17px] flex items-center px-[40px]">
      {/* LEFT (Logo) */}
      <div className="flex items-center">
        <a href="#" className="w-[102px] h-[32px] flex items-center">
          {/* Using string path for SVG.svg */}
          <img src="/assets/SVG.svg" alt="Logo" className="w-[20px] h-[32px]" />
        </a>
      </div>

      {/* RIGHT GROUP (Links + Divider + Flag + Sign in + Try Free) */}
      <div className="flex items-center gap-[30px] ml-auto">
        {links.map((link, index) => (
          <div key={index} className="h-[35.76px] pt-[4px] pb-[5.76px] flex items-center justify-center mt-[2px]">
            <a href="#" className="font-avenir font-medium text-[14px] leading-[25.76px] tracking-[0.9px] text-white">
              {link}
            </a>
          </div>
        ))}

        {/* Divider */}
        <span className="text-white opacity-50">|</span>

        {/* Flag */}
        <div className="flex items-center justify-center w-[26px]">
          {/* Using string path for item.svg */}
          <img src="/assets/Item.svg" alt="Flag" className="cursor-pointer" />
        </div>

        {/* Sign in */}
        <a href="#" className="font-avenir font-medium text-[14px] leading-[25.76px] tracking-[0.9px] text-white">
          Sign in
        </a>

        {/* Try free button */}
        <button
          className="
            h-[32px] 
            px-[23px] 
            rounded-[6px] border 
            flex items-center justify-center
            font-avenir font-medium text-[14px] leading-[25.76px] tracking-[0.9px] text-white
            cursor-pointer
          "
        >
          Try free
        </button>
      </div>
    </div>
  );
}

export default Navbar;