import Footer from "./foooter";

export default function FooterBottom() {
  return (
    <>
      <div className="w-full h-[132px] bg-[#1A0C23] flex items-end  ">
        <div className="bg-[#200D40] w-full h-[80px] flex items-center justify-center  relative  md:items-center ">
          <div className="w-full flex justify-center  md:items-center md:flex md:justify-evenly">
            <p className="text-[#FFFFFF] uppercase leading-[19.2px] hidden md:block text-[16px] font-bold font-Beatrice">
              REgister now to secure your chance to win
            </p>
            <button className="text-[#1E2223] text-[20px] font-Beatrice font-bold leading-[28px] bg-[#00D1DE] rounded-[12px] border-[8px] border-[#200D40] h-[56px] absolute top-[-30px] w-[90%] sm-medium:w-[327px] md:static">
              Register for Claim Day
            </button>
            <div className="w-[80%] md:hidden mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
