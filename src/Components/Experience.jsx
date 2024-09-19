import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Laptop } from "./LabScene/Laptop";
import { TableFloor } from "./LabScene/TableFloor";
import { Wall } from "./LabScene/Wall";
import { TableCover } from "./LabScene/TableCover";
import CamRig from "./LabScene/Camera Rig/CamRig";
import { LabManual } from "./LabScene/LabManual";
import { Tuts1 } from "./LabScene/Animated/Tuts1";
import { Tuts2 } from "./LabScene/Animated/Tuts2";
import { Tuts4 } from "./LabScene/Animated/Tuts4";
import { Tuts5 } from "./LabScene/Animated/Tuts5";
import { Tuts6 } from "./LabScene/Animated/Tuts6";
import { ColorCodeTut } from "./LabScene/Animated/ColorCodeTut";
import { AnimatedCrimp } from "./LabScene/Practicals/AnimatedCrimp";
import { PracticeModels } from "./LabScene/Practicals/PracticeModels";
import ConfiguratorScreen from "./LabScene/ConfiguratorScreen";
import { state } from "../../store";
import { useSnapshot } from "valtio";
import { FloorSocket } from "./LabScene/FloorSocket";
import { WireExtension } from "./LabScene/WireExtension";

const Experience = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <div className="absolute z-10 top-28 left-10">
        <ConfiguratorScreen />
      </div>
      <Canvas camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        {/* <OrbitControls /> */}
        {/* MY CAMERA RIG */}
        <CamRig />
        <Laptop />
        <TableCover />
        <TableFloor />
        <FloorSocket />
        <WireExtension />
        <Wall />
        {!snap.startTraining && snap.showManual && (
          <>
            {/* Iteractive 3d card where users will click to learn */}
            <LabManual />
            {/* Strain Relief */}
            <Tuts1 />
            {/* // Wire Striper */}
            <Tuts2 />
            {/* <Tuts3 /> */}
            <Tuts4 />
            {/* // Crimp Tool */}
            <Tuts5 />
            {/* // Ehternet Cable */}
            <Tuts6 />
            {/* Color Code Spheres */}
            <ColorCodeTut />
          </>
        )}

        {/* Practicals */}
        <AnimatedCrimp />
        <PracticeModels />
        <Environment files={"/hdr/s4.hdr"} />
      </Canvas>
    </>
  );
};

export default Experience;
