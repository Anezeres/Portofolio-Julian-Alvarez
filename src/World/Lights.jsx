import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color } from 'three';
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {


    const spotLightRedRef = useRef();
    const spotLightBlueRef = useRef();
    const spotLightRedRef1 = useRef();
    const pointLightRef = useRef();

    //useHelper(pointLightRef, PointLightHelper)


    useFrame((state, delta) => {
        const amplitude = 2; 
        const frequency = 2; 


        const newY = amplitude * Math.cos(state.clock.elapsedTime * frequency);

        spotLightRedRef.current.position.x = -newY;
        spotLightRedRef.current.position.z = newY;

        spotLightBlueRef.current.position.x = newY;
        spotLightBlueRef.current.position.z = -newY;

        spotLightRedRef1.current.position.z = -1+newY;
        spotLightRedRef1.current.position.x = -0.5+newY;

        /* 
        spotLightRedRef1.current.position.x = newY;
        spotLightBlueRef1.current.position.x = -newY; */
    })

    useFrame((state, delta) => {
        const amplitude = 3; 
        const frequency = 5; 
        const rojo = new Color(0xff0000);
        const azul = new Color(0x0000ff);

        const newY = amplitude * Math.sin(state.clock.elapsedTime * frequency);


        if(newY > 0){
            pointLightRef.current.color = rojo;
        }else if(newY < 1){
            pointLightRef.current.color = azul;
        }
        //pointLightRef.current.position.y =0.5 + newY; 
    })

    const options = useMemo(() => {
        return{
            intensitySL: { value: 100, min: 0, max: 1000, step: 1 },
            colorSL: {value: "white"}
        }
    }, [])




    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight
                ref={spotLightRedRef}
                position={[4, 5, -2]}
                angle={Math.PI / 15}
                intensity={400}
                color={"red"}
                penumbra={1}
                distance={15}
            />  
            <spotLight
                ref={spotLightBlueRef}
                position={[-3, 5, 2]}
                angle={Math.PI / 15}
                intensity={400}
                color={"blue"}
                penumbra={1}
                distance={15}
            /> 

            <spotLight
                ref={spotLightRedRef1}
                position={[3, 5, 3]}
                angle={Math.PI / 15}
                intensity={400}
                color={"green"}
                penumbra={1}
                distance={15}
            />  
            <pointLight 
                ref={pointLightRef} 
                position={[2.2, 0.5, -1.8]} 
                intensity={1} 
                color={"red"} 
                scale={0.1}
            />
        </>
    )
}

/* [-3,1.1,2] */

export default Lights;  