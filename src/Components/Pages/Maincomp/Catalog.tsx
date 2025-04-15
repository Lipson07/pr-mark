import React from "react";
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

  return (
    <>
      <div className={catal.catalog}>
        <div className={catal.cat}>
          <h1 className={catal.h1}>Каталог</h1>
          <div>
            <img src={avto} alt="" />
            <h1>Автотовары</h1>
            <div className={catal.arr} onClick={() => setCount(1)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={bit} alt="" />
            <h1>Бытовая техника</h1>
            <div className={catal.arr} onClick={() => setCount(2)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={dacha} alt="" />
            <h1>Дача, сезонные товары</h1>
            <div className={catal.arr} onClick={() => setCount(3)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={duxi} alt="" />
            <h1>Красота и уход</h1>
            <div className={catal.arr} onClick={() => setCount(4)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={meb} alt="" />
            <h1>Мебель</h1>
            <div className={catal.arr} onClick={() => setCount(5)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={odej} alt="" />
            <h1>Одежда, обувь и аксессуары</h1>
            <div className={catal.arr} onClick={() => setCount(6)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={dom} alt="" />
            <h1>Товары для дома</h1>
            <div className={catal.arr} onClick={() => setCount(7)}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <img src={elec} alt="" />
            <h1>Электроника</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" onClick={() => setCount(8)} />
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
              <img src={str} alt="" />
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Стиральные машины</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Посудомоечные машины</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кофемашины</h1>
            <div className={catal.arr}>
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Дома</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Водные пистолеты</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Чемоданы</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кресла для дачи</h1>
            <div className={catal.arr}>
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
            <div className={catal.arr}>
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Унитазы</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Столы</h1>
            <div className={catal.arr}>
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Обувь</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Нижняя одежда</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Зонты</h1>
            <div className={catal.arr}>
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кондиционеры, порошки</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Кофе</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Картины</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Фигурки</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Посуда</h1>
            <div className={catal.arr}>
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
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Процессоры для пк</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Игровые приставки</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Умный дом</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
          <div>
            <h1>Вейпы</h1>
            <div className={catal.arr}>
              {" "}
              <img src={str} alt="" />
            </div>
          </div>
        </div>
        















































































      </div>
    </>
  );
};

export default Catalog;
