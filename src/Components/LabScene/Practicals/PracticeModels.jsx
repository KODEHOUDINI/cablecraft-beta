import { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { state } from "../../../../store";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export function PracticeModels(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/PracticalModels.glb");

  const snap = useSnapshot(state);

  const ethernetRef = useRef();
  const strainRef = useRef();
  const connectorRef = useRef();
  const teethRef = useRef();

  // Wire Refs
  // Wire 1
  const w1ref1 = useRef();
  const w1ref2 = useRef();

  // Wire 2
  const w2ref1 = useRef();
  const w2ref2 = useRef();

  // Wire 3
  const w3ref1 = useRef();
  const w3ref2 = useRef();

  // Wire 4
  const w4ref1 = useRef();
  const w4ref2 = useRef();

  // Wire 5
  const w5ref1 = useRef();
  const w5ref2 = useRef();

  // Wire 6
  const w6ref1 = useRef();
  const w6ref2 = useRef();

  // Wire 7
  const w7ref1 = useRef();
  const w7ref2 = useRef();

  // Wire 8
  const w8ref1 = useRef();
  const w8ref2 = useRef();

  useFrame((state, delta) => {
    if (snap.startTraining == true && snap.playCrimpAnim == false) {
      easing.damp3(ethernetRef.current.position, [-0.16, 1.1, -8.94], 1.5);
      easing.damp3(ethernetRef.current.rotation, [Math.PI / 2, 0, 0], 1);
      easing.damp3(strainRef.current.scale, [0, 0, 0], 1);

      // Scaling the wires
      // W1
      if (snap.groupActive === 1 && snap.playCrimpAnim == false) {
        easing.damp3(w1ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w1ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w1ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w1ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W2
      if (snap.groupActive === 2 && snap.playCrimpAnim == false) {
        easing.damp3(w2ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w2ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w2ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w2ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W3
      if (snap.groupActive === 3 && snap.playCrimpAnim == false) {
        easing.damp3(w3ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w3ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w3ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w3ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W4
      if (snap.groupActive === 4 && snap.playCrimpAnim == false) {
        easing.damp3(w4ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w4ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w4ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w4ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W5
      if (snap.groupActive === 5 && snap.playCrimpAnim == false) {
        easing.damp3(w5ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w5ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w5ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w5ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W6
      if (snap.groupActive === 6 && snap.playCrimpAnim == false) {
        easing.damp3(w6ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w6ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w6ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w6ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W7
      if (snap.groupActive === 7 && snap.playCrimpAnim == false) {
        easing.damp3(w7ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w7ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w7ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w7ref2.current.scale, [1, 1, 1], 0.5, delta);
      }

      // W8
      if (snap.groupActive === 8 && snap.playCrimpAnim == false) {
        easing.damp3(w8ref1.current.scale, [1.5, 1, 1], 0.5, delta);
        easing.damp3(w8ref2.current.scale, [1.5, 1, 1], 0.5, delta);
      } else {
        easing.damp3(w8ref1.current.scale, [1, 1, 1], 0.5, delta);
        easing.damp3(w8ref2.current.scale, [1, 1, 1], 0.5, delta);
      }
    } else if (snap.startTraining == true && snap.playCrimpAnim == true) {
      setTimeout(() => {
        easing.damp3(ethernetRef.current.position, snap.ethernetRest, 1);
        // easing.damp3(ethernetRef.current.position, [-0.359, 0.927, -9.73], 1);
        easing.damp3(ethernetRef.current.rotation, [0, 0, 0], 1);
        easing.damp3(strainRef.current.scale, [1, 1, 1], 1);
        easing.damp3(strainRef.current.position, [0.208, 0.002, 0], 1);
      }, 1000);

      // Do Before Crimping
      easing.damp3(connectorRef.current.position, [0.225, 0.004, 0], 1);
      easing.damp3(teethRef.current.position, [0.232, 0, 0], 1);

      // W1
      easing.damp3(w1ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w1ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W2
      easing.damp3(w2ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w2ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W3
      easing.damp3(w3ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w3ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W4
      easing.damp3(w4ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w4ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W5
      easing.damp3(w5ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w5ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W6
      easing.damp3(w6ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w6ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W7
      easing.damp3(w7ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w7ref2.current.scale, [1, 1, 1], 0.2, delta);

      // W8
      easing.damp3(w8ref1.current.scale, [1, 1, 1], 0.2, delta);
      easing.damp3(w8ref2.current.scale, [1, 1, 1], 0.2, delta);
    } else {
      easing.damp3(ethernetRef.current.position, [-0.389, 0.927, -9.758], 1);
      easing.damp3(strainRef.current.scale, [1, 1, 1], 1);
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ethernetRef}
        castShadow
        receiveShadow
        geometry={nodes.Practical_Animated_Cable.geometry}
        material={materials["Material.004"]}
        position={[-0.389, 0.927, -9.758]} //starting position
        scale={1}
      >
        <mesh
          ref={connectorRef}
          geometry={nodes.Practical_RJ45.geometry}
          position={[0.25, 0.004, 0]}
          // position={[0.225, 0.004, 0]} //Original Pos
          rotation={[1.567, -1.567, 1.571]}
        >
          <MeshTransmissionMaterial
            samples={15}
            resolution={512}
            anisotropicBlur={0.5}
            thickness={0}
            roughness={0.3}
            distortion={2}
            distortionScale={2}
            transmission={0.7}
            // toneMapped={true}
            color={"#ffffff"}
          />
        </mesh>
        <mesh
          // visible={false}
          ref={teethRef}
          geometry={nodes.Practical_RJ45_Teeth.geometry}
          // material={materials["copper.001"]}
          position={[0.257, 0, 0]}
          // position={[0.232, 0, 0]} //Original Pos
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <meshStandardMaterial color={"#b87333"} metalness={1} roughness={0.1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Practical_Separator.geometry}
          material={materials["Practical Separator Mat"]}
          position={[0.203, 0.002, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Practical_Strain_Relief.geometry}
          ref={strainRef}
          // material={materials["Practical yellow-plastic"]}
          position={[0.191, 0.002, 0]}
          // position={[0.191, 0.002, 0]} //Original Pos
          rotation={[1.571, -1.567, 1.571]}
        >
          <meshStandardMaterial color={"#fff64f"} metalness={0.1} roughness={0.5} />
        </mesh>
        {/* Wires Start */}
        <group position={[0.224, 0.002, -0.003]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire1_1.geometry} ref={w1ref1}>
            <meshStandardMaterial opacity={0} color={snap.storedUserColors[0]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire1_2.geometry} ref={w1ref2}>
            <meshStandardMaterial opacity={0} color={snap.storedUserColors[1]} />
          </mesh>
        </group>
        <group position={[0.224, 0.002, -0.002]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire2_1.geometry} ref={w2ref1}>
            <meshStandardMaterial color={snap.storedUserColors[2]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire2_2.geometry} ref={w2ref2}>
            <meshStandardMaterial color={snap.storedUserColors[3]} />
          </mesh>
        </group>
        <group position={[0.224, 0.002, -0.002]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire3_1.geometry} ref={w3ref1}>
            <meshStandardMaterial color={snap.storedUserColors[4]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire3_2.geometry} ref={w3ref2}>
            <meshStandardMaterial color={snap.storedUserColors[5]} />
          </mesh>
        </group>
        <group position={[0.223, 0.002, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire4_1.geometry} ref={w4ref1}>
            <meshStandardMaterial color={snap.storedUserColors[6]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire4_2.geometry} ref={w4ref2}>
            <meshStandardMaterial color={snap.storedUserColors[7]} />
          </mesh>
        </group>
        <group position={[0.224, 0.002, 0.001]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire5_1.geometry} ref={w5ref1}>
            <meshStandardMaterial color={snap.storedUserColors[8]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire5_2.geometry} ref={w5ref2}>
            <meshStandardMaterial color={snap.storedUserColors[9]} />
          </mesh>
        </group>
        <group position={[0.224, 0.001, 0.001]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire6_1.geometry} ref={w6ref1}>
            <meshStandardMaterial color={snap.storedUserColors[10]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire6_2.geometry} ref={w6ref2}>
            <meshStandardMaterial color={snap.storedUserColors[11]} />
          </mesh>
        </group>
        <group position={[0.224, 0.002, 0.002]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire7_1.geometry} ref={w7ref1}>
            <meshStandardMaterial color={snap.storedUserColors[12]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire7_2.geometry} ref={w7ref2}>
            <meshStandardMaterial color={snap.storedUserColors[13]} />
          </mesh>
        </group>
        <group position={[0.224, 0.002, 0.003]}>
          <mesh castShadow receiveShadow geometry={nodes.PWire8_1.geometry} ref={w8ref1}>
            <meshStandardMaterial color={snap.storedUserColors[14]} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.PWire8_2.geometry} ref={w8ref2}>
            <meshStandardMaterial color={snap.storedUserColors[15]} />
          </mesh>
        </group>
        {/* Wires End */}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/PracticalModels.glb");
