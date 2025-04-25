import React, { useState } from "react";
import { selectTovar } from "../../../store/tovars";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tovar1im } from "../../../Assets/tovars";
import tovars from "../../../Styles/Tovar.module.scss";
import { SetKorz, selectKorz, DeleteKorz } from "../../../store/korz";
import { selectLike, SetLike, DeleteLike, Setid } from "../../../store/like";
import { current } from "@reduxjs/toolkit";

const Tovars = () => {
  const dispatch = useDispatch();
  const tv = useSelector(selectTovar);
  const [imgosntovar, setImgosntovar] = useState(tv[0].im[0]);
  const korz = useSelector(selectKorz);
  const tovarl = useSelector(selectLike);
  console.log(tv[0].about);
  const likepush = async (
    ids: any,
    name: any,
    cost: any,
    img: any,
    im: any,
    about: any,
    abouts: any,
    likecount: any
  ) => {
    console.log(ids);
    const id = {
      ids: ids,
      name: name,

      cost: cost,
      img: img,
      im: im,
      about: about,
      abouts: abouts,
      likecount: likecount,
    };

    dispatch(Setid(id));

    dispatch(SetLike({ id }));
    if (tovarl.find((item: any) => item.id.ids === ids)?.id.likecount) {
      dispatch(DeleteLike({ ids }));
    }
  };
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
        const currents = tovarl.find((item: any) => item.id.ids === tv[0].id);
        return (
          <div className={tovars.item}>
            <section>
              {tv[0].im.map((imag: any, index) => {
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
              <h1>{item.cost + "₽"}</h1>
              <div className={tovars.button}>
                <button className={tovars.button1} onClick={korztovarload}>
                  Добавить в корзину
                </button>
                <div className={tovars.button2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill={currents ? "#FF8B83" : "#B3B3B3"}
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => {
                      const s = tovarl.find(
                        (item: any) => item.id.ids === tv[0].id
                      );
                      console.log(s);
                      if (s) {
                        likepush(
                          s?.id.ids,
                          s?.id.name,
                          s?.id.cost,
                          s?.id.img,
                          s?.id.im,
                          s?.id.about,
                          s?.id.abouts,
                          !currents
                        );
                        console.log("sss");
                      } else {
                        likepush(
                          tv[0].id,
                          tv[0].name,
                          tv[0].cost,
                          tv[0].img,
                          tv[0].im,
                          tv[0].about,
                          tv[0].abouts,
                          !currents
                        );
                      }
                    }}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tovars;
