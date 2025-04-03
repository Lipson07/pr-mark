import React from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye } from "../../Assets/Vxodas/vxod.js";
import Slider from "./Slider";
const Vhod = () => {
  const [password, setPassword] = React.useState<boolean>(false);
  return (
    <div className={Vxod.regestr}>
      <img className={Vxod.phon} src={phon} alt="" />
      <Slider sliderClass={Vxod.slider} scrollDirection={1} />
      <Slider sliderClass={Vxod.slider1} scrollDirection={-1} />
      <div className={Vxod.form}>
        <div className={Vxod.phonform}></div>
        <div className={Vxod.content}>
          <h1>Вход</h1>
          <input type="tel" required />
          <label className={Vxod.label2}>Номер телефона</label>
          <div className={Vxod.input}>
            <input type={ "password"} required />
            <label className={Vxod.label1}>Пароль</label>
          
          </div>
          <p className={Vxod.p1}>Забыли пароль?</p>
          <button>Войти</button>
          <p>Уже есть аккаунт?</p>
          <p className={Vxod.p}>Зарегистрироваться</p>
        </div>
      </div>
    </div>
  );
};

export default Vhod;
