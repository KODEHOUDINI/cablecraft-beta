import { useGLTF } from "@react-three/drei";

export function Connected(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/Connected.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laptop_Screen.geometry}
        material={materials.Material}
        position={[0.062, 1.09, -9.906]}
        rotation={[0, -1.571, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/Connected.glb");
