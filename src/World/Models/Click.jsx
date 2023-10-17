
import React, { useContext, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import {refContext} from "../../Context/refContext";
import { useFrame } from "@react-three/fiber";
import { AudioLoader, Audio, AudioListener} from "three";

const Click = (props) => {
  const { nodes, materials } = useGLTF("/assets/Models/Click/Click.glb");
  const {
    clickRefC, 
    admirationRefC,
    encenderLuces, 
    apagarLuces, 
    fragmentoCancion, 
    texto, 
    setTexto, 
    moverCamara,
    isVisible, 
    setIsVisible,
    setActiveCamera,
    activeCamera
  
  } = useContext(refContext);
  const clickRef = clickRefC;

   // Inicialmente, muestra el primer fragmento
  const tiempoPorFragmento = 33000/12; // 33 segundos divididos en 4 fragmentos

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
};

  const Song = (type) => {

    let fragmentoActual = 0;
    const intervalo = setInterval(() => {
        fragmentoActual++;
        if (fragmentoActual < fragmentoCancion.length) {
            setTexto(fragmentoCancion[fragmentoActual]);
        } else {
            clearInterval(intervalo); // Detiene el intervalo cuando se han mostrado todos los fragmentos
        }
    }, tiempoPorFragmento);
    
    return () => {
        clearInterval(intervalo); // Limpia el intervalo cuando el componente se desmonta
    };  
  };

  const handleSign = () => {
        
    Song();
    apagarLuces();
    clickRefC.current.visible = false;
    admirationRefC.current.visible = false;

    const listener = new AudioListener();
    //cameraRef.current.add(listener);

    // Crear una fuente de audio global
    const sound = new Audio(listener);

    // Cargar un sonido y configurarlo como el buffer del objeto de audio
    const audioLoader = new AudioLoader();
    audioLoader.load('/assets/Sounds/BadBunny.mp3', (buffer) => {
        sound.setBuffer(buffer);
        toggleVisibility();
        //sound.setLoop(true);
        sound.setVolume(0.5); 
        sound.play();

    });

    sound.onEnded = () => {
      setTimeout(() => {
          toggleVisibility();
          encenderLuces()
          clickRefC.current.visible = true;
          admirationRefC.current.visible = true;
          setActiveCamera(false)
      }, 0);
  }
  }



  useFrame((state, delta) => {
    const amplitude = 3; 
    const frequency = 2; 


    const newY = +246+amplitude * Math.sin(state.clock.elapsedTime * frequency);

    clickRef.current.position.y = newY;

    
})

  return (

    
        <group position={[-0.9,0,-0.2]} dispose={null} scale={0.03}>
        <group rotation-x={Math.PI/2} rotation-z={Math.PI/2}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["model-material_1"].geometry}
                    material={materials["model-material"]}
                    position={[504, 256, 1.5]}
                    ref={clickRef}
                    onClick={() => {
                      handleSign()
                      moverCamara()
                      
                    }}
                />
            </group>
        </group>
        </group>
  );
}

export default Click;

useGLTF.preload("/assets/Models/Click/Click.glb");