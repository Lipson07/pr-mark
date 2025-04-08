import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Regestr from "./Components/Vxod/Regestr";
import Vhod from "./Components/Vxod/Vhod";
import Password from "./Components/Vxod/Password";
import Main from "./Components/Pages/Main";
import Likes from "./Components/Pages/Maincomp/Likes";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="vhod" element={<Vhod />} />
        <Route path="smena" element={<Password />} />
        <Route path="regestr" element={<Regestr />} />
      </Routes>
    </div>
  );
}

export default App;
