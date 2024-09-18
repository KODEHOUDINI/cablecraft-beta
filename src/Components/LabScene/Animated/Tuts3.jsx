import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, MeshTransmissionMaterial } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { state } from "../../../../store";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Tuts3(props) {
  const group = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials, animations } = useGLTF("/Models/LabScene/Tool3 Anim Set.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const empty = useRef();

  useFrame((_, delta) => {
    if (snap.currentToolIndex === 3) {
      empty.current.rotation.y = empty.current.rotation.y + delta;
    }
  });

  useEffect(() => {
    if (snap.currentToolIndex === 3) {
      // Define the sequence of actions
      const actionSequence = [
        { name: "CableAnim", startTime: 0, duration: 1.05 },
        { name: "StrainReliefBoots Anim", startTime: 1.09, duration: 1.03 },
        { name: "RJ45 Anim", startTime: 2.12, duration: 0.96 },
        // { name: "Empty Anim", startTime: 3.08, duration: 2.12, loop: true },
      ];

      // Schedule the actions
      // Schedule the actions
      actionSequence.forEach(({ name, startTime, duration, loop }) => {
        const action = actions[name];
        if (action) {
          setTimeout(() => {
            if (loop) {
              // Loop the last action
              action.reset().setLoop(THREE.LoopRepeat).play();
            } else {
              action.reset().setLoop(THREE.LoopOnce, 1).play();
              setTimeout(() => {
                // Pause the animation on its last frame
                action.paused = true;
                action.time = action.getClip().duration;
              }, duration * 1000);
            }
          }, startTime * 1000);
        }
      });
    }
  }, [actions, mixer, snap.currentToolIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Lab_Scene">
        <group
          ref={empty}
          name="Tool_3_Empty"
          position={[0.052, 1.1, -9.404]}
          scale={`${snap.currentToolIndex === 3 ? 0.09 : 0}`}
        >
          <mesh
            name="Tool_3_Cable"
            castShadow
            receiveShadow
            geometry={nodes.Tool_3_Cable.geometry}
            material={materials["Material.004"]}
            position={[-0.017, -0.724, -0.02]}
            scale={[16.565, 0, 16.565]}
          />
          <mesh
            name="Tool_3_RJ45"
            castShadow
            receiveShadow
            geometry={nodes.Tool_3_RJ45.geometry}
            // material={materials["Material.003"]}
            position={[-0.015, 0.099, 0.01]}
            scale={0}
          >
            <MeshTransmissionMaterial
              samples={15}
              resolution={512}
              anisotropicBlur={0.5}
              thickness={0}
              roughness={0.1}
              transmission={0.7}
              // toneMapped={true}
              color={"#e0e0e0"}
            />
            <mesh
              name="Cube001"
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials["copper.001"]}
              scale={0}
            />
          </mesh>
          <mesh
            name="Tool_3_StrainReliefBoots"
            castShadow
            receiveShadow
            geometry={nodes.Tool_3_StrainReliefBoots.geometry}
            material={materials["Material.002"]}
            position={[-0.015, -0.613, -0.013]}
            scale={0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/Tool3 Anim Set.glb");
