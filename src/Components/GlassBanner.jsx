import { useSnapshot } from "valtio";
import LandingButton from "./LandingButton";
import { state } from "../../store";

const GlassBanner = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {/* Glass Bg Start */}
      <div
        className={`glassbg absolute w-full h-full top-0 left-0 origin-top ${
          snap.glassbgDisplay ? "" : "scale-y-0"
        }  transition-all ease-linear duration-[2500ms] z-10`}
      ></div>
      {/* Glass Bg End */}
      <div
        className={` ${
          snap.glassbgDisplay ? "" : "scale-0"
        }  transition-all ease-linear duration-[1500ms] mx-auto flex flex-col absolute items-center justify-center w-[100%] md:h-[100vh] z-10`}
      >
        <div className="flex flex-col items-center justify-center w-full h-[100%] overflow-hidden">
          <div className=" w-[70vw] select-none md:w-[50vw] font-bold">
            <p className="font-sansita text-2xl text-center text-[#e2a856] lg:text-[5rem] lg:mb-8">
              CABLE-CRAFT
            </p>
            <p className="font-quicksand text-center text-white md:text-center text-sm md:text-xl">
              Step into the world of network crimping excellence with CableCraft, your trusted
              companion on the path to mastering the intricacies of Ethernet cables. As a network
              scholar, you understand the significance of precise crimping techniques in achieving
              seamless data transmission and network reliability.
            </p>
          </div>
          <div className="text-center mt-10">
            <LandingButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassBanner;
