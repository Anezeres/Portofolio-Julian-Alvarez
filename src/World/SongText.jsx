import { Center, Float, Html, Text, Text3D, useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react";
import { Color, Audio, AudioListener, AudioLoader } from "three";

const SongText = () => {

    const arrowModel = useGLTF("/assets/Models/Notes/scene.gltf");

    const fragmentoCancion = [
        "Y hace tiempo \nque no venías \na mi cabeza",
        "Pero ya van \npar de cervezas",
        "Y me acoldé de \ncómo tú me besas",
        "De to' los polvos \nencima 'e la mesa",
        "Y en el carro, \nla playa, y el motel",
        "En casa de tu pai, \ncuando yo te iba a vel",
        "Las veces que tu mai \nnos llegó a cogel",
        "Tú brincando mojaíta, \nsudando Chanel",
        "Yo sé que lo nuestro \nes cosa de ayel",
        "Y me pone contento \nque te va bien con él",
        "Yo ni te extrañaba \nni te quería vel",
        "Pero pusieron la \ncanción que te \ngustaba ponel"
    ];

    const [texto, setTexto] = useState(fragmentoCancion[0]); // Inicialmente, muestra el primer fragmento
    const tiempoPorFragmento = 33000/12; // 33 segundos divididos en 4 fragmentos


    const handleSign = (type) => {
        alert(type);
    };
    

    useEffect(() => {
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
    }, []);

  /*   useEffect(() => {
        // Crear una instancia de AudioListener y agregarlo a la cámara
        const listener = new AudioListener();
        //cameraRef.current.add(listener);
    
        // Crear una fuente de audio global
        const sound = new Audio(listener);
    
        // Cargar un sonido y configurarlo como el buffer del objeto de audio
        const audioLoader = new AudioLoader();
        audioLoader.load('/assets/Sounds/BadBunny.mp3', (buffer) => {
        sound.setBuffer(buffer);
        //sound.setLoop(true);
        sound.setVolume(0.5); 
        sound.play();
        });
    }, []); */

    return (    
        <>
            <Center
                /* position-y={0}
                position-x={-0.8} */
            >   

            <Html  position={[-0.5, 2.4, -0.1]}  center distanceFactor={12}>
                <h2 className="song-text">{texto}</h2>
            </Html>
            <Float speed={2}>
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
            <group dispose={null} position={[0,1,0]} scale={20}>
                <mesh position={[0.3,-1.56,0.7]} scale={1} rotation-y={-Math.PI * 1}>
                    <primitive object={arrowModel.scene}/>
                </mesh>
            </group>
        </>

    )
}

export default SongText;
useGLTF.preload("/assets/Models/Notes/scene.gltf");

        