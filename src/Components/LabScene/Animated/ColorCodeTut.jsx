import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { state } from "../../../../store";

export function ColorCodeTut(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/ColorCodingSphere.glb");
  const snap = useSnapshot(state);
  const spheresRef = useRef();
  const c1ref = useRef();
  const c3ref = useRef();

  useFrame((_, delta) => {
    if (snap.currentToolIndex > 11 && snap.currentToolIndex < 14) {
      spheresRef.current.visible = true;
    } else {
      spheresRef.current.visible = false;
    }

    if (snap.currentToolIndex == 13) {
      easing.dampC(c1ref.current.material.color, 0xe76c13, 0.25, delta);
      easing.dampC(c3ref.current.material.color, 0x85e700, 0.25, delta);
    } else {
      easing.dampC(c1ref.current.material.color, 0x85e700, 0.25, delta);
      easing.dampC(c3ref.current.material.color, 0xe76c13, 0.25, delta);
    }
  });

  return (
    <group {...props} ref={spheresRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C2.geometry}
        material={materials.Green}
        position={[-0.03, 1.088, -9.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[-0.064, 1.088, -9.4]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1_1.geometry}
          material={materials.Green}
          ref={c1ref}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C4.geometry}
        material={materials.Blue}
        position={[0.04, 1.088, -9.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[0.005, 1.088, -9.4]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C3_1.geometry}
          material={materials["Orange.001"]}
          ref={c3ref}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C3_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C6.geometry}
        material={materials["Orange.001"]}
        position={[0.108, 1.088, -9.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[0.074, 1.088, -9.4]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.C5_1.geometry} material={materials.Blue} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C5_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C8.geometry}
        material={materials.Brown}
        position={[0.178, 1.088, -9.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[0.144, 1.088, -9.4]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.C7_1.geometry} material={materials.Brown} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C7_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/ColorCodingSphere.glb");
