import React, { useEffect } from "react";
import glstr from "../../../../Styles/Glavstr.module.scss";
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
const Glavstrmain = () => {
  let d = 0;

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

          return (
            <div
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
                fill={"white"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <img src={item} key={index} />
              <p>Сланцы RA-Sh</p>
              <p>1200р</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glavstrmain;
