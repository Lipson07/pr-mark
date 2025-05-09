import React, { useEffect } from "react";
import glstr from "../../../../Styles/Glavstr.module.scss";
import { selectLike, SetLike, Setid, DeleteLike } from "../../../../store/like";
import { useDispatch, useSelector } from "react-redux";
import { SetTovar, selectTovar } from "../../../../store/tovars";

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
import {
  im,
  name,
  cost,
  about,
  abouts,
  nna,
} from "../../../../Assets/Tovar/index";
const Glavstrmain = () => {
  let d = 0;

  const dispatch = useDispatch();
  const tovarl = useSelector(selectLike);
  const tv = useSelector(selectTovar);
  const likepush = async (
    ids: number,
    name: string,
    cost: number,
    img: string,
    im: string[],
    about: string[],
    abouts: string[],
    likecount: boolean
  ) => {
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
            ? tovarl.find((item: any) => item.id.ids === index)?.id.likecount ||
              false
            : false;
          return (
            <div
              onClick={() =>
                cardtovarload(
                  index,
                  nna[index],
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
                fill={current ? "#FF8B83" : "white"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() =>
                  likepush(
                    index,
                    name[index],
                    cost[index],
                    item,
                    im[index],
                    about[index],
                    abouts[index],
                    true
                  )
                }
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
