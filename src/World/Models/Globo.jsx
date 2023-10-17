import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";
import {refContext} from "../../Context/refContext";

const Globo = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Globo/Globo.glb");

    const ballonRef = useRef();
    const ballonRef1 = useRef();
    const ballonRef2 = useRef();
    const ballonRef3 = useRef();
    const ballonRef4 = useRef();
    const {globosActivos} = useContext(refContext)

    const positions = [
        [0, 0, 0],
        [-1.5, 0, 0],      
        [1.5, 0, 0],
        [0, 0, -1.5],
        [0, 0, 1.5],
    ];

    const references = [
        ballonRef1,
        ballonRef2,      
        ballonRef3,
        ballonRef,
        ballonRef4,
    ];



    return (
        <group {...props} dispose={null}>
            {positions.map((position, index, references) => (
                <RigidBody ref={references} colliders={"ball"} restitution={1.3} gravityScale={globosActivos ? -0.3 : 0.3}>
                    <mesh
                        key={index}
                        position={position}
                        scale={[0.005, 0.005, 0.005]}
                        ref={ballonRef}
                        castShadow
                        receiveShadow
                        geometry={nodes.Balloon_ballon_0.geometry}
                        material={materials.ballon}
                    />
                    
                </RigidBody>
            ))}
        </group>

    );
}

export default Globo;

useGLTF.preload("/assets/Models/Globo/Globo.glb");