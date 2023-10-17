import { useGLTF } from "@react-three/drei";

const Github = () => {

    const gitModel = useGLTF("/assets/Models/Github/scene.gltf");

    const redirectToGitHub = () => {
        window.location.href = 'https://github.com/Anezeres/Portofolio-Julian-Alvarez'; // Reemplaza con tu URL de LinkedIn
      };



    return(
        <mesh 
        position={[1.6,-1.1,-1.2]} 
        scale={0.035} 
        rotation-y={-Math.PI * 1.8}
        onClick={() => {
            redirectToGitHub()
            
        }}
        >
            <primitive object={gitModel.scene}/>
        </mesh>
    );

    
}

export default Github;
useGLTF.preload("/assets/Models/Github/scene.gltf")