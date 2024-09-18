import { useGLTF } from "@react-three/drei";

export function Wall(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/New Wall Bake.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Baked.geometry}
        material={materials["Wall_Baked.004"]}
        position={[-0.042, -0.021, -8.155]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/New Wall Bake.glb");
