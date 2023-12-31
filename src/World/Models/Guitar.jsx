import { useGLTF } from "@react-three/drei";
import { useContext, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {refContext} from "../../Context/refContext";

const Guitar = () => {

    const guitarModel = useGLTF("/assets/Models/Guitar/scene.gltf");

    const {guitarRefC} = useContext(refContext)
    const guitarRef = guitarRefC;

    useFrame((state, delta) => {
        const amplitude = 0.2; 
        const frequency = 2; 


        const newY = -1.1 +amplitude * Math.sin(state.clock.elapsedTime * frequency);

        guitarRef.current.position.y = newY;
    })

    return(
        <mesh ref={guitarRef} position={[-1,-1.4,-2]} scale={0.05} rotation-y={-Math.PI * 1.3}>
            <primitive object={guitarModel.scene}/>
        </mesh>
    );

    
}

export default Guitar;
useGLTF.preload("/assets/Models/Guitar/scene.gltf")