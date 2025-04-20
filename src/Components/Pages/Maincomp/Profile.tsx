import React from "react";
import { iconprofile, koshelek } from "../../../Assets/Profile";
import prof from "../../../Styles/Profile.module.scss";
import Footer from "../Footer";
const Profile = () => {
  return (
    <>
      <div className={prof.profile}>
        <div className={prof.prof}>
          <div className={prof.icon}>
            <img src={iconprofile} />
            <div>
              <h1>8 925 231 44 22</h1>
              <p>Изменить профиль</p>
            </div>
          </div>
          <div className={prof.categ}>
            <h1>Доставки</h1>
            <h1>Покупки</h1>
            <h1>Отзывы</h1>
            <h1>Адреса</h1>
            <h1>Способы оплаты</h1>
            <h1>Настройки</h1>
          </div>
          <div className={prof.koshelek}>
            <img src={koshelek} className="koshelek " />
            <div>
              <h1>150Р</h1>
              <h1>Кошелек</h1>
            </div>
            <div className={prof.button}>
              <button>Пополнить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer dv={0} />
    </>
  );
};

export default Profile;
