import AboutContainer from "@/components/AboutContainer";
import BriefIntro from "@/components/BriefIntro";
import Email from "@/components/Email";
import FixedItem from "@/components/fixedItem";
import FixedSub from "@/components/FixedSub";
import FooterBottom from "@/components/FooterBottom";
import FooterSubSection from "@/components/FooterSection";
import Recommended from "@/components/Recommend";
import Topead from "@/components/tophead";

export default function Home() {
  return (
    <>
      <div className="md:w-full md:flex md:h-full  ">
        <div className="md:w-[30%] h-full overflow-hidden hidden  md:block Scroll-none">
          <FixedSub />
        </div>

        <div className="md:w-[70%]  md:h-[95vh] md:pt-20 overflow-y-scroll Scroll-none  ">
          <div className="md:hidden ">
            <FixedItem />
            <FixedSub />
          </div>
          <div className="xl:px-32 md:px-10 ">
            <div className="hidden md:flex ">
              <Topead />
            </div>
            <div className=" md:px-0">
              <AboutContainer />
            </div>
            <div className="md:flex-col-reverse md:flex md:mt-10 md:min-h-[416px]:">
              <Recommended />
              <div className="px-10">
                <BriefIntro />
              </div>
            </div>
          </div>
          <Email />
          <div className="md:px20">
            <FooterSubSection />
          </div>

          <FooterBottom />
        </div>
      </div>
    </>
  );
}
