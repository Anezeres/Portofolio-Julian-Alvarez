import { Center, Float, Html, Text, Text3D, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { Color, Audio, AudioListener, AudioLoader, MeshBasicMaterial, MathUtils } from "three";

import {refContext} from "../../Context/refContext";

const SongText = () => {

    const arrowModel = useGLTF("/assets/Models/Admiration/scene.gltf");

    const songTextRef = useRef();
    const {
        apagarLuces,
        encenderLuces, 
        activeCamera, 
        setActiveCamera, 
        moverCamara,
        texto, 
        setTexto,
        isVisible, 
        setIsVisible,
        admirationRefC,
        clickRefC} = useContext(refContext)

    const admirationGuitarRef = admirationRefC;




    const sonidoGuitarra = () => {

        apagarLuces();
        admirationGuitarRef.current.visible = false;
        clickRefC.current.visible = false;

        const listener = new AudioListener();
        //cameraRef.current.add(listener);
    
        // Crear una fuente de audio global
        const sound = new Audio(listener);
    
        // Cargar un sonido y configurarlo como el buffer del objeto de audio
        const audioLoader = new AudioLoader();
        audioLoader.load('/assets/Sounds/Malaguena.mp3', (buffer) => {
            sound.setBuffer(buffer);
            /* toggleVisibility(); */
            //sound.setLoop(true);
            sound.setVolume(0.5); 
            sound.play();

        });

        sound.onEnded = () => {
            setTimeout(() => {
               /*  toggleVisibility(); */
                encenderLuces()
                admirationGuitarRef.current.visible = true;
                clickRefC.current.visible = true;
                setActiveCamera(false)
            }, 0);
        }

    }

    

    useFrame((state, delta) => {
        const amplitude = 10; 
        const frequency = 2; 


        const newY = +10+amplitude * Math.sin(state.clock.elapsedTime * frequency);

        admirationGuitarRef.current.position.y = newY;

        
    })

    

    useFrame((state, delta) => {
        
        if(activeCamera){
            state.camera.position.x = MathUtils.lerp(state.camera.position.x, activeCamera ? -2 : 4, 0.001)
            state.camera.position.z = MathUtils.lerp(state.camera.position.z, activeCamera ? 3 : -4, 0.001)
            state.camera.position.y = MathUtils.lerp(state.camera.position.y, activeCamera ? 0 : 3, 0.001)
        }
        else if(!activeCamera){
            state.camera.position.x = MathUtils.lerp(state.camera.position.x, activeCamera ? -2 : 4, 0.05)
            state.camera.position.y = MathUtils.lerp(state.camera.position.z, activeCamera ? 3 : -4, 0.05)
            state.camera.position.z = MathUtils.lerp(state.camera.position.y, activeCamera ? 0 : 3, 0.05)

        }
        
    })

    


    return (    
        <>
            <group >

                <Center >   
                    <Html  
                        position={[-0.5, 2.4, -0.1]}  
                        center 
                        distanceFactor={12} r
                        ref={songTextRef}
                        visible={false}
                        
                        
                        
                        >
                        <h2 className="song-text" style={{ display: isVisible ? 'block' : 'none' }}>{texto}</h2>
                    </Html>
                    <Float speed={2} >
                        <Text 
                            font="/assets/fonts/Lobster.json"
                            fontSize={0.2}
                            color={new Color(0xFFFF)}
                            position-y={2}
                            maxWidth={200}
                            textAlign="center"
                            
                            
                            
                            
                        >
                            
                        </Text>
                    </Float>
                </Center>

            </group>
                <group position={[-1.3,0.1,-1.9]} scale={0.01}  >
                    <mesh 
                        position={[0,0,0]} 
                        scale={1} 
                        rotation-y={-Math.PI * 1} 
                        onClick={() => {
                            sonidoGuitarra()
                            moverCamara()
                            
                        }}
                        ref={admirationGuitarRef}
                        >
                        
                        <primitive object={arrowModel.scene}/>
                    </mesh>
                </group>

            
            
        </>

    )
}

export default SongText;
useGLTF.preload("/assets/Models/Notes/scene.gltf");

/* [-1.1,0,0]  [-1.3,0.1,-1.9]*/