import { ContactShadows, useAnimations, useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { useTexture } from "@react-three/drei";
import {refContext} from "../Context/refContext";



const Boy = (props) => {
    const {boyRefC} = useContext(refContext)

    const boyRef = boyRefC;
    const boyModel = useGLTF("/assets/Models/Boy/Boy.glb");
    const { animations } = boyModel;

    const {actions} = useAnimations(animations,boyRef);

    console.log(boyRef)

    useEffect(() => {
        const action = actions["Armature|mixamo.com|Layer0"];
        action.play();
    })

    return (
        <>
        
            <mesh 
                ref={boyRef}
                position={[-1,-1.85,0]}
                scale={0.8} 
                rotation-y={Math.PI * 2.5}>
                <primitive object={boyModel.scene}/>
                {/* <meshStandardMaterial /> */}
            </mesh>          
        </>
    )
}

export default Boy;
useGLTF.preload("/assets/Models/Boy/Boy.glb")