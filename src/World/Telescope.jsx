import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Telescope = () => {

    const telescopeModel = useGLTF("/assets/Models/Telescope/scene.gltf");
    


    return(
        <mesh position={[1.7,-2,0]} scale={15} rotation-y={-Math.PI * 0.1} >
            <primitive object={telescopeModel.scene}/>
        </mesh>
    );

    
}

export default Telescope;
useGLTF.preload("/assets/Models/Telescope/scene.gltf")