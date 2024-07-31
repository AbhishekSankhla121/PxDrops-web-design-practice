export default function AboutContainer() {
  return (
    <>
      <div className="w-full h-auto bg-[#C6C2C8] mt-14 flex justify-center items-center flex-col ">
        <div className="py-16 md:py-8">
          <div className="flex justify-center pl-10 md:hidden ">
            <img
              src="/2image.png"
              className="h-[43px] w-[43px] rounded-full"
              alt="skullLogo"
            />
            <div className="h-[48px] px-0">
              <h3 className="font-Beatrice font-bold text-[20px] leading-[24px] mx-3 flex flex-wrap ">
                About the Sponsor: CROAKZ by McGill!
              </h3>
            </div>
          </div>
          <div className="pl-10 hidden md:flex leading-[24px] text-[20px] font-bold font-Beatrice text-[#1A0C23]">
            <h3 className="mx-1">Sponsored by </h3>
            <img
              src="/2image.png"
              className="w-[21.03px] h-[21.03px] rounded-full mx-1"
              alt="skull logo"
            />
            <h3 className="mx-1">CROAKZ &</h3>
            <img
              src="/4image.png"
              className="w-[21.03px] h-[21.03px] rounded-full mx-1"
              alt="opensea logo"
            />
            <h3 className="mx-1">OpenSea</h3>
          </div>
          <div className=" mt-3 font-lexend-deca text-[#1A0C23] text-[16px] flex flex-wrap px-10 font-normal">
            <p className="hidden md:block">About CROAKZ</p>
            <p>
              CROAKZ are a collection of 6969 small amphibious creatures that
              vibe in a bog and croak at the moon. Each CROAK has a crafted feel
              of excellence, and displays an artistry that fills the imagination
              with wonder. Some of them can be licked, but of course caution is
              recommended.
            </p>
          </div>
          <div className="text-[16px] underline leading-[22.4px] font-lexend-deca text-[#1A0C23] w-[311px] px-10 my-4">
            <p>Learn more about CROAKZ</p>
          </div>
          <div className=" mt-5 hidden font-lexend-deca text-[#1A0C23] text-[16px] md:flex flex-wrap px-10 font-normal">
            <p className="hidden md:block">About CROAKZ</p>
            <p>
              CROAKZ are a collection of 6969 small amphibious creatures that
              vibe in a bog and croak at the moon. Each CROAK has a crafted feel
              of excellence, and displays an artistry that fills the imagination
              with wonder. Some of them can be licked, but of course caution is
              recommended.
            </p>
          </div>
          <div className="hidden md:block text-[16px] underline leading-[22.4px] font-lexend-deca text-[#1A0C23] w-[311px] px-10 my-4">
            <p>Learn more about CROAKZ</p>
          </div>
        </div>
      </div>
    </>
  );
}
