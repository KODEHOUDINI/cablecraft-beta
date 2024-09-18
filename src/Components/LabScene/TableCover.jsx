import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function TableCover(props) {
  const { nodes } = useGLTF("/Models/LabScene/TableCover.glb");

  const { mapIntensity } = useControls({
    mapIntensity: { value: 0.8, min: 0, max: 5, step: 0.0001 },
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        // material={materials["Material.007"]}
        position={[0.084, 0.91, -9.623]}
      >
        <meshStandardMaterial color={"#ffaa2c"} roughness={mapIntensity} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/TableCover.glb");
