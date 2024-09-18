import { useGLTF } from "@react-three/drei";

export function WireExtension(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/EthernetSourceExtended.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Animated_Cable.geometry}
        material={materials["Material.004"]}
        position={[-0.466, 0.926, -9.614]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/EthernetSourceExtended.glb");
