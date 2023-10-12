import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


import Cuarto from "./World/Cuarto";
import Globo from "./World/Globo";
import Guitar from "./World/Guitar";
import Enviroment from "./World/Enviroment";
import Boy from "./World/Boy";
import Lights from "./World/Lights";
import Parlante from "./World/Parlante";
import Mixer from "./World/Mixer";
import Details from "./World/Details";
import { Perf } from "r3f-perf";
import Palmera from "./World/Palmera";
import Telescope from "./World/Telescope";
import { AxesHelper } from "three";
import SongText from "./World/SongText";
import RefContext from "./Context/RefContext";
import Click from "./World/Click";


const Experience = () => {


    return (
        <>
            

            <Perf position={"top-right"} />
            <RefContext>   
                <Details/>
                <OrbitControls makeDefault/>
                <Lights/>
                <Boy/>
                <Cuarto scale={0.6} rotation-y={-Math.PI * 0.60} position-y={-2}/>
                <Guitar />
                <Parlante/>
                <Mixer/>
                <Palmera/>
                <Telescope/>
                <SongText/>
                <Globo/>
                <Click /> 
                <axesHelper args={[5]} position-y={0} />
            </RefContext>
        </>
    )
}

/* The X axis is red. The Y axis is green. The Z axis is blue. */

export default Experience;