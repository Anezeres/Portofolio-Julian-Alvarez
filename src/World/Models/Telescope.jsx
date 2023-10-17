import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Telescope = () => {

    const telescopeModel = useGLTF("/assets/Models/Telescope/scene.gltf");
    


    return(
        <>
        
            <mesh position={[1.7,-2,0]} scale={15} rotation-y={-Math.PI * 0.1} >
                <primitive object={telescopeModel.scene}/>
            </mesh>
            <RigidBody type="fixed">
                <CuboidCollider args={[0.1, 0.5, 0.1]} position={[1.7,-0.5,0]} rotation={[1.5,-1,1.5]}/>
                <CuboidCollider args={[0.3, 0.5, 0.3]} position={[1.7,-1.5,0]}/>
            </RigidBody> 
        </>
        
    );

    
}

export default Telescope;
useGLTF.preload("/assets/Models/Telescope/scene.gltf")