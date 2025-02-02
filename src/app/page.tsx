'use client';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { VintageTelevision } from './_components/three/VintageTelevision';
import Floor from './_components/three/Floor';
import LightControler from './_components/three/LightControler';

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-[#f75f80]">
      <Canvas
        className="absolute left-0 top-0 z-0 h-screen w-screen"
        camera={{ position: [1, 0, 0] }}
        shadows
      >
        <OrbitControls maxDistance={4} minDistance={2.5} />
        <LightControler />
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <VintageTelevision position={[0, -0.3, 0]} />
          <Floor />
        </Suspense>
      </Canvas>
    </main>
  );
}
