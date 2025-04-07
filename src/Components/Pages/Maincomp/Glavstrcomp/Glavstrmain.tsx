import React from "react";
import glstr from "../../../../Styles/Glavstr.module.scss";
import { tovar1 } from "../../../../Assets/Main";
const Glavstrmain = () => {
  const image: string[] = [
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
    tovar1,
  ];
  return (
    <div className={glstr.tovars}>
      <div className={glstr.sectname}>
        <h1>Подборка для вас</h1>
      </div>
      <div className={glstr.tovarlist}>
        {image.map((item, index) => (
          <div className={glstr.tovarname}>
            <img src={item} key={index} />
            <p>Сланцы RA-Sh</p>
            <p>1200р</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glavstrmain;
