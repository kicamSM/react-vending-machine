import React from "react";
import './Coke.css';
import cokeImage from './image/cokeImage.png';

function Coke() {
    return (
        <div className="Coke">
        <h1>Have a Coke!</h1>
        <img
          src={cokeImage}
          alt="coke image"
        />
        <p>coke coke coke coke coke coke coke coke coke</p>
      </div>
    );
}

export default Coke;