import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Regestr from "./Components/Vxod/Regestr";
import Vhod from "./Components/Vxod/Vhod";
import Password from "./Components/Vxod/Password";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Regestr />} />
        <Route path="/vhod" element={<Vhod />} />
        <Route path="smena" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
