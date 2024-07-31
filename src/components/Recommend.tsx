export default function Recommended() {
  return (
    <>
      <div className="w-full h-[230px] bg-[#1A0C23] py-[24px] px-[32px] md:px-0 flex items-center ">
        <div className="bg-[#C6C2C8] w-full h-[182px] rounded-[12px] flex justify-evenly items-center md:items-start flex-col px-10 md:py-8 md:justify-around">
          <div className="">
            <h3 className="font-Beatrice font-bold text-[20px] leading-[24px] text-[#1A0C23]">
              Have a friend with an eligible CROAKZ?
            </h3>
          </div>
          <div className="text-[16px] text-[#FFFFFF] font-lexend-deca  rounded-[100px]   w-[234.97px] h-[57px] flex justify-center items-center bg-gradient-to-r from-[#00D1DE] to-[#FFA0FB]">
            <button className="text-center leading-[22.4px] w-[231.97px] bg-[#1A0C23] h-[54px] rounded-[100px] py-[16px] px-[24px] ">
              Recommend this Drop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
