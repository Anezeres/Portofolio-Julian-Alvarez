import React, { createContext, useRef, useState } from "react";
import {refContext} from "./refContext";


const RefContext = ({children}) => {

    const boyRefC = useRef()
    const guitarRefC = useRef();
    const ambientLightRefC = useRef();

    const spotLightRedRefC = useRef();
    const spotLightBlueRefC = useRef();
    const spotLightGreenRefC = useRef();
    const pointLightRefC = useRef();

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
    };



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
                    encenderLuces
                    }
                }
            >
            {children}
        </refContext.Provider>
    )
}

export default RefContext;