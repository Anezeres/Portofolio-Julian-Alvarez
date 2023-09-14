import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Mixer = () => {

    const mixerModel = useGLTF("/assets/Models/Mixer/Mixer.glb");
    const mixerRef = useRef();
    
    console.log(mixerRef)


    return(
        <mesh ref={mixerRef} position={[0.3,-1.56,0.7]} scale={0.5} rotation-y={-Math.PI * 1}>
            <primitive object={mixerModel.scene}/>
        </mesh>
    );

    
}

export default Mixer;
useGLTF.preload("/assets/Models/Mixer/Mixer.glb")