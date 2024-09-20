import { MotionConfig, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Cutter } from "./LandingButtonModels/Cutter";
import { Connector } from "./LandingButtonModels/Connector";
import { Cable } from "./LandingButtonModels/Cable";
import { CrimpTool } from "./LandingButtonModels/CrimpTool";

const useSmoothTransform = (value, springOptions, transformer) => {
  const transformedValue = useTransform(value, transformer);
  return useSpring(transformedValue, springOptions);
};

const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

export function Shapes({ isHover, isPress, mouseX, mouseY }) {
  return (
    <Canvas shadows camera={{ fov: 30 }} resize={{ scroll: false, offsetSize: true }}>
      <Environment files={"/hdr/s.hdr"} />
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 },
          }}
        >
          <CableModel />
          <CrimpToolModel />
          <ConnectorModel />
          <CutterModel />
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function CableModel() {
  return (
    <motion.group
      dispose={null}
      scale={[20, 20, 20]}
      position={[-0.5, -0.3, 0]}
      variants={{ hover: { z: 2 } }}
    >
      <Cable />
    </motion.group>
  );
}

export function CrimpToolModel() {
  return (
    <motion.mesh
      position={[-0.8, 0.6, 0]}
      rotation={[-0.5, 0, -0.3]}
      scale={[10, 10, 10]}
      variants={{
        hover: {
          z: 1.1,
          x: -1.5,
          rotateX: -0.2,
          rotateZ: 0.4,
        },
      }}
    >
      <CrimpTool />
    </motion.mesh>
  );
}

export function ConnectorModel() {
  return (
    <motion.group
      dispose={null}
      position={[0.1, 0.4, 0]}
      scale={[12, 12, 12]}
      variants={{
        hover: {
          y: 0.5,
          z: 2,
          rotateY: -0.2,
        },
      }}
    >
      <Connector />
    </motion.group>
  );
}

export function CutterModel() {
  return (
    <motion.group
      dispose={null}
      position={[1.1, 0, 0]}
      scale={[12, 12, 12]}
      variants={{
        hover: {
          x: 1.8,
          z: 0.6,
          y: 0.6,
          rotateZ: -0.5,
        },
      }}
    >
      <Cutter />
    </motion.group>
  );
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.on("change", () => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX.get(), cameraY.get(), 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
