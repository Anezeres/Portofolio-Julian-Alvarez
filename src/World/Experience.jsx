import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Room from "./Scenes/Room";
import Controls from "./Controls/Controls";
import { Physics } from "@react-three/rapier";


const Experience = () => {


    return (
        <>  
            <Controls/>
            <Physics>
                <Room/>
            </Physics>
        </>
    )
}

/* The X axis is red. The Y axis is green. The Z axis is blue. */

export default Experience;