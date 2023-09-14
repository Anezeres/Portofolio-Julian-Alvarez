import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useTexture } from "@react-three/drei";

const Boy = () => {

    const PATH = "/assets/Textures/Boy/";
    const boyRef = useRef();
    const boyModel = useGLTF("/assets/Models/Boy/scene.gltf");
    const { animations} = boyModel;

    const {actions} = useAnimations(animations,boyRef);

    console.log(boyRef)

   /*  const propsTexture = useTexture({
        normalMap: PATH + "boyNormal.png",
        map: PATH + "boyColor.jpeg"
    }) */


    useEffect(() => {
        const action = actions["mixamo.com"];
        action.play();
    })

    return (
        <>
        
            <mesh 
                ref={boyRef}
                position={[-1,-1.85,0]}
                scale={0.4} 
                rotation-y={Math.PI * 2.5}>
                <primitive object={boyModel.scene}/>
                {/* <meshStandardMaterial /> */}
            </mesh>
            
        </>
    )
}

export default Boy;
useGLTF.preload("/assets/Models/Boy/scene.gltf")