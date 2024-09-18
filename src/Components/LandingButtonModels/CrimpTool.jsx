import { useGLTF } from "@react-three/drei";

export function CrimpTool(props) {
  const { nodes, materials } = useGLTF("/Models/LandingButton/CrimpLandingButton.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.026, 0.03, -0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16001.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16001_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16001_2.geometry}
          material={materials["black_2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16001_3.geometry}
          material={materials["black_1.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LandingButton/CrimpLandingButton.glb");
