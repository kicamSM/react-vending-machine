import React from "react";
import { NavLink } from "react-router-dom";
import './VendingMachine.css';

function VendingMachine() {

    return (
        <nav className="VendingMachine">
          <NavLink exact to="/coke">
            Coke
          </NavLink>
          <NavLink exact to="/reeses">
            Reeses
          </NavLink>
          <NavLink exact to="/doritos">
            Doritos
          </NavLink>
        </nav>
      );
}

export default VendingMachine