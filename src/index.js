import { createRoot } from "react-dom/client"
import Experience from "./Experience"
import Info from "./Info/Info.jsx"
import "./styles.css"
import { Canvas } from "@react-three/fiber"



const root = createRoot(document.getElementById('root'))

root.render(

    <>
        <Info name="Julian Alvarez" biography="3D Dev" />
        <Canvas camera={{position: [2,0,4] }}>
            <Experience/>
        </Canvas>
    </>
)


/* 2,0,4 */

/* -2,-1,4 Inicio Cancion*/

/* 4,-1,-1 Final Cancion*/