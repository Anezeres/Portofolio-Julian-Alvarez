import { useGLTF } from "@react-three/drei";

const Mixer = () => {

    const linkModel = useGLTF("/assets/Models/Linkedin/scene.gltf");

    const redirectToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/julian-alexander-alvarez-payares-556726208/'; // Reemplaza con tu URL de LinkedIn
      };



    return(
        <mesh 
        position={[2.01,-1.1,-1.48]} 
        scale={0.3} 
        onClick={() => {
            redirectToLinkedIn()
            
        }}
        >
            <primitive object={linkModel.scene}/>
        </mesh>
    );

    
}

export default Mixer;
useGLTF.preload("/assets/Models/Linkedin/scene.gltf")