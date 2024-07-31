export default function Footer() {
  return (
    <>
      <div className="flex justify-between w-full font-Epilogue text-[12px] font-bold leading-[28px] text-[#FFFFFF] ">
        <div className="flex items-center mr-[15px]">
          <img
            src="/twitter.png"
            className="w-[16.72px] h-[13.87px] mr-[5px]"
            alt="twitter"
          />
          <p className="">Share on Twitter</p>
        </div>
        <div className="flex items-center ">
          <img
            src="/discord.png"
            className="w-[16.72px] h-[13.87px] mr-[5px]"
            alt="discord"
          />
          <p className="">Share on Discord</p>
        </div>
      </div>
    </>
  );
}
