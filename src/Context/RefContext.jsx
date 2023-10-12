import React, { createContext, useRef, useState } from "react";
import {refContext} from "./refContext";


const RefContext = ({children}) => {

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

    const boyRefC = useRef()
    const guitarRefC = useRef();
    const ambientLightRefC = useRef();
    const admirationRef1 = useRef();
    const clickRefC = useRef();
    const admirationRefC = useRef();

    const spotLightRedRefC = useRef();
    const spotLightBlueRefC = useRef();
    const spotLightGreenRefC = useRef();
    const pointLightRefC = useRef();


    const [parlanteActivo, setParlante] = useState(false);
    const [mixerActivo, setMixer] = useState(false);
    const [activeCamera, setActiveCamera] = useState(false)
    const [texto, setTexto] = useState(fragmentoCancion[0]);
    const [isVisible, setIsVisible] = useState(false);

    

    const apagarLuces = () => {
        if (ambientLightRefC.current) {
          ambientLightRefC.current.intensity = 0.3; // Aumentar la intensidad a 1
        }
        if (spotLightRedRefC.current) {
            spotLightRedRefC.current.visible = true;
        }
        if (spotLightBlueRefC.current) {
            spotLightBlueRefC.current.visible = true;
        }
        if (spotLightGreenRefC.current) {
            spotLightGreenRefC.current.visible = true;
        }
        if (pointLightRefC.current) {
            pointLightRefC.current.visible = true;
        }

        setParlante(true);
        setMixer(true);
    };

    const encenderLuces = () => {
        if (ambientLightRefC.current) {
          ambientLightRefC.current.intensity = 1; // Aumentar la intensidad a 1
        }
        if (spotLightRedRefC.current) {
            spotLightRedRefC.current.visible = false;
        }
        if (spotLightBlueRefC.current) {
            spotLightBlueRefC.current.visible = false;
        }
        if (spotLightGreenRefC.current) {
            spotLightGreenRefC.current.visible = false;
        }
        if (pointLightRefC.current) {
            pointLightRefC.current.visible = false;
        }

        setParlante(false);
        setMixer(false);

    };

    const moverCamara = () => {
        
        setActiveCamera(!activeCamera);
    } 



    return (
        <refContext.Provider
            value={
                {
                    boyRefC,
                    guitarRefC,
                    ambientLightRefC,
                    apagarLuces,
                    spotLightRedRefC,
                    spotLightBlueRefC,
                    spotLightGreenRefC,
                    pointLightRefC,
                    encenderLuces,
                    parlanteActivo,
                    mixerActivo,
                    admirationRef1,
                    clickRefC,
                    activeCamera,
                    setActiveCamera,
                    moverCamara,
                    texto, 
                    setTexto,
                    fragmentoCancion,
                    isVisible, 
                    setIsVisible,
                    admirationRefC
                    }
                }
            >
            {children}
        </refContext.Provider>
    )
}

export default RefContext;