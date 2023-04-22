import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";

function Object({ color, size }) {
  const meshRef = useRef();
  const sphereRef = useRef(null);

  useFrame(() => {
    const spherePosition = sphereRef.current.position;
    meshRef.current.position.set(
      spherePosition.x,
      spherePosition.y,
      spherePosition.z
    );
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <Sphere ref={sphereRef} args={[size, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Sphere>
      <pointLight position={[5, 5, 5]} />
    </mesh>
  );
}

function Scene({ size }) {
  const [color, setColor] = useState("cyan");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const red = Math.sin(currentTime * 0.001) * 127 + 128;
      const green = Math.sin(currentTime * 0.002) * 127 + 128;
      const blue = Math.sin(currentTime * 0.003) * 127 + 128;
      const newColor = `rgb(${red.toFixed(0)}, ${green.toFixed(
        0
      )}, ${blue.toFixed(0)})`;
      setColor(newColor);
    }, 1);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Object color={color} size={size} />
      <OrbitControls
        enableZoom={false}
        enableDamping={true}
        {...{ domEvent: { wheel: (event) => event.preventDefault() } }}
      />
    </>
  );
}

const SphereScene = () => {
  const isMobile = window.innerWidth < 768;
  const isLandscape = window.innerWidth > window.innerHeight;
  const size = isMobile ? (isLandscape ? 2 : 1) : 2;

  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      suppressHydrationWarning={true}
    >
      <Scene size={size} />
    </Canvas>
  );
};

export default SphereScene;
