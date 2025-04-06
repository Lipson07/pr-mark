import React, { useState, useEffect, useRef } from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye, whpng, bphon } from "../../Assets/Vxodas/vxod.js";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const Regestr = () => {
  const [password, setPassword] = React.useState<boolean>(false);
  const [password1, setPassword1] = React.useState<boolean>(false);

  return (
    <div className={Vxod.regestr}>
      <img className={Vxod.phon} src={phon} alt="" />
      <Slider sliderClass={Vxod.slider} scrollDirection={1} />
      <Slider sliderClass={Vxod.slider1} scrollDirection={-1} />
      <div className={Vxod.form}>
        <div className={Vxod.phonform}></div>
        <div className={Vxod.content}>
          <h1>Регистрация</h1>
          <input type="tel" required />
          <label className={Vxod.label}>Номер телефона</label>
          <div className={Vxod.input}>
            <input type={"password"} required />
            <label className={Vxod.label1}>Пароль</label>
          </div>
          <div className={Vxod.input}>
            <input type={"password"} required />
            <label className={Vxod.label1}>Подтвердите пароль</label>
          </div>
          <button>Зарегистрироваться</button>
          <p>Уже есть аккаунт?</p>
          <Link to="/vhod">
            <p className={Vxod.p}>Войти</p>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Regestr;
