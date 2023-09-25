import React from "react";
import './Doritos.css'
import doritosImage from './image/doritosImage.png';


function Doritos() {
    return (
        <div className="Doritos">
        <h1>Doritos Ranch Style</h1>
        <img
          src={doritosImage}
          alt="doritos image"
        />
        <p>crunch crunch crunch crunch crunch</p>

      </div>
    );
}

export default Doritos;