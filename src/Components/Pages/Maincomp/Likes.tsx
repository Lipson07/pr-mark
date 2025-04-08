import React from "react";
import lk from "../../../Styles/Like.module.scss";
import { lik } from "../../../Assets/Main/index";
const Likes = () => {
  return (
    <div className={lk.like}>
      <div className={lk.content}>
        <img src={lik} />
        <h1>Здесь пока ничего нет</h1>
        <p>Добавляйте товары,</p>
        <div>
          {" "}
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
    </div>
  );
};

export default Likes;
