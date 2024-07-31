import BottomHead from "./bottomhead";
import BroughtYouBY from "./BroughtYou";
import Footer from "./foooter";
import Topead from "./tophead";

export default function FixedSub() {
  return (
    <>
      <div className="md:h-[100vh] md:bg-[#312439] ">
        <div className="w-full flex justify-centern overflow-hidden md:overflow-y-auto  Scroll-none   bg-[#1A0C23] flex-col items-center md:bg-[#312439]  md:items-center md:h-[95%]  ">
          <div className="relative w-full h-auto flex justify-center ">
            <div className="w-[360.9px]  h-[432.02px] md:w-[478.5px] md:h-[478.5px]">
              <img
                src="1image.png"
                className="h-full w-full "
                alt="t-shirt image"
              />
            </div>
            <div className="bg-[#FFFFFF] h-[94.77px] w-full  opacity-[75%] rotate-[-3.69deg] flex justify-center items-center absolute  bottom-[45px] md:rotate-[-4.97deg] md:h-[75.71px]  md:left-[-1px]  px-1  ">
              <div className=" w-[35.87px] h-[9.78px] absolute top-[-20px] right-12">
                <img
                  src="/dot.png"
                  alt="dot.png"
                  className="h-full w-full object-cover "
                />
              </div>
              <h2 className="flex  text-[24px] text-[#1A0C23] text-center md:flex font-Beatrice font-bold justify-center leading-[28.8px]  md:text-center md:flex-nowrap   ">
                FREE Tshirt Flexing Your CROAKZ NFT
              </h2>
              <div className=" bg-[#ECE75B] h-[23px] w-[102.85px] absolute flex justify-center items-center rounded-[100px] bottom-[-10px] left-[1.5rem] py-[4px] ">
                <p className="font-lexend-deca text-[#312439] text-[12px] font-normal ">
                  25 AVAILABLE
                </p>
              </div>
              <div className="absolute  bottom-[-40px] right-10 md:hidden">
                <h3 className="text-[14px] text-[#FCFCFC] font-lexend-deca font-normal">
                  Sponsored by CROAKZ
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className=" text-[#FFFFFF] md:hidden px-10" id="top-head">
              <Topead />
            </div>
            <div className="hidden md:block">
              <BottomHead />
            </div>
          </div>
          <div className="mt-10 md:flex justify-center flex-col hidden">
            <Footer />
            <BroughtYouBY />
          </div>
        </div>
      </div>
    </>
  );
}
