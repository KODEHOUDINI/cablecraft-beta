import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "../../../../store";

export function Tuts4(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/StrainReliefBoots.glb");
  const snap = useSnapshot(state);

  const strainRef = useRef();

  useFrame((_, delta) => {
    if (snap.currentToolIndex === 0 && snap.hideLabIntro) {
      strainRef.current.visible = true;
      strainRef.current.rotation.y = strainRef.current.rotation.y + delta;
    } else {
      strainRef.current.visible = false;
    }
  });
  return (
    <group {...props} scale={1} dispose={null}>
      <mesh
        ref={strainRef}
        castShadow
        receiveShadow
        geometry={nodes.StrainReliefBoots001.geometry}
        material={materials["Material.002"]}
        position={[0.056, 1.093, -9.403]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/StrainReliefBoots.glb");
