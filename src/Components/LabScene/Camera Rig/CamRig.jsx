import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { useSnapshot } from "valtio";
import { state } from "../../../../store";
import { easing } from "maath";

const CamRig = () => {
  const snap = useSnapshot(state);
  const speed = 0.9; // Speed for easing the camera
  const lookRef = useRef();
  const locationRef = useRef();
  useFrame((state, delta) => {
    state.camera.lookAt(lookRef.current.position);
    state.camera.position.x = locationRef.current.position.x;
    state.camera.position.y = locationRef.current.position.y + 0.2;
    state.camera.position.z = locationRef.current.position.z + 6;

    // Easing the cube's Z position towards the targetPosZ
    easing.damp3(
      locationRef.current.position,
      [locationRef.current.position.x, locationRef.current.position.y, snap.targetPosZ],
      speed,
      delta
    );
  });

  return (
    <>
      {/* Look At this object  */}
      <mesh ref={lookRef} visible={false} position={[0.07, 1.1, -9.829]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      {/* Move Camera according to this objects locations */}
      <mesh ref={locationRef} visible={false} position={[0.07, 0.9, -9.829]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default CamRig;
