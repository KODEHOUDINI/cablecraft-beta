import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "../../../../store";

export function Tuts1(props) {
  const { nodes } = useGLTF("/Models/LabScene/Tool1.glb");
  const rjRef = useRef();
  const snap = useSnapshot(state);

  useFrame((_, delta) => {
    if (snap.currentToolIndex === 1) {
      rjRef.current.visible = true;
      rjRef.current.rotation.y = rjRef.current.rotation.y + delta;
    } else {
      rjRef.current.visible = false;
    }
  });

  return (
    <group {...props} scale={1} dispose={null}>
      <mesh
        ref={rjRef}
        castShadow
        receiveShadow
        geometry={nodes.Tool_1_RJ45.geometry}
        position={[0.056, 1.08, -9.402]}
        scale={2}
        rotation={[0, 3.14, 0]}
      >
        <MeshTransmissionMaterial
          samples={15}
          resolution={512}
          anisotropicBlur={0.5}
          thickness={0}
          roughness={0.3}
          distortion={2}
          distortionScale={2}
          transmission={0.7}
          color={"#ffffff"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RJ45_Metal.geometry}
          position={[0, 0.004, -0.004]}
          scale={[1, 1.949, 1]}
        >
          <meshStandardMaterial color={"#b87333"} metalness={1} roughness={0.5} />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/Tool1.glb");
