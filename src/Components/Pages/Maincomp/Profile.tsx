import React, { useRef } from "react";
import { iconprofile, koshelek } from "../../../Assets/Profile";
import prof from "../../../Styles/Profile.module.scss";
import { selectUser, updateUser } from "../../../store/user";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const names = useRef<HTMLInputElement>(null);
  console.log(user);
  function handleClick() {
    const name = names.current!.value;
    console.log(name);
    dispatch(updateUser({ name: name }));
  }
  return (
    <>
      <div
        style={
          user.user.name === "" ? { display: "flex" } : { display: "none" }
        }
        className={prof.container1}
      >
        <input type="text" ref={names} />
        <button onClick={handleClick}>Сохранить</button>
      </div>
      <div
        style={
          user.user.name === "" ? { display: "flex" } : { display: "none" }
        }
        className={prof.container}
      ></div>

      <div className={prof.profile}>
        <div className={prof.prof}>
          <div className={prof.icon}>
            <img src={iconprofile} />
            <div>
              <h1>
                {user.user.name == "" ? user.user.phone_number : user.user.name}
              </h1>
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
