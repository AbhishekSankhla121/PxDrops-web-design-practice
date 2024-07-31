export default function FooterSubSection() {
  return (
    <>
      <div>
        <div className="w-[80%] h-[500px] bg-[#1A0C23] flex items-center px-10 md:h-[220px]  md:px-20">
          <div className=" h-[400px] md:h-[220px] flex flex-col justify-around md:flex-col md:w-full md:justify-center ">
            <div>
              <div className="flex flex-col justify-evenly h-[270px] md:flex-row md:h-auto md:justify-between ">
                <div>
                  <h1 className="font-lexend-deca font-extrabold text-[16px] leading-[19.2px] text-[#FFFFFF]">
                    Connect with PolyientX
                  </h1>
                  <div className=" flex mt-1">
                    <img
                      src="/TwitterWhite.png"
                      alt="Twitter white logo"
                      className="w-[20.06px] h-[16.65px]"
                    />
                    <img
                      src="/discordWhite.png"
                      alt=""
                      className="w-[18px] h-[21px] mx-2"
                    />
                  </div>
                </div>

                <div className="text-[#FFFFFF]">
                  <p className="text-[16px] font-lexend-deca font-extrabold leading-[19.2px]">
                    Get Involved
                  </p>
                  <div className="text-[14px] font-lexend-deca leading-[21px]">
                    <p className="my-1">About PolyientX</p>
                    <p className="my-1">Jobs</p>
                  </div>
                </div>

                <div className="text-[#FFFFFF]">
                  <p className="text-[16px] font-lexend-deca font-extrabold leading-[19.2px]">
                    Other Info
                  </p>
                  <div className="text-[14px] font-lexend-deca leading-[21px]">
                    <p className="my-1">Terms of Service</p>
                    <p className="my-1">Privacy Policy</p>
                  </div>
                </div>
              </div>

              <div className="text-[16px] mt-6 text-[#FFFFFF] font-lexend-deca  rounded-[100px]   w-[233.97px] h-[56px] flex justify-center items-center bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">
                <button className="text-center  leading-[22.4px] w-[231.97px] bg-[#1A0C23] h-[54px] rounded-[100px] py-[16px] px-[24px] ">
                  Sponsor a Future Drop
                </button>
              </div>
              <div className="mt-5 md:hidden">
                <p className="text-[14px] md:text-center  font-lexend-deca leading-[21px] text-[#FFFFFF]">
                  ©PolyientX, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 hidden md:block">
          <p className="text-[14px] md:text-center  font-lexend-deca leading-[21px] text-[#FFFFFF]">
            ©PolyientX, 2022
          </p>
        </div>
      </div>
    </>
  );
}
