import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Parlante = () => {

    const parlanteModel = useGLTF("/assets/Models/Parlante/scene.gltf");
    const parlanteRef = useRef();
    
    console.log(parlanteRef)

    useFrame((state, delta) => {
        const amplitude = 0.01; 
        const frequency = 8; 


        const newY = 1+amplitude * Math.cos(state.clock.elapsedTime * frequency);
        const escalado = newY - 0.82;

        parlanteRef.current.scale.set(escalado, escalado, escalado)

        
    })


    return(
        <mesh ref={parlanteRef} position={[-1.4,-1.94,1.5]} scale={0.1} rotation-y={-Math.PI * 1.8}>
            <primitive object={parlanteModel.scene} />
        </mesh>
    );

    
}

export default Parlante;
useGLTF.preload("/assets/Models/Parlante/scene.gltf")