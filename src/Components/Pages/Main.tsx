import React, { useRef } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Glavstr from "./Maincomp/Glavstr";
import Footer from "./Footer";
import glstr from "../../Styles/Glavstr.module.scss";
import Likes from "./Maincomp/Likes";
import Korzina from "./Maincomp/Korzina";
const Main = () => {
  const dv = useRef<HTMLDivElement>(null);
  console.log("ssss");
  return (
    <>
      <Header dv={dv} />

      <Routes>
        <Route path="/" element={<Glavstr />} />
        <Route path="likes" element={<Likes />} />
        <Route path="shop" element={<Korzina/>}/>
      </Routes>
      <div ref={dv} className={glstr.str}></div>
    
    </>
  );
};

export default Main;
