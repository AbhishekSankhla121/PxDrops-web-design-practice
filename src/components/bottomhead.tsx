export default function BottomHead() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex  items-center">
          <img
            src="/clockone.png"
            className="flex h-[16.67px] w-[16.67px] items-center mr-[7px]"
            alt="clock"
          />
          <div className="">
            <p className="font-Inter leading-[22.4px] text-[16px] text-[#FCFCFC] font-normal underline">
              Fri, December 10th 15:00
            </p>
          </div>
          <h3 className="font-Inter leading-[22.4px] text-[16px] font-normal text-[#00D1DE] mx-[1rem] ">
            UTC
          </h3>
        </div>
        <div className="flex mt-1 items-center ">
          <img
            src="/flag.png"
            className="flex h-[16.67px] w-[16.67px] items-center mr-[10px]"
            alt="flag"
          />
          <div>
            <p className="font-Inter leading-[22.4px] text-[16px] text-[#FCFCFC] font-normal">
              25 Available
            </p>
          </div>
        </div>

        <div className=" mt-1 items-center hidden  md:flex ">
          <img
            src="/Home.png"
            className="flex h-[16.67px] w-[16.67px] items-center mr-[10px]"
            alt="flag"
          />
          <div>
            <p className="font-Inter leading-[22.4px] text-[16px] text-[#FCFCFC] font-normal">
              Sponsored by CROAKZ & NFTshirts
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
