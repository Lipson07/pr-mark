import React, { InputHTMLAttributes } from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye, whpng, bphon } from "../../Assets/Vxodas/vxod.js";
import Slider from "./Slider";

const Password = () => {
  return (
    <div className={Vxod.regestr}>
      <img className={Vxod.phon} src={phon} alt="" />
      <Slider sliderClass={Vxod.slider} scrollDirection={1} />
      <Slider sliderClass={Vxod.slider1} scrollDirection={-1} />
      <div className={Vxod.form}>
        <div className={Vxod.phonform}> </div>
        <div className={Vxod.content}>
          <h1>Смена пароля</h1>
          <input type="tel" required />
          <label className={Vxod.label}>Номер телефона</label>
          <div>
            <input type="text" required />
            <label className={Vxod.label1}>Код</label>
          </div>
          <div className={Vxod.input}>
            <input type={"password"} autoComplete="new-password" required />
            <label className={Vxod.label1}>Пароль</label>
          </div>
          <div className={Vxod.input}>
            <input type={"password"} required />
            <label className={Vxod.label1}>Подтвердите пароль</label>
          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Password;
