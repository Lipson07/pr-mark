import React, { useState } from "react";
import { selectTovar } from "../../../store/tovars";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tovar1im } from "../../../Assets/tovars";
import tovars from "../../../Styles/Tovar.module.scss";
import { SetKorz, selectKorz, DeleteKorz } from "../../../store/korz";

const Tovars = () => {
  const dispatch = useDispatch();
  const tv = useSelector(selectTovar);
  const [imgosntovar, setImgosntovar] = useState(tv[0].im[0]);
  const korz = useSelector(selectKorz);
  console.log(tv[0].about);
  function korztovarload() {
    const tovar = {
      id: tv[0].id,
      name: tv[0].name,
      cost: tv[0].cost,
      img: tv[0].img,
      kol: 1,
      def: tv[0].cost,
    };

    dispatch(SetKorz({ ...tovar }));

    console.log(korz);
  }
  function cardtovarload(image: string) {
    setImgosntovar(image);
  }
  console.log(imgosntovar);
  return (
    <div className={tovars.tovars}>
      {tv.map((item: any, index) => {
        return (
          <div className={tovars.item}>
            <section>
              {tv[0].im.map((imag: any) => {
                return (
                  <img
                    src={imag}
                    className={tovars.imgim}
                    onClick={() => cardtovarload(imag)}
                  />
                );
              })}
            </section>
            <div className={tovars.item1}>
              <img src={imgosntovar} className={tovars.img} alt="" />
            </div>
            <div>
              <div className={tovars.name}>
                <p>{item.name}</p>
              </div>
              <div className={tovars.about}>
                <h1>О товаре</h1>
                {tv[0].about.map((item: any, index) => {
                  return (
                    <div className={tovars.about1}>
                      <p>{item}</p>
                      <p className={tovars.about2}>{tv[0].abouts[index]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={tovars.cost}>
              <h1>{item.cost}</h1>
              <div className={tovars.button}>
                <button className={tovars.button1} onClick={korztovarload}>
                  Добавить в корзинуу
                </button>
                <div className={tovars.button2}>k</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tovars;
