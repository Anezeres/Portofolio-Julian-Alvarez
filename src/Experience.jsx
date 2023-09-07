import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Madera from './Textures/Madera.jpg'
import Roca from './Textures/Roca.jpg'

const Experience = () => {

    const boxRef = useRef();
    const capsuleRef = useRef();
    const coneRef = useRef();
    const planeRef = useRef();
    const torusRef = useRef();

    const maderaTexture = useLoader(TextureLoader, Madera);
    const rocaTexture = useLoader(TextureLoader, Roca);

    useFrame((state, delta)=>{  
        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());      
    })

    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        capsuleRef.current.rotation.y += 1 * delta;
    })

    useFrame((state, delta) => {
        const amplitude = 0.5; 
        const frequency = 5; 

        const newY = amplitude * Math.sin(state.clock.elapsedTime * frequency);

        coneRef.current.position.y = newY;
    })

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.3}/>
            <directionalLight position={[10,10, 5]} intensity={2}/>

            <mesh ref={torusRef} position={[-4, 10, 0]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6}>
                <torusGeometry args={[1, 0.3, 32, 64]} />
                <meshStandardMaterial wireframe color="purple" />
            </mesh>
            <mesh ref={coneRef} position={[-2,1,0]}>
                <coneGeometry args={[0.5,1,10]}/>
                <meshStandardMaterial wireframe={false} position={[10,10,5]} color="green" />
            </mesh>
            <mesh ref={capsuleRef} position={[1,0,0]}>
                <capsuleGeometry args={[0.5,0.5,2]}/>
                <meshToonMaterial wineframe={false}  color="red"/>
            </mesh>
            <mesh ref={boxRef} position={[4,0,0]}> 
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial wireframe={false} position={[10, 10, 5]} color="blue" />
            </mesh>
            
            <mesh ref={planeRef} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10,10,1]}/>
                <meshBasicMaterial map={maderaTexture} color="#8B4513"/>
            </mesh>
            
            <mesh  position={[0, 4, -5]}>
                <planeGeometry args={[10,10,1]}/>
                <meshBasicMaterial map={rocaTexture} color="#A0A0A0"/>
            </mesh>


        </>
    )

    
    

    

}

export default Experience;