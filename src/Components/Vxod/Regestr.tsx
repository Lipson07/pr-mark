import React from "react";
import Vxod from "../../Styles/Vxod.module.scss";
import { phon, eye, closeeye } from "../../Assets/Vxodas/vxod.js";
const Regestr = () => {
  const [password, setPassword] = React.useState<boolean>(false);
  const [password1, setPassword1] = React.useState<boolean>(false);
  return (
    <div className={Vxod.regestr}>
      <img className={Vxod.phon} src={phon} alt="" />
      <div className={Vxod.form}>
        <div className={Vxod.phonform}></div>
        <div className={Vxod.content}>
          <h1>Регистрация</h1>
          <input type="tel" required />
          <label className={Vxod.label}>Номер телефона</label>
          <div className={Vxod.input}>
            <input type={password ? "password" : "text"} required />
            <label className={Vxod.label1}>Пароль</label>
            <img
              src={password ? closeeye : eye}
              alt=""
              onClick={() => setPassword(!password)}
            />
          </div>
          <div className={Vxod.input}>
            <input type={password1 ? "password" : "text"} required />
            <label className={Vxod.label1}>Подтвердите пароль</label>
            <img
              src={password1 ? closeeye : eye}
              alt=""
              onClick={() => setPassword1(!password1)}
            />
          </div>
          <button>Зарегистрироваться</button>
          <p>Уже есть аккаунт?</p>
          <p className={Vxod.p}>Войти</p>
        </div>
      </div>
    </div>
  );
};

export default Regestr;
