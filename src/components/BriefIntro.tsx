export default function BriefIntro() {
  return (
    <>
      <div className="w-full h-[253px] md:h-[199px] lg:h-auto bg-[#1A0C23] flex items-center justify-center md:justify-start ">
        <div className=" h-[173px] md:h-auto gap-[8px] mx-auto md:mx-0">
          <div className="">
            <h3 className="font-Beatrice font-bold leading-[24px] text-[20px] text-[#ffffff]">
              What are PX Drops?
            </h3>
            <p className="font-lexend-deca text-[16px] mt-2 md:mt-7 leading-[22.4px] text-[#D1CED3]">
              Get more out of your NFTs. Each week, we’ll drop new goodies just
              for holding specific NFTs (think free gifts, early access and
              more!).
            </p>
          </div>
          <div className="flex flex-col-reverse mt-7">
            <div className="flex md:flex-col-reverse ">
              <p className="font-lexend-deca text-[16px] leading-[22.4px] text-linear-gradient md:text-[#C7C8C9] md:mt-7">
                Brought to you by PolyientX
              </p>

              <div className="flex">
                <p className=" hidden font-lexend-deca text-[16px] md:block leading-[22.4px] text-linear-gradient">
                  Learn more about PX Drops
                </p>
                <img
                  src="/linkopen.png"
                  alt="link Open"
                  className=" ml-[10px] h-[15px] w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
