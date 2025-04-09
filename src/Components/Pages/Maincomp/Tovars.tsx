import React from "react";
import { selectTovar } from "../../../store/tovars";
import { useSelector } from "react-redux";
const Tovars = () => {
  const tv = useSelector(selectTovar);
  return (
    <div>
      {tv.map((item: any) => {
        return (
          <div>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <p>{item.cost}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tovars;
