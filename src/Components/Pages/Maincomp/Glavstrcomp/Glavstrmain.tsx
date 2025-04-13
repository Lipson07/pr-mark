import React, { useEffect } from "react";
import glstr from "../../../../Styles/Glavstr.module.scss";
import { selectLike, SetLike, Setid, DeleteLike } from "../../../../store/like";
import { useDispatch, useSelector } from "react-redux";
import { SetTovar, selectTovar } from "../../../../store/tovars";
import {
  tovar1im,
  tovar1im1,
  tovar1im2,
  tovar2im,
  tovar2im1,
  tovar2im2,
  tovar3im,
  tovar3im1,
  tovar3im2,
  tovar4im,
  tovar4im1,
  tovar4im2,
} from "../../../../Assets/tovars";
import {
  tovar1,
  tovar2,
  tovar3,
  tovar4,
  tovar5,
  tovar6,
  tovar7,
  tovar8,
  tovar9,
  tovar10,
  tovar11,
  tovar12,
} from "../../../../Assets/Main";
import { Link } from "react-router-dom";
const Glavstrmain = () => {
  let d = 0;
  const im = [
    [tovar1, tovar1im, tovar1im1, tovar1im2],
    [tovar2, tovar2im, tovar2im1, tovar2im2],
    [tovar3, tovar3im, tovar3im1, tovar3im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
    [tovar4, tovar4im, tovar4im1, tovar4im2],
  ];
  const cost = [
    1243, 715, 2413, 2413, 435, 930, 20146, 66690, 38000, 2364997, 2102, 52261,
    1243, 715, 2413, 2413, 435, 930, 20146, 66690, 38000, 2364997, 2102, 52261,
    1243, 715, 2413, 2413, 435, 930, 20146, 66690, 38000, 2364997, 2102, 52261,
  ];
  const name = [
    "Сланцы RA-Sh",
    "Журнал ЧТИВО №3... ",
    "Кроссовки lexsan",
    "Смартфон Apple iP...",
    "Чехол Genshin Impa...",
    "Комплект трусов б... ",
    "Процессор Intel CO...",
    "Игровая приставка...",
    "Умная колонка “Ал...",
    "Автомобиль CHERY...",
    "Туалетная вода Dol...",
    "Подвесной унитаз...",
    "Сланцы RA-Sh",
    "Журнал ЧТИВО №3... ",
    "Кроссовки lexsan",
    "Смартфон Apple iP...",
    "Чехол Genshin Impa...",
    "Комплект трусов б... ",
    "Процессор Intel CO...",
    "Игровая приставка...",
    "Умная колонка “Ал...",
    "Автомобиль CHERY...",
    "Туалетная вода Dol...",
    "Подвесной унитаз...",
    "Сланцы RA-Sh",
    "Журнал ЧТИВО №3... ",
    "Кроссовки lexsan",
    "Смартфон Apple iP...",
    "Чехол Genshin Impa...",
    "Комплект трусов б... ",
    "Процессор Intel CO...",
    "Игровая приставка...",
    "Умная колонка “Ал...",
    "Автомобиль CHERY...",
    "Туалетная вода Dol...",
    "Подвесной унитаз...",
  ];
  const about = [
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
    [
      "Материал",
      "Материал подошвы обуви",
      "Сезон",
      "Цвет	",
      "Российский размер	",
    ],
  ];
  const abouts = [
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
    ["EVA", "EVA", "Лето", "Черный", "44.45"],
  ];
  const dispatch = useDispatch();
  const tovarl = useSelector(selectLike);
  const tv = useSelector(selectTovar);
  const likepush = async (index: number, cost: number, likecount: boolean) => {
    const id = {
      index: index,
      cost: cost,
      likecount: likecount,
    };
    dispatch(Setid(id));

    dispatch(SetLike({ id }));
    if (tovarl.find((item: any) => item.id.index === index)?.id.likecount) {
      dispatch(DeleteLike({ index }));
    }
  };
  function cardtovarload(
    id: number,
    name: string,
    cost: number,
    img: string,
    im: string[],
    about: string[],
    abouts: string[]
  ) {
    const tovar = {
      id: id,
      name: name,
      cost: cost,
      img: img,
      im: im,
      about: about,
      abouts: abouts,
    };
    dispatch(SetTovar(tovar));
  }

  const image: string[] = [
    tovar1,
    tovar2,
    tovar3,
    tovar4,
    tovar5,
    tovar6,
    tovar7,
    tovar8,
    tovar9,
    tovar10,
    tovar11,
    tovar12,
    tovar1,
    tovar2,
    tovar3,
    tovar4,
    tovar5,
    tovar6,
    tovar7,
    tovar8,
    tovar9,
    tovar10,
    tovar11,
    tovar12,
    tovar1,
    tovar2,
    tovar3,
    tovar4,
    tovar5,
    tovar6,
    tovar7,
    tovar8,
    tovar9,
    tovar10,
    tovar11,
    tovar12,
  ];

  return (
    <div className={glstr.tovars}>
      <div className={glstr.sectname}>
        <h1>Подборка для вас</h1>
      </div>
      <div className={glstr.tovarlist}>
        {image.map((item, index) => {
          if (d < 12) d++;
          else d = 1;
          const current = tovarl
            ? tovarl.find((item: any) => item.id.index === index)?.id
                .likecount || false
            : false;
          return (
            <div
              onClick={() =>
                cardtovarload(
                  index,
                  name[index],
                  cost[index],
                  item,
                  im[index],
                  about[index],
                  abouts[index]
                )
              }
              className={glstr.tovarname}
              data-id={"i" + d}
              data-id1={index >= 12 ? "i" + d : ""}
              data-id2={index >= 24 ? "i" + d : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={current ? "red" : "white"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => likepush(index, 0, true)}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <Link to="/tovar">
                <img src={item} key={index} />
                <p>{name[index]}</p>
                <p>{cost[index] + " ₽"}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glavstrmain;
