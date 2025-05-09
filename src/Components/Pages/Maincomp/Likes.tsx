import React from "react";
import lk from "../../../Styles/Like.module.scss";
import { lik } from "../../../Assets/Main/index";
import { useDispatch, useSelector } from "react-redux";
import { selectLike, SetLike, DeleteLike } from "../../../store/like";
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
} from "../../../Assets/tovars";
import {
  im,
  name,
  cost,
  about,
  abouts,
  nna,
} from "../../../Assets/Tovar/index";
import { SetTovar, selectTovar } from "../../../store/tovars";
import { Link } from "react-router-dom";
const Likes = () => {
  const tv = useSelector(selectTovar);
  const dispatch = useDispatch();

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
  const a = (
    ids: number,
    name: string,
    cost: number,
    img: string,
    im: string[],
    about: string[],
    abouts: string[],
    likecount: boolean
  ) => {
    if (likes.find((item: any) => item.id.ids === ids)?.id.likecount) {
      dispatch(DeleteLike({ ids }));
    }
  };
  return (
    <div className={lk.like}>
      {likes.length !== 0 ? (
        <div className={lk.content1}>
          <h1>Избранное</h1>
          <div className={lk.items}>
            {likes.map((item, index) => {
              return (
                <>
                  {" "}
                  <div className={lk.item} key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill={"#FF8B83"}
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={() =>
                        a(
                          likes[index].id.ids,
                          nna[likes[index].id.ids],
                          likes[index].id.cost,
                          likes[index].id.img,
                          likes[index].id.im,
                          likes[index].id.about,
                          likes[index].id.abouts,
                          likes[index].id.likecount
                        )
                      }
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <Link to="/tovar">
                      <img
                        src={image[likes[index].id.ids]}
                        alt=""
                        onClick={() =>
                          cardtovarload(
                            likes[index].id.ids,
                            nna[likes[index].id.ids],
                            likes[index].id.cost,
                            likes[index].id.img,

                            likes[index].id.im,
                            likes[index].id.about,
                            likes[index].id.abouts
                          )
                        }
                      />
                    </Link>
                    <div>
                      <p>{likes[index].id.name}</p>
                      <p>{likes[index].id.cost + " Р"}</p>
                    </div>
                  </div>
                </>
              );
            })}
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
