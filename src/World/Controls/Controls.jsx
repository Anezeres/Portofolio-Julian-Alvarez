import { OrbitControls } from "@react-three/drei";

const Controls = () => {


    return (
        <>
            <OrbitControls  /* enableZoom={false}
                                enablePan={false}
                                enableRotate={false}
                                target={[0, 0, 0]} *//>
        </>
    )
}

/* The X axis is red. The Y axis is green. The Z axis is blue. */

export default Controls;