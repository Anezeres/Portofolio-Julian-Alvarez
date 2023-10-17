import { useGLTF } from "@react-three/drei";

const Cristal = () => {

    const cristalModel = useGLTF("/assets/Models/Cristal/Cristal.glb");





    return(
        <mesh 
        position={[2,-1.1,-1.1]} 
        scale={0.05} 

        >
            <primitive object={cristalModel.scene}/>
        </mesh>
    );

    
}

export default Cristal;
useGLTF.preload("/assets/Models/Cristal/Cristal.glb")