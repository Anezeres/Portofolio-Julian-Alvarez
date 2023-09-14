import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


import Cuarto from "./World/Cuarto";
import Guitar from "./World/Guitar";
import Enviroment from "./World/Enviroment";
import Boy from "./World/Boy";

const Experience = () => {


    return (
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[10,10, 5]} intensity={2}/>
            <Boy/>
            <Cuarto scale={0.6} rotation-y={-Math.PI * 0.60} position-y={-2}/>
            <Guitar />
            
        </>
    )

    
    

    

}

export default Experience;