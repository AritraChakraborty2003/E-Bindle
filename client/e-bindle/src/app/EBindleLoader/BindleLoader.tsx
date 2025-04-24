/* eslint-disable @typescript-eslint/no-unused-vars */
// components/BundleLoader.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function BagModel() {
  const bagRef = useRef<THREE.Group>(null!);
  const [progress, setProgress] = useState(0);
  const { scene } = useGLTF("/models/bundle_bag.glb");

  useFrame((state, delta) => {
    if (bagRef.current) {
      // Animate bag opening
      bagRef.current.rotation.y += delta * 0.5;
      bagRef.current.scale.set(
        1 + Math.sin(progress * 2) * 0.2,
        1 + Math.cos(progress * 2) * 0.2,
        1
      );
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 0.01, 1));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return <primitive object={scene} ref={bagRef} />;
}

export default function BundleLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center">
      <div className="w-64 h-64 relative">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BagModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="mt-8 w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-2000 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <p className="mt-4 text-white font-medium tracking-wider">
        UNPACKING BUNDLE...
      </p>
    </div>
  );
}
