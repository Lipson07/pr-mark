import React from "react";
import { Setcount, selectCount } from "../../store/maincount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  header,
  logo,
  like,
  menu,
  search,
  shop,
  reg,
  linehead,
  arrowhead,
} from "../../Assets/Main/index";
import head from "../../Styles/Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ dv }: { dv: any }) => {
  const sr = useRef<HTMLInputElement>(null);
  const line = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLDivElement>(null);
  const count = useSelector(selectCount);
  const image = useRef<HTMLImageElement>(null);
  const arr = useRef<HTMLImageElement>(null);
  console.log(count);
  const dispatch = useDispatch();
  function handleClick(count: number) {
    dispatch(Setcount(count));
  }

  useEffect(() => {
    const ln = line.current;
    if (count === 0) {
      ln!.style.transform = "translateX(0px)";
    }
    if (count === 1) {
      ln!.style.transform = "translateX(100px)";
    }
    if (count === 2) {
      ln!.style.transform = "translateX(200px)";
    }
    if (count === 3) {
      ln!.style.transform = "translateX(640px)";
    }
  });

  function searchclick() {
    const search = sr.current;
    const backs = back.current;
    const img = image.current;
    const d1 = dv.current;
    const arrs = arr.current;
    arrs!.style.display = "block";
    d1!.style.display = "block";
    img!.style.transition = "0.3s";
    img!.style.transform = "translateX(-400px)";
    img!.style.position = "relative";
    img!.style.top = "0px";
    search!.style.paddingLeft = "80px";
    search!.style.fontSize = "40px";
    backs!.style.display = "block";
    backs!.style.backgroundColor = "white";
    backs!.style.position = "absolute";
    backs!.style.width = "100%";
    backs!.style.height = "110px";
    backs!.style.transition = "0.3s";
    backs!.style.top = "-35px";
    backs!.style.transform = "translateX(-700px)";
    search!.style.position = "absolute";
    search!.style.width = "1000px";
    search!.style.height = "110px";
    search!.style.transition = "0.3s";
    search!.style.top = "-35px";
    search!.style.transform = "translateX(-400px)";
    line.current!.style.display = "none";
    search!.style.opacity = "1";
  }
  function backclick() {
    console.log("click");
    const search = sr.current;
    const backs = back.current;
    const img = image.current;
    const d1 = dv.current;
    const arrs = arr.current;
    img!.style.top = "15px";
    arrs!.style.display = "none";
    d1!.style.display = "none";
    img!.style.transition = "0.3s";
    img!.style.transform = "translateX(-200px)";
    backs!.style.display = "";
    backs!.style.backgroundColor = "";
    backs!.style.position = "";
    backs!.style.width = "";
    backs!.style.height = "";
    backs!.style.transition = "";
    backs!.style.top = "";
    backs!.style.transform = "";
    search!.value = "";
    search!.style.position = "";
    search!.style.width = "";
    search!.style.height = "";
    search!.style.transition = "0.3s";
    search!.style.top = "";
    search!.style.transform = "translateX(0px)";
    search!.style.opacity = "";

    line!.current!.style.display = "";
  }
  return (
    <div className={head.head}>
      <div className={head.header}>
        <img src={header} className={head.sect} />
        <div className={head.cont}>
          <div className={head.contone}>
            <img
              src={logo}
              className={head.logo}
              onClick={() => handleClick(0)}
              alt=""
            />
            <img
              src={menu}
              className={head.menu}
              onClick={() => handleClick(1)}
              alt=""
            />
            <img
              src={like}
              className={head.like}
              onClick={() => handleClick(2)}
              alt=""
            />
          </div>
          <div className={head.conttwo}>
            <div
              ref={back}
              style={{ display: "none", borderRadius: "20px" }}
              onClick={backclick}
            >
              <img
                src={arrowhead}
                ref={arr}
                className={head.arrowhead}
                alt=""
              />
            </div>
            <input className={head.input} ref={sr} onClick={searchclick} />
            <img ref={image} src={search} className={head.search} />
          </div>
          <div className={head.contthree}>
            <img
              src={shop}
              className={head.shop}
              onClick={() => handleClick(3)}
              alt=""
            />
          </div>
          <Link to="/vhod">
            <div className={head.contfour}>
              <img src={reg} className={head.reg} alt="" />
            </div>
          </Link>
        </div>
        <img src={linehead} className={head.linehead} alt="" ref={line} />
      </div>{" "}
    </div>
  );
};

export default Header;
