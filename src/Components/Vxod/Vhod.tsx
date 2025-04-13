import React from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye } from "../../Assets/Vxodas/vxod.js";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const Vhod = () => {
  const [password, setPassword] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const a = async () => {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_number: phone,
        password: password,
      }),
    });
  };
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  return (
    <div className={Vxod.regestr}>
      <img className={Vxod.phon} src={phon} alt="" />
      <Slider sliderClass={Vxod.slider} scrollDirection={1} />
      <Slider sliderClass={Vxod.slider1} scrollDirection={-1} />
      <div className={Vxod.form}>
        <div className={Vxod.phonform}></div>
        <div className={Vxod.content}>
          <h1>Вход</h1>
          <input
            type="tel"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <label className={Vxod.label2}>Номер телефона</label>
          <div className={Vxod.input}>
            <input
              type={"password"}
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label className={Vxod.label1}>Пароль</label>
          </div>
          <Link to="/smena">
            <p className={Vxod.p1}>Забыли пароль?</p>
          </Link>
          <button onClick={a}>Войти</button>
          <p>Нет аккаунта?</p>
          <Link to="/regestr">
            <p className={Vxod.p}>Зарегистрироваться</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vhod;
