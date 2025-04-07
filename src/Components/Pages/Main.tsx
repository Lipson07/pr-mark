import React, { useRef } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Glavstr from "./Maincomp/Glavstr";
import Footer from "./Footer";
import glstr from "../../Styles/Glavstr.module.scss";
const Main = () => {
  const dv = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header dv={dv} />

      <Routes>
        <Route path="/" element={<Glavstr />} />
      </Routes>
      <div ref={dv} className={glstr.str}></div>
      <Footer />
    </>
  );
};

export default Main;
