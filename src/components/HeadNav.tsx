import Link from "next/link";
import React from "react";
import FixedItem from "./fixedItem";
import FixedSub from "./FixedSub";

export default function Headnav() {
  const data = [
    {
      name: "About PX Drops",
      href: "#home",
    },
    {
      name: "Previous Drops",
      href: "#home",
    },
    {
      name: "About Sponor",
      href: "#home",
    },
    {
      name: "About PolyientX",
      href: "#home",
    },
  ];
  return (
    <>
      <div className=" flex flex-col-reverse w-full md:flex-row bg-[#200D40] sticky top-0 z-10">
        <div className=" w-full h-[100vh] md:md:w-[30%] md:max-h-[70px]  hidden md:block ">
          <FixedItem />
        </div>

        <div className="md:mx-auto w-full md:w-[70%]">
          <nav
            className="flex  justify-around  w-full  items-center
            h-[70px] md:h-[70px] md:w-full bg-[#200D40] md:justify-between"
          >
            <div className="w-[80%] md:px-4 flex justify-between  md:mt-0 md:max-w-[25%] md:justify-center ">
              <div className="max-w-">
                <img
                  src="/0image.png"
                  className="max-h-[22.6px] "
                  alt="compony logo"
                />
              </div>
              <div className="md:hidden">
                <img
                  src="/hamburger.png"
                  className="max-h-[24px] max-w-[24px]"
                  alt=""
                />
              </div>
            </div>

            <ul className=" hidden md:flex  font-lexend-deca text-[#C7C8C9] leading-[14.4px] font-bold md:min-w-[60%]  justify-around ">
              {data.map((element) => (
                <React.Fragment key={element.name}>
                  <Link
                    href={element.href}
                    className="w-[80%] flex items-center"
                  >
                    <li className="xl:text-[12px] text-[55%]">
                      {element.name}
                    </li>
                  </Link>
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
