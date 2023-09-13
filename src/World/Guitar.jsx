import { useGLTF } from "@react-three/drei";

const Guitar = () => {

    const guitarModel = useGLTF("/assets/Models/Guitar/scene.gltf");

    console.log(guitarModel)

    return(
        <mesh position={[0,-1,-1.5]} scale={0.05} rotation-y={-Math.PI * 1.5}>
            <primitive object={guitarModel.scene}/>
        </mesh>
    );

    
}

export default Guitar;
useGLTF.preload("/assets/Models/Guitar/scene.gltf")