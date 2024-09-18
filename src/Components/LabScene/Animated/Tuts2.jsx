import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { state } from "../../../../store";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

export function Tuts2(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/Tool2.glb");
  const snap = useSnapshot(state);
  const strip = useRef();

  useFrame((_, delta) => {
    if (snap.currentToolIndex === 2) {
      strip.current.visible = true;
      strip.current.rotation.y = strip.current.rotation.y + delta;
    } else {
      strip.current.visible = false;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={strip} scale={0.8} position={[0.054, 1.091, -9.391]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WireStripper001.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WireStripper001_1.geometry}
          material={materials["Material.011"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/Tool2.glb");
