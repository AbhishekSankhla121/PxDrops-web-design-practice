import { IoOpenOutline } from "react-icons/io5";
import BottomHead from "./bottomhead";

export default function Topead() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <div className="w-full ">
            <h3 className="text-[#FFFFFF] text-[20px] font-Beatrice leading-[24px] font-bold md:leading-[41.6px] md:text-[32px] md:font-bold md:hidden">
              An exclusive drop for those holding an NFT from:
            </h3>

            <h1 className="text-[#FFFFFF] hidden text-[20px] md:block font-Beatrice leading-[24px] font-bold md:leading-[41.6px] md:text-[32px] md:font-bold">
              An exclusive drop for those holding <br /> an NFT from:
            </h1>
          </div>
          <div className="w-full flex items-center   mt-5">
            <div className=" h-[58px] w-[58px] flex items-center">
              <img
                src="/2image.png"
                className="object-cover h-full w-full  rounded-full"
                alt="skull image"
              />
            </div>
            <div className="mx-5 flex flex-col ">
              <h5 className="font-lexend-deca md:hidden text-[18px] text-[#FFFFFF]">
                CROAKZ by McGill!
              </h5>
              <h1 className="hidden font-lexend-deca text-[32px] text-[#FFFFFF] font-bold md:block">
                CROAKZ
              </h1>
              <div className=" flex items-center   ">
                <h6 className="text-[14px] font-lexend-deca leading-[21px] md:text-[16px] text-linear-gradient">
                  Browse Collection
                </h6>
                <img
                  src="/linkopen.png"
                  className="h-[15px] w-[15px] mx-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3 bg-[#53495A] w-full h-[2px] border-t-0 md:hidden" />
        <div className="md:hidden">
          <BottomHead />
        </div>
      </div>
    </>
  );
}
