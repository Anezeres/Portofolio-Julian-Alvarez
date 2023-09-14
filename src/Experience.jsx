import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


import Cuarto from "./World/Cuarto";
import Guitar from "./World/Guitar";
import Enviroment from "./World/Enviroment";
import Boy from "./World/Boy";
import Lights from "./World/Lights";
import Parlante from "./World/Parlante";

const Experience = () => {


    return (
        <>
            <OrbitControls makeDefault/>
            <Lights/>
            <Boy/>
            <Cuarto scale={0.6} rotation-y={-Math.PI * 0.60} position-y={-2}/>
            <Guitar />
            <Parlante/>
            
        </>
    )

    
    

    

}

export default Experience;