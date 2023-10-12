import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const  Globo = (props) => {
    const { nodes, materials } = useGLTF("/assets/Models/Globo/Globo.glb");

    const positions = [
        [0, 0, 0],
        [1.5, 0, 0],
        [-1.5, 0, 0],
        [0, 0, -1.5],
        [0, 0, 1.5],
    ];

    return (
            <group {...props} dispose={null}>
                {positions.map((position, index) => (
                    <mesh
                    key={index}
                    position={position}
                    scale={[0.007, 0.007, 0.007]}
                    castShadow
                    receiveShadow
                    geometry={nodes.Balloon_ballon_0.geometry}
                    material={materials.ballon}
                    />
                ))}
            </group>
    );
}

export default Globo;

useGLTF.preload("/assets/Models/Globo/Globo.glb");