import React, { useEffect } from "react";
import catal from "../../../Styles/Catalog.module.scss";
import {
  avto,
  bit,
  dacha,
  duxi,
  meb,
  str,
  elec,
  odej,
  dom,
} from "../../../Assets/Catalog/index";
const Catalog = () => {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  function add(d: number) {
    setCount(d);
    setCount1(0);
  }
  return (
    <>
      <div className={catal.catalog}>
        <div className={catal.cat}>
          <h1 className={catal.h1}>Каталог</h1>
          <div>
            <img src={avto} alt="" />
            <h1>Автотовары</h1>
            <div className={catal.arr} onClick={() => add(1)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={bit} alt="" />
            <h1>Бытовая техника</h1>
            <div className={catal.arr} onClick={() => add(2)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={dacha} alt="" />
            <h1>Дача, сезонные товары</h1>
            <div className={catal.arr} onClick={() => add(3)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={duxi} alt="" />
            <h1>Красота и уход</h1>
            <div className={catal.arr} onClick={() => add(4)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={meb} alt="" />
            <h1>Мебель</h1>
            <div className={catal.arr} onClick={() => add(5)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={odej} alt="" />
            <h1>Одежда, обувь и аксессуары</h1>
            <div className={catal.arr} onClick={() => add(6)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={dom} alt="" />
            <h1>Товары для дома</h1>
            <div className={catal.arr} onClick={() => add(7)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={elec} alt="" />
            <h1>Электроника</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" onClick={() => add(8)} />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 1 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Автотовары</h1>
          <div>
            <h1>Автомобили</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" onClick={() => setCount1(1)} />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 2 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Бытовая техника</h1>
          <div>
            <h1>Микроволновые печи</h1>
            <div className={catal.arr} onClick={() => setCount1(2)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Стиральные машины</h1>
            <div className={catal.arr} onClick={() => setCount1(3)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Посудомоечные машины</h1>
            <div className={catal.arr} onClick={() => setCount1(4)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кофемашины</h1>
            <div className={catal.arr} onClick={() => setCount1(5)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 3 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Дача, сезонные товары</h1>
          <div>
            <h1>Теплицы</h1>
            <div className={catal.arr} onClick={() => setCount1(6)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Дома</h1>
            <div className={catal.arr} onClick={() => setCount1(7)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Водные пистолеты</h1>
            <div className={catal.arr} onClick={() => setCount1(8)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Чемоданы</h1>
            <div className={catal.arr} onClick={() => setCount1(9)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кресла для дачи</h1>
            <div className={catal.arr} onClick={() => setCount1(10)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 4 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Красота и уход</h1>
          <div>
            <h1>Туалетная вода</h1>
            <div className={catal.arr} onClick={() => setCount1(11)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 5 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Мебель</h1>
          <div>
            <h1>Шкафы</h1>
            <div className={catal.arr} onClick={() => setCount1(12)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Унитазы</h1>
            <div className={catal.arr} onClick={() => setCount1(13)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Столы</h1>
            <div className={catal.arr} onClick={() => setCount1(14)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 6 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Одежда, обувь и аксессуары</h1>
          <div>
            <h1>Верхняя одежда</h1>
            <div className={catal.arr} onClick={() => setCount1(15)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Обувь</h1>
            <div className={catal.arr} onClick={() => setCount1(16)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Нижняя одежда</h1>
            <div className={catal.arr} onClick={() => setCount1(17)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Зонты</h1>
            <div className={catal.arr} onClick={() => setCount1(18)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 7 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Товары для дома</h1>
          <div>
            <h1>Книги</h1>
            <div className={catal.arr} onClick={() => setCount1(19)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кондиционеры, порошки</h1>
            <div className={catal.arr} onClick={() => setCount1(20)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кофе</h1>
            <div className={catal.arr} onClick={() => setCount1(21)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Картины</h1>
            <div className={catal.arr} onClick={() => setCount1(22)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Фигурки</h1>
            <div className={catal.arr} onClick={() => setCount1(23)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Посуда</h1>
            <div className={catal.arr} onClick={() => setCount1(24)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat}
          style={count === 8 ? { display: "flex" } : { display: "none" }}
        >
          <h1 className={catal.h1}>Электроника</h1>
          <div>
            <h1>Смартфоны</h1>
            <div className={catal.arr} onClick={() => setCount1(25)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Процессоры для пк</h1>
            <div className={catal.arr} onClick={() => setCount1(26)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Игровые приставки</h1>
            <div className={catal.arr} onClick={() => setCount1(27)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Умный дом</h1>
            <div className={catal.arr} onClick={() => setCount1(28)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Вейпы</h1>
            <div className={catal.arr} onClick={() => setCount1(29)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 1 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>CHERY</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 2 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>tuvio</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 3 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>LEX</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 4 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>tuvio</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 5 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1> DeLonghi</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 6 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1> Капли</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 7 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Двухэтажные</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 8 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Xiaomi</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 9 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Ridberg</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 10 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Подвесные кресла</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 11 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Dolce&Gabbana</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 11 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Dolce&Gabbana</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 12 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Для одежды</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 13 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Подвесные</h1>
          </div>
          <div>
            <h1>Сиденья для унитазов</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 14 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>BERGOL</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 15 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Пуховики</h1>
          </div>
          <div>
            <h1>Куртки</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 16 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Тапки, шлепанцы</h1>
          </div>
          <div>
            <h1>Кроссовки</h1>
          </div>
          <div>
            <h1>Ботинки</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 17 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Трусы мужские</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 18 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Xiaomi</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 19 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Журналы</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 20 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Кондиционеры</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 21 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Зерновой кофе</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 22 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Картины из металла</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 23 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Металлические</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 24 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Tefal</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 25 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Apple</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 26 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Intel</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 27 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>PlayStation</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 28 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Умные станции</h1>
          </div>
        </div>
        <div
          className={catal.cat1}
          style={count1 === 29 ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <h1>Чехлы на вейпы</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
