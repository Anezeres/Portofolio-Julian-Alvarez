import { Perf } from "r3f-perf";
import RefContext from "../../Context/RefContext";
import Details from "../Models/Details";
import Lights from "../Models/Lights";
import Boy from "../Models/Boy";
import Cuarto from "../Models/Cuarto";
import Guitar from "../Models/Guitar";
import Parlante from "../Models/Parlante";
import Mixer from "../Models/Mixer";
import Palmera from "../Models/Palmera";
import Telescope from "../Models/Telescope";
import SongText from "../Text/SongText";
import Globo from "../Models/Globo";
import Click from "../Models/Click";
import Linkedin from "../Models/Linkedin";
import Github from "../Models/Github";
import Whatsapp from "../Models/Whatsapp";

const Room = () => {


    return (
        <>
            <Perf position={"top-right"} />
            <RefContext>   
                <Details/>
                <Lights/>
                <Boy/>
                <Cuarto scale={0.6} rotation-y={-Math.PI * 0.60} position-y={-2}/>
                <Guitar />
                <Parlante/>
                <Mixer/>
                <Palmera/>
                <Telescope/>
                <SongText/>
                <Globo/>
                <Linkedin/>
                <Github/>
                <Whatsapp/>
                <Click /> 
                {/* <axesHelper args={[5]} position-y={0} /> */}
            </RefContext>
        </>
    )
}

/* The X axis is red. The Y axis is green. The Z axis is blue. */

export default Room;