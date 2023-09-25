
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Coke from './Coke'
import Doritos from './Doritos';
import Reeses from './Reeses'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>Vending Machine</h1>
      </header>
      <div>
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route exact path="/coke" element={<Coke/>}/>
          <Route exact path="/reeses" element={<Reeses/>}/>
          <Route exact path="/doritos" element={<Doritos/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
