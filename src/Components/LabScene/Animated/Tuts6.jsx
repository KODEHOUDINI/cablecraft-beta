import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { easing } from "maath";

import { state } from "../../../../store";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export function Tuts6(props) {
  const { nodes, materials } = useGLTF("/Models/LabScene/CableDemo.glb");
  const snap = useSnapshot(state);

  const wholeCableRef = useRef();
  const outerCoatRef = useRef();
  const separatorRef = useRef();
  const shieldRef = useRef();
  const gStripRef = useRef();
  const gRef = useRef();
  const oStripRef = useRef();
  const oRef = useRef();
  const blStripRef = useRef();
  const blRef = useRef();
  const brStripRef = useRef();
  const brRef = useRef();

  //   const copperWireRef = useRef();
  //   const separatorRef = useRef();

  useFrame((_, delta) => {
    // Reveal Outer Coat
    if (snap.currentToolIndex === 5 && outerCoatRef.current.scale.y > 0.01) {
      easing.damp3(outerCoatRef.current.scale, [1, 0.3, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 4) {
      easing.damp3(outerCoatRef.current.scale, [1, 1, 1], 0.95, delta);
    }

    // Reveal Sheilding
    if (snap.currentToolIndex === 6 && shieldRef.current.scale.y > 0.01) {
      easing.damp3(shieldRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(outerCoatRef.current.scale, [1, 0.3, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 5) {
      easing.damp3(shieldRef.current.scale, [1, 1, 1], 0.95, delta);
    }

    // Reveal Separator
    if (snap.currentToolIndex === 6 && gStripRef.current.scale.y > 0.01) {
      easing.damp3(shieldRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(outerCoatRef.current.scale, [1, 0.3, 1], 0.95, delta);

      easing.damp3(gStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 0.4, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 5) {
      easing.damp3(gStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 1, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 7) {
      easing.damp3(gStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 1, 1], 0.95, delta);
    }
    // Reveal Separator End

    // Animate Separator to lay emphasis on twisted pairs
    if (snap.currentToolIndex === 7 && separatorRef.current.scale.y > 0.01) {
      easing.damp3(separatorRef.current.scale, [1, 0.4, 1], 0.95, delta);
    } else if (snap.currentToolIndex < 7) {
      easing.damp3(separatorRef.current.scale, [1, 1, 1], 0.95, delta);
    }

    // Rotate Cable to show various parts of twisted pair and separator
    if (snap.currentToolIndex > 5 && shieldRef.current.scale.y < 0.5) {
      easing.damp3(
        wholeCableRef.current.rotation,
        [wholeCableRef.current.rotation.x + 0.1, 0, -Math.PI / 2],
        0.25,
        delta
      );
    } else {
      easing.damp3(wholeCableRef.current.rotation, [0, 0, -Math.PI / 2], 0.85, delta);
    }

    // Display twisted pairs one by one
    if (snap.currentToolIndex === 8) {
      easing.damp3(oStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 0.4, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 9) {
      easing.damp3(gStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 0.4, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 10) {
      easing.damp3(blStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 0.4, 1], 0.95, delta);
    } else if (snap.currentToolIndex === 11) {
      easing.damp3(brStripRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(brRef.current.scale, [1, 1, 1], 0.95, delta);
      easing.damp3(gStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(gRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(oRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blStripRef.current.scale, [1, 0.4, 1], 0.95, delta);
      easing.damp3(blRef.current.scale, [1, 0.4, 1], 0.95, delta);
    }
    // Display twisted pairs End
  });

  // Normal and AO maps for shielding
  const nMap = useLoader(TextureLoader, "./WrinkleMaps/wrinkle_N.jpg");

  const aOMap = useLoader(TextureLoader, "./WrinkleMaps/wrinkle_AO.jpg");
  // Normal and AO maps for outercoat
  const OCnMap = useLoader(TextureLoader, "./WrinkleMaps/wrinkle_N.jpg");
  const OCaOMap = useLoader(TextureLoader, "./WrinkleMaps/wrinkle_AO.jpg");

  return (
    <group {...props} dispose={null}>
      <group
        ref={wholeCableRef}
        position={[0.056, 1.085, -9.397]}
        visible={snap.currentToolIndex > 3 && snap.currentToolIndex < 12 ? true : false}
        scale={1.2}
        rotation={[0, 0, -Math.PI / 2]}
      >
        {/*Blue Pairs*/}
        <mesh
          castShadow
          receiveShadow
          ref={blRef}
          geometry={nodes.Blue.geometry}
          material={materials.Blue}
          position={[0.004, -0.116, -0.008]}
        />
        <group ref={blStripRef} position={[0.004, -0.116, -0.008]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blue_Stripped.geometry}
            material={materials["White Stripe"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blue_Stripped_1.geometry}
            material={materials.Blue}
          />
        </group>
        {/*Blue Pairs End*/}

        {/*Brown Pairs */}
        <mesh
          ref={brRef}
          castShadow
          receiveShadow
          geometry={nodes.Brown.geometry}
          material={materials.Brown}
          position={[-0.004, -0.116, -0.008]}
        />
        <group ref={brStripRef} position={[-0.004, -0.116, -0.008]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brown_Stripped.geometry}
            material={materials["White Stripe"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brown_Stripped_1.geometry}
            material={materials.Brown}
          />
        </group>
        {/*Brown Pairs End*/}

        {/* Green Pairs */}
        <mesh
          ref={gRef}
          castShadow
          receiveShadow
          geometry={nodes.Green.geometry}
          material={materials.Green}
          position={[-0.004, -0.116, 0]}
        />
        <group ref={gStripRef} position={[-0.004, -0.116, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Green__Stripped.geometry}
            material={materials["White Stripe"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Green__Stripped_1.geometry}
            material={materials.Green}
          />
        </group>
        {/* Green Pairs End*/}

        {/*Orange Pairs */}
        <mesh
          ref={oRef}
          castShadow
          receiveShadow
          geometry={nodes.Orange.geometry}
          material={materials["Orange.002"]}
          position={[0.004, -0.116, 0]}
        />
        <group ref={oStripRef} position={[0.004, -0.116, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Orange_Stripped_1.geometry}
            material={materials["White Stripe"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Orange_Stripped_2.geometry}
            material={materials["Orange.001"]}
          />
        </group>
        {/*Orange Pairs End*/}

        {/* Copper */}
        <mesh
          castShadow
          receiveShadow
          // visible={snap.currentToolIndex > 7 ? true : false}
          visible={false}
          geometry={nodes.Copper_Wire.geometry}
          material={materials.Colored}
          position={[0, 0.108, -0.004]}
        />
        {/* Copper End*/}

        {/* Separator */}
        <mesh
          ref={separatorRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.StripSeparator}
          position={[0, -0.116, -0.004]}
        />
        {/* Separator End */}

        {/* Outer coat */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OuterCoat.geometry}
          // material={materials["Material.004"]}
          position={[0, -0.115, -0.004]}
          ref={outerCoatRef}
        >
          <meshStandardMaterial
            color={"#6D6D6D"}
            roughness={1}
            normalMap={OCnMap}
            normalScale={0.5}
            aoMap={OCaOMap}
          />
        </mesh>
        {/* Shield */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shield.geometry}
          // material={materials.Shield}
          position={[0, -0.115, -0.004]}
          ref={shieldRef}
        >
          <meshStandardMaterial
            color={"#C2C2C2"}
            roughness={0.148889}
            normalMap={nMap}
            normalScale={1.3}
            aoMap={aOMap}
            metalness={0.565714}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/LabScene/CableDemo.glb");
