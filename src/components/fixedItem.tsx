import BottomHead from "./bottomhead";
import FixedSub from "./FixedSub";
import Footer from "./foooter";
import Topead from "./tophead";

export default function FixedItem() {
  return (
    <>
      <div
        className="bg-[#ECE75B]  flex  h-full justify-center items-center w-[100%] px-[24px] py-[8px] md:px-0 my-0 "
        id="header-fixed-left-item"
      >
        <div className="h-[24px] w-[24px] flex items-center  justify-center">
          <img
            src="/clockzero.png"
            className="h-[18px] w-[24px] object-contain"
            alt=""
          />
        </div>

        <h2 className="mx-1 font-Inter leading-[19.36px] text-[#1A0C23] text-[16px] md:text-[24px] md:font-bold md:leading-[30px] font-bold md:font-lexend-deca ">
          DROPS IN{" "}
        </h2>
        <h2 className="mx-1 md:font-lexend-deca text-[#1A0C23] font-extrabold md:font-bold font-Inter leading-[29.05px] text-[24px] md:leading-[30px]">
          23:45:02
        </h2>
      </div>
      <div className="hidden md:block"></div>
    </>
  );
}
