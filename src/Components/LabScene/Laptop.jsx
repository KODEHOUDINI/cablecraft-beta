import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/BlackLaptop.glb");
  const lap = useRef();
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={lap}
        castShadow
        receiveShadow
        geometry={nodes.laptop.geometry}
        material={materials["Material.006"]}
        position={[0.062, 0.939, -9.829]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.238}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/BlackLaptop.glb");
