import { createRoot } from "react-dom/client"
import Experience from "./Experience"
import Info from "./Info/Info.jsx"
import "./styles.css"
import { Canvas } from "@react-three/fiber"



const root = createRoot(document.getElementById('root'))

root.render(

    <>
        <Info name="Julian Alvarez" biography="3D Dev" />
        <Canvas camera={{position: [2,0,1] }}>
            <Experience/>
        </Canvas>
    </>
)