import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Palmera = () => {

    const palmeraModel = useGLTF("/assets/Models/Palmera/scene.gltf");
    


    return(
        <mesh position={[-2,-0.5,-2.1]} scale={0.0015} rotation-x={-Math.PI/2} rotation-z={-Math.PI * 0.6}>
            <primitive object={palmeraModel.scene}/>
        </mesh>
    );

    
}

export default Palmera;
useGLTF.preload("/assets/Models/Palmera/scene.gltf")