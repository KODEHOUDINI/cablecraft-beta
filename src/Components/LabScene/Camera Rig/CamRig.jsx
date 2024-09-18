import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
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

  const { posX, posY, posZ, lookY, lookX } = useControls({
    posX: { value: 0.07, min: -1, max: 1, step: 0.001 },
    posY: { value: 0.9, min: -1, max: 1, step: 0.001 },
    posZ: { value: -9.829, min: -20, max: 10, step: 0.001 },
    lookY: { value: 1.1, min: -2, max: 2, step: 0.001 },
    lookX: { value: 0.07, min: -2, max: 2, step: 0.001 },
  });
  return (
    <>
      {/* Look At this object  */}
      <mesh ref={lookRef} visible={false} position={[lookX, lookY, -9.829]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      {/* Move Camera according to this objects locations */}
      <mesh ref={locationRef} visible={false} position={[posX, posY, posZ]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default CamRig;
