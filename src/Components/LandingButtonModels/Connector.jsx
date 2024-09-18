import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export function Connector(props) {
  const { nodes, materials } = useGLTF("/Models/LandingButton/RJ45.glb");
  return (
    <>
      <mesh castShadow receiveShadow geometry={nodes.Ethernet_Connector007.geometry}>
        <MeshTransmissionMaterial
          samples={16}
          resolution={2048}
          anisotropicBlur={0.2}
          distortion={0}
          distortionScale={0}
          chromaticAberration={0.06}
          transmission={0.4}
          thickness={0.1}
          roughness={0.4}
          toneMapped={true}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teeth.geometry}
          material={materials["copper.001"]}
        />
      </mesh>
    </>
  );
}

useGLTF.preload("/Models/LandingButton/RJ45.glb");
