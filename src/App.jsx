import { Toaster } from "react-hot-toast";
import CableCraftNav from "./Components/CableCraftNav";
import Experience from "./Components/Experience";
import GlassBanner from "./Components/GlassBanner";
import Confetti from "confetti-react";
import { useSnapshot } from "valtio";
import { useMediaQuery } from "react-responsive";
import { state } from "../store";
import NoPhoneSvg from "./Components/NoPhoneSvg";

function App() {
  const snap = useSnapshot(state);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <>
      {!isTabletOrMobile ? (
        <>
          {snap.equalArrays && <Confetti />}
          <Toaster position="top-center" />
          <div className="bg-black h-[100vh]">
            <CableCraftNav />
            {/* Glass Banner */}
            <GlassBanner />
            {/* 3D Experience Here */}
            <Experience />
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#ffa52e] h-[100vh] w-[100vw] p-2 font-quicksand text-lg text-center flex flex-col items-center text-white justify-center">
            <div>
              <NoPhoneSvg size={"80px"} color="#fff" />
            </div>
            Oops! This page is not available on mobile devices. For the best experience, please try
            accessing it on a laptop, tablet, or desktop.
          </div>
        </>
      )}
    </>
  );
}

export default App;
