import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { state } from "../../../store";

export function TableFloor(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/Models/LabScene/CablecraftTableFloor.glb");

  const cableFocusRef = useRef();

  return (
    <>
      <group {...props} dispose={null}>
        {/* Tabletop Look */}
        <mesh
          ref={cableFocusRef}
          visible={false}
          position={[-0.19822, 0.98, -9.75842]}
          scale={[0.088169, 0.028594, 0.053993]}
        >
          <boxGeometry args={[0.176338 * 10, 0.037188 * 10, 0.107986 * 10]} />
          <meshNormalMaterial />
        </mesh>
        {/* Tabletop Look End */}

        <mesh
          geometry={nodes.Table_Baked.geometry}
          material={materials.Table_Baked}
          position={[-1.118, 0.907, -12.079]}
        />
        <mesh
          geometry={nodes.Floor_Baked.geometry}
          material={materials.Floor_Baked}
          position={[-0.042, -0.021, -8.155]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/Models/LabScene/CablecraftTableFloor.glb");
