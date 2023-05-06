import { Suspense, useLayoutEffect, useState } from 'react';
import './Hero.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import Globe from './Globe';
import { OrbitControls, Text } from '@react-three/drei';
import starTexture from '../images/star.jpeg';
import starTexture2 from '../images/star2.jpeg';
import starTexture3 from '../images/star3.jpeg';

const textureLoader = new THREE.TextureLoader();

const font = '../'

function Hero() {
  const [fontSize, setFontSize] = useState(4);

  useLayoutEffect(() => {
    function updateFontSize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setFontSize(2);
      } else if (screenWidth < 900) {
        setFontSize(3);
      } else {
        setFontSize(4);
      }
    }
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <section className="hero-container">
      <Canvas className="canvas">
        {Array.from({ length: 70 }).map((_, i) => (
          <mesh key={i} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial map={textureLoader.load(starTexture)} />
          </mesh>
        ))}
        {Array.from({ length: 70 }).map((_, i) => (
          <mesh key={i} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial map={textureLoader.load(starTexture2)} />
          </mesh>
        ))}
        {Array.from({ length: 70 }).map((_, i) => (
          <mesh key={i} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial map={textureLoader.load(starTexture3)} />
          </mesh>
        ))}
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Globe/>
          <Text position={[0, 20, -35]} fontSize={fontSize + 1.4} color="#2596be">
            HEY, I'M KARSTON!
          </Text>
          <Text position={[0, 20, -50]} fontSize={fontSize * 0.9} color="white">
            I LIKE BUILDING SOFTWARE 
          </Text>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Hero;
