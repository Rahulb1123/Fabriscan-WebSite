import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3D Animated Shape
function AnimatedShape() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Solid mesh with normal material */}
      <mesh>
        <torusKnotGeometry args={[3, 0.7, 128, 32]} />
        <meshNormalMaterial />
      </mesh>
      {/* Thread-like wireframe overlay */}
      <mesh>
        <torusKnotGeometry args={[3, 0.7, 128, 32]} />
        <meshBasicMaterial 
          color="#2DA0FF" 
          wireframe={true} 
          wireframeLinewidth={2}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// 3D Scene Component
export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
