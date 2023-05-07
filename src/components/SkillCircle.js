import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function SkillCircle() {
  return (
    <Canvas className="stack" camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false} 
            enableDamping={true} 
            dampingFactor={0.1} 
            enableTouch={false}  // Disable touch events
        />
        <ambientLight intensity={1} />
        <directionalLight position={[7, 2, 3]}/>
        <Sphere args={[1, 100, 200]} scale={1.5}>
            <MeshDistortMaterial
            color="#4E0CB2"
            attach="material"
            distort={0.5}
            speed={2.5}
            />
        </Sphere>
    </Canvas>
  )
}

export default SkillCircle;
