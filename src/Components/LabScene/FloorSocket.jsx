import { useGLTF } from "@react-three/drei";

export function FloorSocket(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/EthernetSource.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PortHold_Baked.geometry}
        material={materials["PortHold_Baked.001"]}
        position={[-0.273, 0.014, -9.502]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloorStrainReliefBoots_Baked.geometry}
        material={materials["FloorStrainReliefBoots_Baked.001"]}
        position={[-0.298, 0.042, -9.495]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.UnAnimated_Cable_Baked.geometry}
        material={materials["UnAnimated Cable_Baked.001"]}
        position={[-0.435, 0.471, -9.193]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/EthernetSource.glb");
