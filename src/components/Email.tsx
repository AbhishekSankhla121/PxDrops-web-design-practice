export default function Email() {
  return (
    <>
      <div className="w-full h-[290px] bg-[#ECE75B] py-[32px] px-10 md:px20 md:h-[126px] md:py-0 md:mt-5">
        <div className="  h-[210px] md:h-[126px] md:flex md:justify-between md:items-center md:max-w-[1024px] ">
          <div className=" flex items-center">
            <img src="/timmer.png" className="w-[73px] h-[73px] " alt="" />
            <h3 className="font-Beatrice text-[20px] font-bold leading-[24px] ml-3 text-[#200D40]">
              NEXT DROP: 12/15/21
            </h3>
          </div>
          <div className="w-full mt-10 md:w-[50%] md:mt-0 ">
            <h4 className=" text-[16px] font-lexend-deca leading-[19.2PX] w-full md:hidden ">
              Be the first to know, share your email to get updates on upcoming
              Drops!
            </h4>
            <h4 className=" hidden text-[16px] font-lexend-deca leading-[19.2PX]  md:flex">
              get updates on upcoming Drops!
            </h4>
            <div className="w-full h-[51px] relative mt-6 md:mt-2">
              <img
                src="/email.png"
                className="w-[16.67px] h-[15px] absolute top-[18px] left-[10px]"
                alt=""
              />
              <input
                type="text"
                className="  pl-9  pr-20 w-full h-[51px] md:hidden bg-[#F1ED84] border-[1px] border-[#53495A] rounded-[8px] placeholder-custom"
                placeholder="Email address"
              />
              <input
                type="text"
                className="  pl-9 hidden pr-20 w-full h-[51px] md:block bg-[#F1ED84] border-[1px] border-[#53495A] rounded-[8px] placeholder-custom"
                placeholder="Enter your email address"
              />
              <button className="bg-[#200D40] rounded-[8px] h-[36.86px] w-[70px] font-Beatrice text-[#FFFFFF] text-[12px absolute top-2 right-[10px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
