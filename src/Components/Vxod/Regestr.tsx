import React, { useState, useEffect, useRef } from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye, whpng, bphon } from "../../Assets/Vxodas/vxod.js";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const Regestr = () => {
  const [password, setPassword] = React.useState<string>("");
  const [oldPassword, setOldPassword] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");

  const a = async () => {
    if (password !== oldPassword) {
      alert("Пароли не совпадают");
    } else {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phone,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log(phone);
    }
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
          <h1>Регистрация</h1>
          <input
            type="tel"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <label className={Vxod.label}>Номер телефона</label>
          <div className={Vxod.input}>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label className={Vxod.label1}>Пароль</label>
          </div>
          <div className={Vxod.input}>
            <input
              type={"password"}
              required
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
            />
            <label className={Vxod.label1}>Подтвердите пароль</label>
          </div>
          <button onClick={a}>Зарегистрироваться</button>
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
