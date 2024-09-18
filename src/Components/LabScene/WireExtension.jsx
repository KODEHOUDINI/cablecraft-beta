import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function WireExtension(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/EthernetSourceExtended.glb");
  const { eposz } = useControls({
    eposz: { value: -9.614, min: -10, max: 0, step: 0.001 },
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Animated_Cable.geometry}
        material={materials["Material.004"]}
        position={[-0.466, 0.926, eposz]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LabScene/EthernetSourceExtended.glb");
