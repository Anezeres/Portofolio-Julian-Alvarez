import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useContext } from "react";

import {refContext} from "../Context/refContext";

const Mixer = () => {

    const mixerModel = useGLTF("/assets/Models/Mixer/Mixer.glb");
    const mixerRef = useRef();

    const {mixerActivo} = useContext(refContext)
    
    console.log(mixerRef)

    useFrame((state, delta) => {

        if(mixerActivo){
            const amplitude = 0.01; 
            const frequency = 8; 


            const newY = 1+amplitude * Math.cos(state.clock.elapsedTime * frequency);
            const escalado = newY - 0.5;

            mixerRef.current.scale.set(escalado, escalado, escalado)
        }
        

        
    })


    return(
        <mesh ref={mixerRef} position={[0.3,-1.56,0.7]} scale={0.5} rotation-y={-Math.PI * 1}>
            <primitive object={mixerModel.scene}/>
        </mesh>
    );

    
}

export default Mixer;
useGLTF.preload("/assets/Models/Mixer/Mixer.glb")