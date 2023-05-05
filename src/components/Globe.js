import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from '../images/Volcanic.png'

function Globe() {
    const colorMap = useLoader(TextureLoader, texture);
    const globeRef = useRef();

    useFrame(({ clock }) => {
        globeRef.current.rotation.y = clock.elapsedTime / 3;
        globeRef.current.rotation.x = clock.elapsedTime / 3;

    });

    return (
        <>
            <mesh ref={globeRef}>
                <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </>
    )
}

export default Globe;
