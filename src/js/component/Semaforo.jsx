import React from "react";
import { useState } from "react";
import "../../styles/semaforo.css";


const Semaforo = () => {
    const [ color, setColor] = useState("red");
    return (


        <div className="container">

            <div className="stick"></div>

            <div className="luzces">

                <div onClick={() => setColor("red")} className={"red-light" + (color === "red" ? " glow" : '')}></div>
                <div onClick={() => setColor("yellow")} className={"yellow-light" + (color === "yellow"  ? " glow" : '')}></div>
                <div onClick={() => setColor("green")} className={"green-light" + (color === "green"  ? " glow" : '')}></div>
                
            </div>

        </div>
    );
};

export default Semaforo;