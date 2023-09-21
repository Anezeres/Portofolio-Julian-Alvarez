import { Cloud, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

const Details = () => {

    const sparklesRef = useRef();

    useFrame((state, delta) => {
        const amplitude = 2.5; 
        const frequency = 5; 
        const rojo = new Color(0xff0000);
        const azul = new Color(0x0000ff);

        const newY = amplitude * Math.sin(state.clock.elapsedTime * frequency);


        if(newY > 0){
            sparklesRef.current.color = rojo;
        }else if(newY < 1){
            sparklesRef.current.Color = azul;
        }
        //pointLightRef.current.position.y =0.5 + newY; 
    })

    return (
        <>
            <Stars
                radius={50} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />
            <Sparkles ref={sparklesRef}
                color="white"
                count={50}
                size={4}
                fade={false}
                speed={0.5}
                scale={4}
            />
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={50} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20}
            />
        </>
    )

}

export default Details;