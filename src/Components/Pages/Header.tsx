import React from "react";
import { Setcount, selectCount } from "../../store/maincount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { selectUser } from "../../store/user";
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
import { SetTovar, selectTovar } from "../../store/tovars";
import head from "../../Styles/Header.module.scss";
import { Link } from "react-router-dom";
import {
  images,
  im,
  name,
  cost,
  about,
  abouts,
  nna,
} from "../../Assets/Tovar/index";
const Header = ({ dv }: { dv: any }) => {
  const user = useSelector(selectUser);
  console.log(user);
  const t = useSelector(selectTovar);
  const [vod, Setvod] = useState("");
  const sr = useRef<HTMLInputElement>(null);
  const line = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLDivElement>(null);
  const count = useSelector(selectCount);
  const image = useRef<HTMLImageElement>(null);
  const arr = useRef<HTMLImageElement>(null);
  const sea = useRef<HTMLDivElement>(null);
  console.log(count);
  const dispatch = useDispatch();
  function handleClick(count: number) {
    dispatch(Setcount(count));
  }
  const tovars: any[] = [];
  for (let i = 0; nna.length > i; i++) {
    const tovar = {
      id: i,
      name: nna[i],
      cost: cost[i],
      img: images[i],
      im: im[i],
      about: about[i],
      abouts: abouts[i],
    };
    tovars.push(tovar);
  }

  useEffect(() => {
    const ln = line.current;
    if (count === 0) {
      ln!.style.transform = "translateX(-35px)";
    }
    if (count === 1) {
      ln!.style.transform = "translateX(80px)";
    }
    if (count === 2) {
      ln!.style.transform = "translateX(185px)";
    }
    if (count === 3) {
      ln!.style.transform = "translateX(637px)";
    }

    if (count === 4) {
      ln!.style.transform = "translateX(820px)";
    }
  });
  const filteredNames = nna.filter(
    (names) => vod && names.toLowerCase().includes(vod.toLowerCase())
  );

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
    backclick();
  }
  function searchclick() {
    const searchdiv = sea.current;
    const search = sr.current;
    const backs = back.current;
    const img = image.current;
    const d1 = dv.current;
    const arrs = arr.current;

    searchdiv!.style.transition = "0.3s";
    searchdiv!.style.display = "flex";
    arrs!.style.display = "block";
    d1!.style.display = "block";
    img!.style.transition = "0.3s";
    img!.style.transform = "translateX(-400px)";
    img!.style.position = "relative";
    img!.style.top = "0px";
    search!.style.borderRadius = "20px 20px 0px 0px";
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
    search!.style.width = "1030px";
    search!.style.height = "110px";
    search!.style.transition = "0.3s";
    search!.style.top = "-35px";
    search!.style.transform = "translateX(-400px)";
    line.current!.style.display = "none";
    search!.style.opacity = "1";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  }
  function backclick() {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    console.log("click");
    const search = sr.current;
    const backs = back.current;
    const img = image.current;
    const d1 = dv.current;
    const arrs = arr.current;
    const searchdiv = sea.current;
    search!.style.borderRadius = "20px 20px 20px 20px";
    searchdiv!.style.display = "none";
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
    Setvod("");
    line!.current!.style.display = "";
  }
  return (
    <div className={head.head}>
      <div className={head.header}>
        <img src={header} className={head.sect} />
        <div className={head.cont}>
          <div className={head.contone}>
            <Link to="/">
              <img
                src={logo}
                className={head.logo}
                onClick={() => handleClick(0)}
                alt=""
              />
            </Link>

            <Link to="/catalog">
              <img
                src={menu}
                className={head.menu}
                onClick={() => handleClick(1)}
                alt=""
              />
            </Link>
            <Link to="/likes">
              <img
                src={like}
                className={head.like}
                onClick={() => handleClick(2)}
                alt=""
              />
            </Link>
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
            <input
              className={head.input}
              ref={sr}
              onClick={searchclick}
              type="text"
              value={vod}
              onChange={(e) => Setvod(e.target.value)}
            />
            <img ref={image} src={search} className={head.search} />
            <div className={head.serchdiv} ref={sea}>
              {filteredNames.map((name, index) => {
                const current = tovars.find((tovar) => tovar.name === name);
                console.log(tovars);
                return (
                  <Link to="/tovar">
                    {" "}
                    <h1
                      onClick={() =>
                        cardtovarload(
                          current!.id,
                          name,
                          current!.cost,
                          current!.img,
                          current!.im,
                          current!.about,
                          current!.abouts
                        )
                      }
                      key={index}
                    >
                      {name}
                    </h1>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={head.contthree}>
            <Link to="/shop">
              <img
                src={shop}
                className={head.shop}
                onClick={() => handleClick(3)}
                alt=""
              />
            </Link>
          </div>
          {user.user.id === 0 ? (
            <Link to="/vhod">
              <div className={head.contfour}>
                <img src={reg} className={head.reg} alt="" />
              </div>
            </Link>
          ) : (
            <Link to="/profile">
              <div className={head.contfour} onClick={() => handleClick(4)}>
                <img src={reg} className={head.reg} alt="" />
              </div>
            </Link>
          )}
        </div>
        <img src={linehead} className={head.linehead} alt="" ref={line} />
      </div>{" "}
    </div>
  );
};

export default Header;
