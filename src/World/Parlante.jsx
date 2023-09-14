import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Parlante = () => {

    const parlanteModel = useGLTF("/assets/Models/Parlante/Parlante.glb");
    const parlanteRef = useRef();
    
    console.log(parlanteRef)

    useFrame((state, delta) => {
        const amplitude = 0.1; 
        const frequency = 8; 


        const newY = 1+amplitude * Math.cos(state.clock.elapsedTime * frequency);
        const escalado = newY + 0.5;

        parlanteRef.current.scale.set(escalado, escalado, escalado)

        
    })


    return(
        <mesh ref={parlanteRef} position={[-1,-1.18,1.5]} scale={1} rotation-y={-Math.PI * 1.3}>
            <primitive object={parlanteModel.scene}/>
        </mesh>
    );

    
}

export default Parlante;
useGLTF.preload("/assets/Models/Parlante/Parlante.glb")