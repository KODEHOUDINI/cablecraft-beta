import { useEffect, useRef, useState } from "react";
import { Html, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { IoHome } from "react-icons/io5";
import { BsEthernet } from "react-icons/bs";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { crimpingJourney } from "./Descriptions/Tuts";
import { easing } from "maath";
import { state } from "../../../store";

export function LabManual(props) {
  const { nodes } = useGLTF("/Models/LabScene/Manual.glb");
  const snap = useSnapshot(state);
  const { CposZ, CscaX, CscaY, CscaZ } = useControls({
    CposZ: { value: -9.6, min: -30, max: 30, step: 0.0001 },
    CscaX: { value: 1.71, min: 0, max: 5, step: 0.0001 },
    CscaY: { value: 1.69, min: 0, max: 5, step: 0.0001 },
    CscaZ: { value: 1, min: 0, max: 5, step: 0.0001 },
  });

  const glassBoard = useRef();

  useFrame((_, delta) => {
    if (snap.startTraining) {
      easing.damp3(glassBoard.current.scale, [0, 0, 0], 0.95, delta);
    } else {
      easing.damp3(glassBoard.current.scale, [1, 1, 1], 0.95, delta);
    }
  });

  return (
    <group {...props} ref={glassBoard} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HtmlCard.geometry}
        // material={nodes.HtmlCard.material}
        position={[0.062, 1.09, CposZ]}
        scale={[CscaX, CscaY, CscaZ]}
      >
        <MeshTransmissionMaterial
          samples={15}
          resolution={1024}
          anisotropicBlur={0.5}
          thickness={0.1}
          roughness={0.5}
          toneMapped={true}
          color={"#ffdf7f"}
        />
        {snap.hideLabIntro ? <Tuts /> : <Intro />}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/Manual.glb");

const handlePlayReversal = () => {
  state.glassbgDisplay = true;
  state.targetPosZ = -10.829 + 0.4;
  state.showManual = false;
  state.groupActive = 1;
  state.currentToolIndex = 0;
  state.startTraining = false;
  state.playCrimpAnim = false;
};

const Intro = () => {
  const handleIntro = () => {
    state.hideLabIntro = true;
  };
  return (
    <>
      <Html distanceFactor={0.5} center>
        <div className="m-2 scale-[0.9] bg-opacity-0 md:w-[70vw] md:h-[58vh] px-10 py-5 flex flex-col items-center justify-start gap-2 relative overflow-hidden">
          <div className="flex w-full justify-between">
            <div
              onClick={handlePlayReversal}
              className="cursor-pointer group relative bg-white p-2 rounded-full"
            >
              <IoHome />
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full">
                <span className="text-zinc-400 whitespace-nowrap">Homepage</span>
                <div className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
              </div>
            </div>
            <p className="cardtxt font-semibold text-[2rem] text-white tracking-wider  text-xl">
              Welcome to Cable Craft!
            </p>
            <div className="cursor-pointer group relative bg-white p-2 rounded-full">
              <BsEthernet />
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full">
                <span className="text-zinc-400 whitespace-nowrap">Practice</span>
                <div className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <p className="blueberry font-[400] text-white text-[1.5rem] text-justify overflow-hidden h-full">
            Crimping might sound like a complex term, but it's actually a straightforward and
            essential process in making reliable network cables. Whether you're setting up a home
            network or working on a larger project, understanding the tools involved can make your
            job a lot easier and more efficient. Each tool has a specific purpose, and together,
            they ensure that your cables are sturdy, well-connected, and ready for action. Curious
            to learn more about these tools and how they work in the crimping process? Click on the
            "Begin Journey" button below to dive into the details!
          </p>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="font-semibold "></p>
            <p>
              <button
                onClick={handleIntro}
                className="relative flex text-white h-10 w-40 items-center justify-center rounded bg-[#f4a318] duration-300 [box-shadow:2px_2px_0px_2px] active:translate-x-0.5 active:translate-y-0.5 active:[box-shadow:-1px_1px_0px_1px]"
              >
                Get Started
              </button>
            </p>
          </div>
        </div>
      </Html>
    </>
  );
};

const Tuts = () => {
  const mySnap = useSnapshot(state);
  const [currentIndex, setCurrentIndex] = useState(mySnap.currentToolIndex);

  // Update global state and localStorage when currentIndex changes
  useEffect(() => {
    state.currentToolIndex = currentIndex;
  }, [currentIndex]);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % crimpingJourney.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? crimpingJourney.length - 1 : prevIndex - 1));
  };

  const currentItem = crimpingJourney[mySnap.currentToolIndex];

  // Sync currentIndex with global state on initial render
  useEffect(() => {
    setCurrentIndex(mySnap.currentToolIndex);
  }, []);

  const hideManual = () => {
    state.startTraining = true;
    state.playCrimpAnim = false;
  };

  return (
    <>
      <Html distanceFactor={0.5} center>
        <div className=" scale-[0.9] text-sm bg-opacity-0 md:w-[70vw] md:h-[66vh] px-10 py-1 flex flex-col items-center justify-start gap-2 relative overflow-hidden">
          <div className="flex w-full justify-between">
            <div
              onClick={handlePlayReversal}
              className="cursor-pointer group relative bg-white p-2 rounded-full"
            >
              <IoHome />
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full">
                <span className="text-zinc-400 whitespace-nowrap">Homepage</span>
              </div>
            </div>
            <p className="cardtxt font-semibold text-[2.3rem] text-white tracking-wider  text-xl">
              {currentItem.name}
            </p>
            <div
              onClick={hideManual}
              className="cursor-pointer group relative bg-white p-2 rounded-full"
            >
              <BsEthernet />
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full">
                <span className="text-zinc-400 whitespace-nowrap">Practice</span>
                <div className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <p className="blueberry leading-6 p-2 font-[600] font-quicksand text-white text-[1.3rem] text-justify overflow-hidden h-full">
            {currentItem.description}
          </p>
          <div className=" flex  flex-row justify-between items-center h-full w-full">
            <p className=" font-semibold ">
              <button
                onClick={prevItem}
                className="relative flex h-10 w-10 items-center text-white justify-center rounded bg-[#f4a318] duration-300 [box-shadow:-2px_2px_0px_2px] active:translate-x-0.5 active:translate-y-0.5 active:[box-shadow:-1px_1px_0px_1px]"
              >
                <span className="text-xs font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 fill-white hover:fill-blue-gray-600"
                  >
                    <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
                  </svg>
                </span>
              </button>
            </p>
            <p className="lg:inline-flex items-center gap-3 cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
              <button
                onClick={nextItem}
                className="relative flex h-10 w-10 items-center justify-center text-white rounded bg-[#f4a318] duration-300 [box-shadow:2px_2px_0px_2px] active:translate-x-0.5 active:translate-y-0.5 active:[box-shadow:1px_1px_0px_1px]"
              >
                <span className="rotate-180 text-xs font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 fill-white hover:fill-blue-gray-600"
                  >
                    <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"></path>
                  </svg>
                </span>
              </button>
            </p>
          </div>
          <p className="blueberry font-[600] font-quicksand leading-6 text-white text-[1.3rem] p-2 overflow-y-auto mb-2 text-justify overflow-hidden h-full">
            {currentItem.function}
          </p>
        </div>
      </Html>
    </>
  );
};
