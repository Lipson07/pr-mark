import React from "react";
import lk from "../../../Styles/Like.module.scss";
import { lik } from "../../../Assets/Main/index";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { selectLike } from "../../../store/like";
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
} from "../../../Assets/Main";

import { SetTovar, selectTovar } from "../../../store/tovars";
import { Link } from "react-router-dom";
const Likes = () => {
  const tv = useSelector(selectTovar);
  const dispatch = useDispatch();
  function cardtovarload(id: number, name: string, cost: number, img: string) {
    const tovar = {
      id: id,
      name: name,
      cost: cost,
      img: img,
    };
    dispatch(SetTovar(tovar));
    console.log(tv);
  }

  const likes = useSelector(selectLike);
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
    <div className={lk.like}>
      {likes.length !== 0 ? (
        <div className={lk.content1}>
          <h1>Избранное</h1>
          <div className={lk.items}>
            {likes.map((item, index) => (
              <Link to="/tovar">
                {" "}
                <div
                  className={lk.item}
                  key={index}
                  onClick={() =>
                    cardtovarload(
                      likes[index].id.index,
                      "name",
                      0,
                      image[likes[index].id.index]
                    )
                  }
                >
                  <img src={image[likes[index].id.index]} alt="" />
                  <div>
                    <p>Сланцы RA-Sh</p>
                    <p>1200р</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className={lk.content}>
          <img src={lik} />
          <h1>Здесь пока ничего нет</h1>
          <p>Добавляйте товары,</p>
          <div>
            <p>нажимая на</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={"white"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Likes;
