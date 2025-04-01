import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Regestr from "./Components/Vxod/Regestr";
import Vhod from "./Components/Vxod/Vhod";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Regestr />} />
        <Route path="/vhod" element={<Vhod />} />
      </Routes>
    </div>
  );
}

export default App;
