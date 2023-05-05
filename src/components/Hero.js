import { Suspense } from 'react';
import './Hero.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import Globe from './Globe';
import { OrbitControls, Text } from '@react-three/drei';
import starTexture from '../images/star.jpeg';
import starTexture2 from '../images/star2.jpeg';
import starTexture3 from '../images/star3.jpeg';
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const textureLoader = new THREE.TextureLoader();
const fontLoader = new FontLoader();
const font = fontLoader.load('fonts/helvetiker_bold.typeface.json')
function Hero() {


  return (
    <section className="hero-container">
      <div className="hero-inner-container">
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
            <Text position={[0, 20, -35]} fontSize={7} color="#2596be" font={font}>
              Hey, I'm <meshPhongMaterial attach="material" color="0x2596be"/>Karston!
            </Text>
            <Text position={[0, 20, -50]} fontSize={4} color="white" font={font}>
              I develop software and web applications!
            </Text>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero;
