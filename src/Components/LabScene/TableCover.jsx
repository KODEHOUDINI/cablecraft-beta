import { useGLTF } from "@react-three/drei";

export function TableCover(props) {
  const { nodes } = useGLTF("/Models/LabScene/TableCover.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[0.084, 0.91, -9.623]}
      >
        <meshStandardMaterial color={"#ffaa2c"} roughness={0.8} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/TableCover.glb");
