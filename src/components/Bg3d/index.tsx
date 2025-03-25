import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

const Model = () => {
  const modelRef = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, "/models/spaceBoi/scene.gltf");

  useFrame((state, delta) => (modelRef.current.rotation.y += delta * 0.2));

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export const Bg3d = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
      }}
      camera={{
        position: [5, 5, 10],
      }}
    >
      <Model />

      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    </Canvas>
  );
};
