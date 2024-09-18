import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { state } from "../../../../store";
import { useSnapshot } from "valtio";

export function Tuts5(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/CrimpTool.glb");
  const snap = useSnapshot(state);
  const crimpRef = useRef();

  useFrame((_, delta) => {
    if (snap.currentToolIndex === 3) {
      crimpRef.current.visible = true;
      crimpRef.current.rotation.x = crimpRef.current.rotation.x + delta;
    } else {
      crimpRef.current.visible = false;
    }
  });
  return (
    <group {...props} dispose={null}>
      <group scale={0.9} ref={crimpRef} position={[-0.044, 1.095, -9.402]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle1001.geometry}
          material={materials["Material.015"]}
          position={[0.178, -0.001, 0]}
          rotation={[1.571, -1.536, 0]}
          scale={0.728}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14001.geometry}
            material={materials["Material.014"]}
            position={[0.016, 0.001, 0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16001.geometry}
            material={materials["Material.014"]}
            position={[0, -0.001, 0.032]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20001.geometry}
            material={materials["Material.014"]}
            position={[0.016, 0.001, 0.004]}
            rotation={[0, -0.635, Math.PI]}
            scale={0.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39001.geometry}
            material={materials["Material.014"]}
            position={[0.008, -0.001, 0.027]}
            rotation={[0, 0.007, Math.PI]}
            scale={0.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4001.geometry}
            material={materials["black_1.001"]}
            position={[0, 0.002, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41001.geometry}
            material={materials["Material.014"]}
            position={[0.009, -0.003, 0.028]}
            rotation={[0, 0.007, Math.PI]}
            scale={0.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6001.geometry}
            material={materials["black_1.001"]}
            position={[0.004, -0.001, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8001.geometry}
            material={materials["black_2.001"]}
            position={[0.009, -0.006, 0.028]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pivot001.geometry}
            material={materials["Material.014"]}
            position={[0, -0.001, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle2001.geometry}
          material={materials["Material.015"]}
          position={[0.178, -0.001, 0]}
          rotation={[1.571, -1.536, 0]}
          scale={0.728}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22001.geometry}
            material={materials["black_1.001"]}
            position={[0, 0.002, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24001.geometry}
            material={materials["Material.014"]}
            position={[-0.011, -0.001, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26001.geometry}
            material={materials["Material.014"]}
            position={[-0.012, -0.003, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28001.geometry}
            material={materials["black_2.001"]}
            position={[-0.021, -0.001, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29001.geometry}
            material={materials["black_1.001"]}
            position={[-0.021, -0.001, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31001.geometry}
            material={materials["black_1.001"]}
            position={[-0.022, -0.008, 0.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33001.geometry}
            material={materials["Material.014"]}
            position={[-0.003, -0.001, 0.032]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/CrimpTool.glb");
