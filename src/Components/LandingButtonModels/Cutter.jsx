import { useGLTF } from "@react-three/drei";

export function Cutter(props) {
  const { nodes, materials } = useGLTF("/Models/LandingButton/Cutter.glb");
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_1.geometry}
        material={materials["Material.011"]}
      />
    </>
  );
}

useGLTF.preload("/Models/LandingButton/Cutter.glb");
