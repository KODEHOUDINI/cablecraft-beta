import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import { state } from "../../../../store";

export function AnimatedCrimp(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/LabScene/AnimatedCrimp.glb");
  const { actions, mixer } = useAnimations(animations, group);

  const snap = useSnapshot(state);
  function animateCrimp() {
    const crimpEmptyAction = actions["CrimpEmptyAction"];
    const handle1Action = actions["Handle1.001Action"];
    const handle2Action = actions["Handle2.001Action"];

    // Remove previous event listener if necessary
    crimpEmptyAction.getMixer().removeEventListener("finished");

    let hasReversed = false;

    // Play CrimpEmptyAction
    crimpEmptyAction.clampWhenFinished = true;
    crimpEmptyAction.setLoop(THREE.LoopOnce);
    crimpEmptyAction.time = 0;
    crimpEmptyAction.paused = false;
    crimpEmptyAction.timeScale = 1;
    crimpEmptyAction.play();

    // Listen for the end of the CrimpEmptyAction
    crimpEmptyAction.getMixer().addEventListener("finished", () => {
      // Pause CrimpEmptyAction on last frame
      crimpEmptyAction.paused = true;
      state.ethernetRest = [-0.359, 0.927, -9.758];

      // Play Handle1.001Action and Handle2.001Action simultaneously
      handle1Action.clampWhenFinished = true;
      handle1Action.setLoop(THREE.LoopOnce);
      handle1Action.timeScale = 1.7;
      handle1Action.play();

      handle2Action.clampWhenFinished = true;
      handle2Action.setLoop(THREE.LoopOnce);
      handle2Action.timeScale = 1.7;
      handle2Action.play();

      // Only reverse CrimpEmptyAction if it hasn’t been reversed yet
      if (!hasReversed) {
        hasReversed = true; // Set flag to true
        // Reverse CrimpEmptyAction after 4 seconds
        setTimeout(() => {
          handle1Action.paused = true;
          handle2Action.paused = true;
          crimpEmptyAction.timeScale = -1; // Reverse the action
          crimpEmptyAction.paused = false; // Unpause to play in reverse
          crimpEmptyAction.setLoop(THREE.LoopOnce);
          crimpEmptyAction.play();
        }, 1500);
      }
    });
  }

  useEffect(() => {
    if (snap.playCrimpAnim) {
      setTimeout(() => {
        animateCrimp();
      }, 1500);
    }
  }, [snap.playCrimpAnim]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Lab_Scene">
        <group
          name="CrimpEmpty"
          position={[0.131, 0.924, -9.332]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          {/* Handle 1 */}
          <mesh
            name="Handle1001"
            castShadow
            receiveShadow
            geometry={nodes.Handle1001.geometry}
            material={materials["Material.015"]}
            position={[0.178, -0.001, 0]}
          >
            <mesh
              name="Object_14001"
              castShadow
              receiveShadow
              geometry={nodes.Object_14001.geometry}
              material={materials["Material.014"]}
              position={[-0.003, -0.012, 0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_16001"
              castShadow
              receiveShadow
              geometry={nodes.Object_16001.geometry}
              material={materials["Material.014"]}
              position={[-0.024, -0.001, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_20001"
              castShadow
              receiveShadow
              geometry={nodes.Object_20001.geometry}
              material={materials["Material.014"]}
              position={[-0.003, -0.012, 0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_39001"
              castShadow
              receiveShadow
              geometry={nodes.Object_39001.geometry}
              material={materials["Material.014"]}
              position={[-0.02, -0.007, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_4001"
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials["black_1.001"]}
              position={[0, 0, 0.002]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_41001"
              castShadow
              receiveShadow
              geometry={nodes.Object_41001.geometry}
              material={materials["Material.014"]}
              position={[-0.02, -0.007, -0.002]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_6001"
              castShadow
              receiveShadow
              geometry={nodes.Object_6001.geometry}
              material={materials["black_1.001"]}
              position={[-0.04, -0.004, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_8001"
              castShadow
              receiveShadow
              geometry={nodes.Object_8001.geometry}
              material={materials["black_2.001"]}
              position={[-0.02, -0.007, -0.004]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Pivot001"
              castShadow
              receiveShadow
              geometry={nodes.Pivot001.geometry}
              material={materials["Material.014"]}
              position={[0, 0, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
          </mesh>
          {/* Handle 2 */}
          <mesh
            name="Handle2001"
            castShadow
            receiveShadow
            geometry={nodes.Handle2001.geometry}
            material={materials["Material.015"]}
            position={[0.178, -0.001, 0]}
          >
            <mesh
              name="Object_22001"
              castShadow
              receiveShadow
              geometry={nodes.Object_22001.geometry}
              material={materials["black_1.001"]}
              position={[0, 0, 0.002]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_24001"
              castShadow
              receiveShadow
              geometry={nodes.Object_24001.geometry}
              material={materials["Material.014"]}
              position={[-0.04, 0.007, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_26001"
              castShadow
              receiveShadow
              geometry={nodes.Object_26001.geometry}
              material={materials["Material.014"]}
              position={[-0.04, 0.007, -0.002]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_28001"
              castShadow
              receiveShadow
              geometry={nodes.Object_28001.geometry}
              material={materials["black_2.001"]}
              position={[-0.04, 0.014, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_29001"
              castShadow
              receiveShadow
              geometry={nodes.Object_29001.geometry}
              material={materials["black_1.001"]}
              position={[-0.04, 0.014, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_31001"
              castShadow
              receiveShadow
              geometry={nodes.Object_31001.geometry}
              material={materials["black_1.001"]}
              position={[-0.041, 0.015, -0.006]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              name="Object_33001"
              castShadow
              receiveShadow
              geometry={nodes.Object_33001.geometry}
              material={materials["Material.014"]}
              position={[-0.024, 0.001, -0.001]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/AnimatedCrimp.glb");
