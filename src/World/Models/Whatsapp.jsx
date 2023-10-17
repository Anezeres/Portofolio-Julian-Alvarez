import { useGLTF } from "@react-three/drei";

const Whatsapp = () => {

    const wttpModel = useGLTF("/assets/Models/Whatsapp/scene.gltf");

    const redirectToGitHub = () => {
        window.location.href = 'https://wa.link/xj1ssd'; // Reemplaza con tu URL de LinkedIn
      };



    return(
        <mesh 
        position={[1.9,-1.05,-1.2]} 
        scale={0.035} 
        onClick={() => {
            redirectToGitHub()
            
        }}
        >
            <primitive object={wttpModel.scene}/>
        </mesh>
    );

    
}

export default Whatsapp;
useGLTF.preload("/assets/Models/Whatsapp/scene.gltf")