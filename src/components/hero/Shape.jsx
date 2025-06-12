import { Sphere, OrbitControls, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  // Animate rotation
  useFrame((_, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.5;
      sphereRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <>
      <Sphere ref={sphereRef} args={[1, 128, 128]} scale={2} castShadow receiveShadow>
        <MeshDistortMaterial
          color="#FFB823" // lighter warm tone for better contrast
          distort={0.5}
          speed={0.001}
          roughness={0.1}
          metalness={0.1}
        />
      </Sphere>

      {/* Sparkling effect around the sphere */}
      <Sparkles
        count={80}
        scale={[6, 6, 6]}
        size={3.5}
        speed={0.1}
        position={[0, 0, 0]}
      />
    </>
  );
};

const Shape = () => {
  const { gl } = useThree();

  useEffect(() => {
    gl.setClearColor(new THREE.Color("#0B1D51")); // Deep dark blue/purple background
  }, [gl]);

  return (
    <>
      {/* Camera Controls */}
      <OrbitControls enableZoom={false} autoRotate />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 5, 1]} intensity={1} castShadow />

      {/* Animated Sphere */}
      <AnimatedSphere />
    </>
  );
};

export default Shape;